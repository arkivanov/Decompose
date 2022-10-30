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

## Managing lifecycle

**The components lifecycle is coupled to the Android Activity lifecycle and there is no need to handle it on Android**. But other targets have differect lifecycles and the developer should take care of controlling the Decompose lifecycle manually. Check `sample` module for full implementation for the different targets.

Here are examples:

### On Compose for Desktop

The easiest way to control the lifecycle when using JetBrains Compose is by using the extensions functions artifact.

- [How to setup](../extensions/compose.md#setup-extensions-for-jetbrains-compose)
- [How to manage lifecycle](../extensions/compose.md#controlling-the-lifecycle-on-desktop)

### On iOS

Where you configure your `RootComponent`:

1. Initialize an `LifecycleRegistry` 
2. Pass it to the context 
3. Trigger manually `onCreate()` and `onDestroy()`
4. Attach `resume` and `stop` on `onAppear` and `onDisappear`

```swift
@main
struct app_iosApp: App {
    @StateObject
    private var rootHolder = RootHolder()
        
        var body: some Scene {
            WindowGroup {
                RootView(rootHolder.root)
                    // 4. Attach `resume` and `stop` on `onAppear` and `onDisappear`
                    .onAppear { LifecycleRegistryExtKt.resume(self.rootHolder.lifecycle) }
                    .onDisappear { LifecycleRegistryExtKt.stop(self.rootHolder.lifecycle) }
            }
        }
}

private class RootHolder : ObservableObject {
    let lifecycle: LifecycleRegistry
    let root: Root
    
    init() {
        // 1. Initialize an `LifecycleRegistry`
        lifecycle = LifecycleRegistryKt.LifecycleRegistry()
        
        root = RootComponent(
            // 2. Pass the lifecycle registry to the context 
            componentContext: DefaultComponentContext(lifecycle: lifecycle),
            featureInstaller: DefaultFeatureInstaller.shared,
            deepLink: RootComponentDeepLinkNone.shared,
            webHistoryController: nil
        )
        
        // 3. (1) Trigger manually `onCreate()`
        lifecycle.onCreate()
    }
    
    // 3. (2) Trigger manually `onDestroy()`
    deinit {
        lifecycle.onDestroy()
    }
}
```


### On JavaScript

Where you configure your `RootComponent`:

1. Initialize an `LifecycleRegistry`
2. Pass it to your context
3. Create extensions function for attaching lifecycle to the document
4. Attach it to the document via simple extension function

```kotlin
@OptIn(ExperimentalDecomposeApi::class)
fun main() {
    // 1. Initialize an `LifecycleRegistry`
    val lifecycle = LifecycleRegistry()

    val root =
        RootComponent(
            // 2. Pass the lifecycle registry to your context
            componentContext = DefaultComponentContext(lifecycle = lifecycle),
            featureInstaller = DefaultFeatureInstaller,
            deepLink = RootComponent.DeepLink.Web(path = window.location.pathname),
            webHistoryController = DefaultWebHistoryController(),
        )

    // 4. Attach to document by functions below
    lifecycle.attachToDocument()

    createRoot(document.getElementById("app")!!).render(
        RootContent.create {
            component = root
        }
    )
}

// 3. Create extension functions for attaching lifecycle to document
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

private val Document.visibilityState: String get() = asDynamic().visibilityState.unsafeCast<String>()
```
