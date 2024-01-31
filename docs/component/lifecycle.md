# Lifecycle

The component lifecycle is very similar to the [Android Activity lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle). The `ComponentContext` interface extends the `LifecycleOwner` interface, which provides the `Lifecycle` - a multiplatform abstraction for lifecycle states and events. It is provided by [Essenty](https://github.com/arkivanov/Essenty) library (from the same author).

The `decompose` module adds Essenty's `lifecycle` module as `api` dependency, so you don't need to explicitly add it to your project. Please familiarise yourself with Essenty library, especially with the `Lifecycle`.

Each component has its own lifecycle. The lifecycle of a child component can not be longer than its parent's lifecycle.

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/LifecycleStates.png" width="512">

## Usage example

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnCreate
import com.arkivanov.essenty.lifecycle.subscribe

class SomeComponent(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    init {
        lifecycle.subscribe(
            object : Lifecycle.Callbacks {
                override fun onCreate() {
                    /* Component created */
                }

                // onStart, onResume, onPause, onStop, onDestroy
            }
        )

        lifecycle.subscribe(
            onCreate = { /* Component created */ },
            // onStart, onResume, onPause, onStop, onDestroy
        )

        lifecycle.doOnCreate { /* Component created */ }
        // doOnStart, doOnResume, doOnPause, doOnStop, doOnDestroy
    }
}
```

## Managing the root lifecycle

When creating a root component, it's required to supply the root lifecycle (see the [docs](overview.md#root-componentcontext) for more information about the root `ComponentContext`). The way how the root lifecycle is controlled depends on the platform. See [Quick Start](../getting-started/quick-start.md) docs for details and examples.
