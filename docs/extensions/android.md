# Extensions for Android views

*Experimental* extensions and utilities for easier integration of Decompose with Android views.

## Setup

Extensions for Android views are provided by the `extensions-android` module.

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-android:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-android:<version>")
    ```

## Content

Decompose is primarily designed for better integration with declarative UI frameworks, such as Jetpack/JetBrains Compose, SwiftUI, Kotlin/React, etc. However it still can be used with Android views. Because the main Decompose functionality is separate from UI, the latter has to be plugged externally. This module provides some essential extensions and utilities to improve the experience.

### ViewContext

As mentioned before, Decompose is not aware of any UI. Because the UI is plugged externally, it needs its own `Lifecycle`. The idea is to supply every view sub-tree with [ViewContext](https://github.com/arkivanov/Decompose/blob/master/extensions-android/src/main/java/com/arkivanov/decompose/extensions/android/ViewContext.kt), which exposes the following properties:

`parent` - a `ViewGroup` where the view sub-tree should be [inflated](https://developer.android.com/reference/android/view/LayoutInflater)
`lifecycle` - a `Lifecycle` of the view sub-tree

The following `ViewContext` [extensions](https://github.com/arkivanov/Decompose/blob/master/extensions-android/src/main/java/com/arkivanov/decompose/extensions/android/ViewContextExt.kt) are available:

- `val ViewContext.context: Context` - returns the Android `Context` of the view sub-tree
- `val ViewContext.resources: Resources` - returns the Android `Resources` of the view sub-tree
- `val ViewContext.layoutInflater: LayoutInflater` - returns the Android `LayoutInflater`
- `fun ViewContext.child(ViewGroup, inflater): ViewContext` - creates a child `ViewContext` with another `parent` `ViewGroup`, which shares the `Lifecycle` of the parent `ViewContext`. The `inflater` arguments should inflate a sub-tree of views, but *without adding* it to the `parent`.

[DefaultViewContext](https://github.com/arkivanov/Decompose/blob/master/extensions-android/src/main/java/com/arkivanov/decompose/extensions/android/DefaultViewContext.kt) - is a default implementation of `ViewContext`, which can be used to manually create new instances when needed.

### StackRouterView

[StackRouterView](https://github.com/arkivanov/Decompose/blob/master/extensions-android/src/main/java/com/arkivanov/decompose/extensions/android/stack/StackRouterView.kt) is an Android `ViewGroup` which observes the `Child Stack` and manages child views. Once `StackRouterView` is added to the view hierarchy, just call its `children(...)` method with the following arguments:

- `stack` - the observable `Value` of `ChildStack`
- `lifecycle` - the lifecycle of the `StackRouterView` or its closest parent
- `replaceChildView` - a function which replaces a currently active child view with a new one, this is also the place where transitions can be applied

## Examples

You can find an example of using this extension module in the [Counter](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/androidMain/kotlin/com/arkivanov/sample/shared/counters) sample.

Initializing the root in `Activity`:

```kotlin
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.arkivanov.decompose.defaultComponentContext
import com.arkivanov.decompose.extensions.android.DefaultViewContext
import com.arkivanov.essenty.lifecycle.essentyLifecycle

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.main_activity)

        val root = DefaultCounterComponent(defaultComponentContext())

        val viewContext =
            DefaultViewContext(
                parent = findViewById(R.id.content),
                lifecycle = essentyLifecycle()
            )

        viewContext.apply {
            parent.addView(CounterView(root))
        }
    }
}
```

A simple child view:

```kotlin
import android.view.View
import android.widget.TextView
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.value.observe

fun ViewContext.CounterView(component: CounterComponent): View {
    // Inflate the layout without adding it to the parent
    val layout = layoutInflater.inflate(R.layout.counter, parent, false)

    // Find required views
    val counterText: TextView = layout.findViewById(R.id.text_count)

    // Observe Counter models and update the view
    component.model.observe(lifecycle) { data ->
        counterText.text = data.text
    }

    return layout // Return the root of the inflated sub-tree
}
```

`StackRouterView` example:

```kotlin
import android.view.View
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.child
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.extensions.android.stack.StackRouterView

fun ViewContext.RootView(component: RootComponent): View {
    val layout = layoutInflater.inflate(R.layout.counter_root, parent, false)
    val nextButton: View = layout.findViewById(R.id.button_next)
    val routerView: StackRouterView = layout.findViewById(R.id.router)

    nextButton.setOnClickListener { counterRoot.onNextChild() }

    // Create a child `ViewContext` for the permanent `CounterView`
    child(layout.findViewById(R.id.container_counter)) {
        // Reuse the `CounterView`
        CounterView(component.counter)
    }

    // Subscribe the `StackRouterView` to the `ChildStack` changes
    routerView.children(component.childStack, lifecycle) { parent, newStack, _ ->
        // Remove all existing views
        parent.removeAllViews()

        // Add the child view for the currently active child component
        parent.addView(CounterView(newStack.active.instance))
    }

    return layout
}
```
