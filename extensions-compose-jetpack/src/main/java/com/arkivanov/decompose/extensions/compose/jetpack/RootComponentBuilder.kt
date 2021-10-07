package com.arkivanov.decompose.extensions.compose.jetpack

import androidx.activity.OnBackPressedDispatcher
import androidx.activity.OnBackPressedDispatcherOwner
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.InternalDecomposeApi
import com.arkivanov.decompose.extensions.compose.jetpack.lifecycle.lifecycle
import com.arkivanov.decompose.lifecycle.MergedLifecycle
import com.arkivanov.essenty.backpressed.BackPressedHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.lifecycle.asEssentyLifecycle
import com.arkivanov.essenty.statekeeper.StateKeeper
import androidx.lifecycle.Lifecycle as AndroidLifecycle

@OptIn(InternalDecomposeApi::class)
@Deprecated(
    message = "Composition may run on a background thread, it is advised to create components on the main thread. " +
        "Consider creating ComponentContext and components manually. " +
        "Please refer to examples: https://github.com/arkivanov/Decompose/blob/master/sample/master-detail/app-android/src/main/java/com/arkivanov/masterdetail/app/MainActivity.kt",
    level = DeprecationLevel.ERROR,
)
@Composable
fun <T> rememberRootComponent(
    savedStateRegistry: SavedStateRegistry,
    viewModelStore: ViewModelStore,
    onBackPressedDispatcher: OnBackPressedDispatcher,
    lifecycle: AndroidLifecycle? = null,
    factory: (ComponentContext) -> T,
): T {
    val composableLifecycle = lifecycle()

    return remember {
        val componentContext =
            DefaultComponentContext(
                lifecycle?.asEssentyLifecycle()?.let { MergedLifecycle(it, composableLifecycle) } ?: composableLifecycle,
                StateKeeper(savedStateRegistry),
                InstanceKeeper(viewModelStore),
                BackPressedHandler(onBackPressedDispatcher)
            )

        factory(componentContext)
    }
}

@Suppress("DeprecatedCallableAddReplaceWith", "DEPRECATION_ERROR")
@Deprecated(
    message = "Composition may run on a background thread, it is advised to create components on the main thread. " +
        "Consider creating ComponentContext and components manually. " +
        "Please refer to examples: https://github.com/arkivanov/Decompose/blob/master/sample/master-detail/app-android/src/main/java/com/arkivanov/masterdetail/app/MainActivity.kt",
    level = DeprecationLevel.ERROR,
)
@Composable
fun <T, C> T.rememberRootComponent(
    factory: (ComponentContext) -> C
): C where T : SavedStateRegistryOwner, T : OnBackPressedDispatcherOwner, T : ViewModelStoreOwner, T : LifecycleOwner =
    rememberRootComponent(
        savedStateRegistry = savedStateRegistry,
        viewModelStore = viewModelStore,
        onBackPressedDispatcher = onBackPressedDispatcher,
        lifecycle = (this as LifecycleOwner).lifecycle,
        factory = factory
    )
