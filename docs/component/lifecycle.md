# Lifecycle

The component lifecycle is very similar to the [Android Activity lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle). There is the [Lifecycle](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/lifecycle/Lifecycle.kt) interface, each instance of the `ComponentContext` has its own instance of the `Lifecycle`.

There is also [LifecycleRegistry](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/lifecycle/LifecycleRegistry.kt) which is the `Lifecycle` and the `Lifecycle.Callbacks` at the same time. `LifecycleRegistry` can be used to manually control the lifecycle. It can be passed to a root component, or can be used in tests.

Each component has its own lifecycle. The lifecycle of a child component can not be longer than its parent's lifecycle.

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/LifecycleStates.png" width="512">

The lifecycle can be observed using its `subscribe`/`unsubscribe` methods:

```kotlin
lifecycle.subscribe(
    object : DefaultLifecycleCallbacks {
        override fun onCreate() {
            // Handle lifecycle created
        }

        // onStart, onResume, onPause, onStop are also available

        override fun onDestroy() {
            // Handle lifecycle destroyed
        }
    }
)
```

Or using the extension functions:

```kotlin
lifecycle.subscribe(
    onCreate = { /* Handle lifecycle created */ },
    // onStart, onResume, onPause, onStop are also available
    onDestroy = { /* Handle lifecycle destroyed */ }
)

lifecycle.doOnCreate {
    // Handle lifecycle created
}

// doOnStart, doOnResume, doOnPause, doOnStop are also available

lifecycle.doOnDestroy {
    // Handle lifecycle destroyed
}
```
