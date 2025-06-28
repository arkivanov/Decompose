# JetpackComponentContext

The `JetpackComponentContext` is an extension of the Decompose component system that integrates with Jetpack architecture components. It provides a bridge between Decompose's component system and Jetpack libraries, enabling seamless use of Jetpack `Lifecycle`, `SavedState`, and `ViewModel` functionality within Decompose components.

!!!warning

    This API is experimental and is available since version `3.4.0-alpha03`. The API is subject to change.

## Setup

Please see the corresponding [Installation docs section](../getting-started/installation.md#jetpackcomponentcontext).

## Overview

`JetpackComponentContext` extends `GenericComponentContext` and implements various Jetpack interfaces:

- [androidx.lifecycle.LifecycleOwner](https://developer.android.com/reference/kotlin/androidx/lifecycle/LifecycleOwner) - provides access to Jetpack's `Lifecycle`.
- [androidx.savedstate.SavedStateRegistryOwner](https://developer.android.com/reference/kotlin/androidx/savedstate/SavedStateRegistryOwner) - enables state preservation via Jetpack's `SavedState`.
- [androidx.lifecycle.ViewModelStoreOwner](https://developer.android.com/reference/kotlin/androidx/lifecycle/ViewModelStoreOwner) - allows using Jetpack `ViewModels`

This integration allows you to use AndroidX Architecture Components directly with Decompose components, combining the benefits of both systems. You can keep using APIs provided by Essenty (such as `Lifecycle`, `StateKeeper` or `InstanceKeeper`), plus you also have access to AndroidX APIs.

!!!note

    The [OnBackPressedDispatcherOwner](https://developer.android.com/reference/kotlin/androidx/activity/OnBackPressedDispatcherOwner) and the new [NavigationEventDispatcherOwner](https://developer.android.com/reference/kotlin/androidx/navigationevent/NavigationEventDispatcherOwner) interfaces are not yet supported. Most likely the `GenericComponentContext` interface will be extending `NavigationEventDispatcherOwner` in the next major release of Decompose 4.0. See [b/425223277](https://issuetracker.google.com/issues/425223277) for more information.

!!!note

    The persistent state saving via `SavedStateRegistryOwner` is only supported on Android. On all other platforms, the state cannot be serialized at the moment. You can still use [StateKeeperOwner](state-preservation.md), which supports serialization on all platforms. See [b/425919375](https://issuetracker.google.com/issues/425919375) for more information.

### Lifecycle

The `Lifecycle` provided by `JetpackComponentContext` extends both [AndroidX Lifecycle](https://developer.android.com/reference/kotlin/androidx/lifecycle/Lifecycle) and [Essenty Lifecycle](../component/lifecycle.md) at the same time. This means that in addition to what's provided by Essenty, you can also use AndroidX APIs and extensions, such as [LifecycleOwner#lifecycleScope](https://developer.android.com/reference/kotlin/androidx/lifecycle/LifecycleOwner#(androidx.lifecycle.LifecycleOwner).lifecycleScope()).

## Usage

### Converting a component context to JetpackComponentContext

You can convert any `GenericComponentContext` to a `JetpackComponentContext` using the `asJetpackComponentContext()` extension function:

```kotlin
import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import com.arkivanov.decompose.defaultComponentContext
import com.arkivanov.decompose.jetpackcomponentcontext.asJetpackComponentContext
import com.arkivanov.sample.shared.root.DefaultRootComponent

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root =
            DefaultRootComponent(
                componentContext = defaultComponentContext().asJetpackComponentContext(),
            )

        setContent {
            RootContent(root)
        }
    }
}
```

### Using JetpackComponentContext

```kotlin
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.createSavedStateHandle
import androidx.lifecycle.lifecycleScope
import com.arkivanov.decompose.jetpackcomponentcontext.JetpackComponentContext
import com.arkivanov.decompose.jetpackcomponentcontext.viewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class DefaultRootComponent(
    componentContext: JetpackComponentContext,
) : RootComponent, JetpackComponentContext by componentContext {

    // Creating a ViewModel using the `viewModel {}` extension function 
    private val viewModel = viewModel { RootViewModel(createSavedStateHandle()) }

    init {
        lifecycleScope.launch {
            // A coroutine launched in the Lifecycle scope

            while (true) {
                viewModel.state.update { it + 1 }
                delay(1000)
            }
        }
    }
}

private class RootViewModel(
    savedStateHandle: SavedStateHandle,
) : ViewModel() {
    val state: MutableStateFlow<Int> = savedStateHandle.getMutableStateFlow(key = "state", initialValue = 0)
}
```
