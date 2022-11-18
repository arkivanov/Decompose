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

When creating a root component, it's required to supply the root lifecycle (see the [docs](../overview/#root-componentcontext) for more information about the root `ComponentContext`). The way how the root lifecycle is controlled depends on the platform.

### On Android

On Android, the root lifecycle should be attached to a hosting Activity or a Fragment. See the [docs](../overview/#root-componentcontext-in-android) to read about root `ComponentContext` on Android.

### On Compose for Desktop

The easiest way to control the lifecycle when using Compose for Desktop is by using `LifecycleController` from `extensions-compose-jetbrains` module.

- [How to setup](../extensions/compose.md#setup-extensions-for-jetbrains-compose)
- [How to manage the lifecycle](../extensions/compose.md#controlling-the-lifecycle-on-desktop)

### On iOS

In the place where you create your `RootComponent`:

1. Initialize a `LifecycleRegistry`.
2. Pass it into the root `ComponentContext`.
3. Manually call `create()` and `destroy()` when needed.
4. Call `resume()` and `stop()` in `onAppear` and `onDisappear` respectively.

```swift title="Example"
@main
struct app_iosApp: App {
    @StateObject
    private var rootHolder = RootHolder()
        
        var body: some Scene {
            WindowGroup {
                RootView(rootHolder.root)
                    // Call `resume()` and `stop()` in `onAppear` and `onDisappear`
                    .onAppear { LifecycleRegistryExtKt.resume(self.rootHolder.lifecycle) }
                    .onDisappear { LifecycleRegistryExtKt.stop(self.rootHolder.lifecycle) }
            }
        }
}

private class RootHolder : ObservableObject {
    let lifecycle: LifecycleRegistry
    let root: Root
    
    init() {
        // Initialize a `LifecycleRegistry`
        lifecycle = LifecycleRegistryKt.LifecycleRegistry()
        
        root = RootComponent(
            // Pass the LifecycleRegistry to the context 
            componentContext: DefaultComponentContext(lifecycle: lifecycle),
            ... // Other dependencies here
        )
        
        // Manually call `create()`
        LifecycleRegistryExtKt.create(lifecycle)
    }
    
    // Manually call `destroy()`
    deinit {
        LifecycleRegistryExtKt.destroy(lifecycle)
    }
}
```


### On JavaScript

In the place where you create your `RootComponent`:

1. Initialize a `LifecycleRegistry`.
2. Pass it into the root `ComponentContext`.
3. Attach the `LifecycleRegistry` to the `document` via an extension function.

```kotlin title="Example"
@OptIn(ExperimentalDecomposeApi::class)
fun main() {
    // Initialize a `LifecycleRegistry`
    val lifecycle = LifecycleRegistry()

    val root =
        RootComponent(
            // Pass the LifecycleRegistry to the context
            componentContext = DefaultComponentContext(lifecycle = lifecycle),
            ... // Other dependencies here
        )

    // Attach the LifecycleRegistry to document
    lifecycle.attachToDocument()

    createRoot(document.getElementById("app")!!).render(
        RootContent.create {
            component = root
        }
    )
}

// Attaches the LifecycleRegistry to the document
private fun LifecycleRegistry.attachToDocument() {
    fun onVisibilityChanged() {
        if (document.visibilityState == "visible") {
            resume()
        } else {
            stop()
        }
    }

    onVisibilityChanged()

    document.addEventListener(type = "visibilitychange", callback = { onVisibilityChanged() })
}

private val Document.visibilityState: String
    get() = asDynamic().visibilityState.unsafeCast<String>()
```

### Other platforms

All other platforms should follow a similar approach:

1. Initialize a `LifecycleRegistry`.
2. Pass it into the root `ComponentContext`.
3. Manually call `create()`, `resume()`, `stop()` and `destroy()` when needed.
