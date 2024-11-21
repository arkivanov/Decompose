# Extensions for Jetpack/JetBrains Compose

Extensions and utilities for easier integration of Decompose with Jetpack and Multiplatform Compose.

## Setup

Please see the corresponding [Installation docs section](../getting-started/installation.md#extensions-for-jetpack-and-multiplatform-compose).

### ProGuard rules for Compose for Desktop (JVM)

If you support Compose for Desktop, you will need to add the following rule for ProGuard, so that the app works correctly in release mode. See [Minification & obfuscation](https://github.com/JetBrains/compose-multiplatform/tree/master/tutorials/Native_distributions_and_local_execution#minification--obfuscation) section in Compose docs for more information.

```
-keep class com.arkivanov.decompose.extensions.compose.jetbrains.mainthread.SwingMainThreadChecker
```

## Converting Value to State

To convert Decompose [Value](https://github.com/arkivanov/Decompose/tree/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value) to Compose `State` use `Value<T>.subscribeAsState(): State<T>` extension function:

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.decompose.value.Value

interface SomeComponent {
    val model: Value<Model>

    data class Model(/*...*/)
}

@Composable
fun SomeContent(component: SomeComponent) {
    val model: State<SomeComponent.Model> = component.model.subscribeAsState()

    // Or use the delegation pattern
    val model by component.model.subscribeAsState()
}
```

## Controlling the Lifecycle on Desktop

When using JetBrains Compose, you can have the `LifecycleRegistry` react to changes in the window state using the `LifecycleController()` composable. This will trigger appropriate lifecycle events when the window is minimized, restored or closed.

It is also possible to manually start the lifecycle using `LifecycleRegistry.resume()` when the instance is created.

```kotlin
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.extensions.compose.jetbrains.lifecycle.LifecycleController
import com.arkivanov.essenty.lifecycle.LifecycleRegistry

fun main() {
    val lifecycle = LifecycleRegistry()

    val root =
        runOnUiThread {
            DefaultRootComponent(DefaultComponentContext(lifecycle))
        }

    application {
        val windowState = rememberWindowState()
        LifecycleController(lifecycle, windowState)

        Window(onCloseRequest = ::exitApplication, state = windowState) {
            RootContent(root)
        }
    }
}
```

!!!warning
    When using Compose in desktop platforms, make sure to always use one of the methods above, or your components might not receive lifecycle events correctly.

!!! note

    You can find the `runOnUiThread` method [here](https://github.com/arkivanov/Decompose/blob/master/sample/app-desktop/src/jvmMain/kotlin/com/arkivanov/sample/app/Utils.kt).

## Observing the navigation state manually

In most of the cases there is no need to manually observe the navigation state. One of the ways described in the sections below can be used instead. For instance, it's advised to use the `Children` function to display a stack of components. However, in some cases observing the navigation state manually can be useful. Every navigation model exposes its state as `Value<T>`, which makes it possible to observe the navigation state in Compose just as any other state.

```kotlin
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState

@Composable
fun RootContent(component: RootComponent) {
    val stack by component.childStack.subscribeAsState()
    // Use the stack variable here
}
```

## Navigating between Composable components

The [Child Stack](../navigation/stack/overview.md) navigation model provides [ChildStack](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/ChildStack.kt) as `Value<ChildStack>` that can be observed in a `Composable` component. This makes it possible to switch child `Composable` components following the `ChildStack` changes.

The Compose extension module provides the [Children(...)](https://github.com/arkivanov/Decompose/blob/master/extensions-compose/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/stack/Children.kt) function which has the following features:

- It listens for the `ChildStack` changes and displays the corresponding child `Composable` component using the provided slot lambda.
- It preserves components' UI state (e.g. scrolling position) in the back stack and over configuration changes and process death.
- It animates between children if there is an `animation` spec provided.

Here is an example of switching child components on navigation:

```kotlin
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.extensions.compose.jetbrains.stack.Children
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.sample.shared.RootComponent.Child.DetailsChild
import com.sample.shared.RootComponent.Child.MainChild

// Root

interface RootComponent {
    val childStack: Value<ChildStack<*, Child>>

    sealed class Child {
        data class MainChild(val component: MainComponent) : Child()
        data class DetailsChild(val component: DetailsComponent) : Child()
    }
}

@Composable
fun RootContent(rootComponent: RootComponent) {
    Children(rootComponent.childStack) {
        when (val child = it.instance) {
            is MainChild -> MainContent(child.component)
            is DetailsChild -> DetailsContent(child.component)
        }
    }
}

// Children

interface MainComponent

interface DetailsComponent

@Composable
fun MainContent(component: MainComponent) {
    // Omitted code
}

@Composable
fun DetailsContent(component: DetailsComponent) {
    // Omitted code
}
```

## Child Slot navigation with Compose

Child Slot navigation model can be used for different purposes. It can be used to just show/hide a certain part of UI, or to present a dialog, or a sheet (like Material Bottom Sheet). Although Decompose doesn't provide any special Compose API for Child Slot, it's pretty easy to do it manually.

```kotlin title="AlertDialog example"
import androidx.compose.foundation.layout.width
import androidx.compose.material.AlertDialog
import androidx.compose.material.Text
import androidx.compose.material.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState
import com.arkivanov.decompose.router.slot.ChildSlot
import com.arkivanov.decompose.value.Value

interface RootComponent {
    val dialog: Value<ChildSlot<*, DialogComponent>>
}

@Composable
fun RootContent(component: RootComponent) {
    val dialogSlot by component.dialog.subscribeAsState()
    dialogSlot.child?.instance?.also {
        DialogContent(component = it)
    }
}

interface DialogComponent {
    fun onDismissClicked()
}

@Composable
fun DialogContent(component: DialogComponent) {
    AlertDialog(
        onDismissRequest = component::onDismissClicked,
        title = { Text(text = "Title") },
        text = { Text(text = "Message") },
        confirmButton = {
            TextButton(onClick = component::onDismissClicked) {
                Text("Dismiss")
            }
        },
        modifier = Modifier.width(300.dp),
    )
}
```

!!! note

    Child Slot might not be suitable for a Navigation Drawer. This is because the Navigation Drawer can be opened by a drag gesture at any time. The corresponding component should be [always created](https://arkivanov.github.io/Decompose/component/child-components/#adding-a-child-component-manually) so that it's always ready to be rendered.

## Child Pages navigation with Compose

The [Child Pages](../navigation/pages/overview.md) navigation model provides [ChildPages](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/pages/ChildPages.kt) as `Value<ChildPages>` that can be observed in a `Composable` component.

The Compose extension module provides the [ChildPages(...)](https://github.com/arkivanov/Decompose/blob/master/extensions-compose/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/pages/ChildPages.kt) function which has the following features:

- It listens for the `ChildPages` changes and displays child components using `HorizontalPager` or `VerticalPager` (see the related Jetpack Compose [documentation](https://developer.android.com/jetpack/compose/layouts/pager)).
- It animates page changes if there is a `scrollAnimation` spec provided.

=== "Before version 3.2.0-alpha03"

    ```kotlin title="Example"
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.jetbrains.pages.Pages
    import com.arkivanov.decompose.extensions.compose.jetbrains.pages.PagesScrollAnimation
    
    @Composable
    fun PagesContent(component: PagesComponent) {
        Pages(
            pages = component.pages,
            onPageSelected = component::selectPage,
            scrollAnimation = PagesScrollAnimation.Default,
        ) { _, page ->
            PageContent(page)
        }
    }
    
    @Composable
    fun PageContent(component: PageComponent) {
        // Omitted code
    }
    ```

=== "Since version 3.2.0-alpha03"

    ```kotlin title="Example"
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.jetbrains.pages.ChildPages
    import com.arkivanov.decompose.extensions.compose.jetbrains.pages.PagesScrollAnimation
    
    @Composable
    fun PagesContent(component: PagesComponent) {
        ChildPages(
            pages = component.pages,
            onPageSelected = component::selectPage,
            scrollAnimation = PagesScrollAnimation.Default,
        ) { _, page ->
            PageContent(page)
        }
    }
    
    @Composable
    fun PageContent(component: PageComponent) {
        // Omitted code
    }
    ```

## Child Panels navigation with Compose

!!!warning
    This navigation model is experimental since version `3.2.0-beta01`, the API is subject to change.

The [Child Panels](../navigation/panels/overview.md) navigation model provides [ChildPanels](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/panels/ChildPanels.kt) as `Value<ChildPages>` that can be observed in a `Composable` component.

The experimental Compose extension module provides the [ChildPanels(...)](https://github.com/arkivanov/Decompose/blob/master/extensions-compose-experimental/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/experimental/panels/ChildPanels.kt) function which has the following features:

- It listens for the `ChildPanels` changes and displays child components (panels) using the provided `layout`.
- It animates panel changes using the provided `animators` and `predictiveBackParams` specs.
- It supports displaying either just two panels (Main and Details) or three panels (Main, Details and Extra).

The following arguments are supported.

- `panels` - an observable [ChildPanels] to be displayed.
- `mainChild` - a `Composable` function that displays the provided Main component.
- `detailsChild` - a `Composable` function that displays the provided Details component.
- `extraChild` - a `Composable` function that displays the provided Extra component.
- `modifier` - a `Modifier` to be applied to a wrapping container.
- `layout` - an implementation of [ChildPanelsLayout](https://github.com/arkivanov/Decompose/blob/master/extensions-compose-experimental/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/experimental/panels/ChildPanelsLayout.kt) responsible for laying out panels. The default layout is [HorizontalChildPanelsLayout](https://github.com/arkivanov/Decompose/blob/master/extensions-compose-experimental/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/experimental/panels/HorizontalChildPanelsLayout.kt).
- `animators` - a [ChildPanelsAnimators](https://github.com/arkivanov/Decompose/blob/master/extensions-compose-experimental/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/experimental/panels/ChildPanelsAnimators.kt) containing panel animators for different kinds of layouts.
- `predictiveBackParams` - a function that returns `PredictiveBackParams` for the specified `ChildPanels`, or `null`. The predictive back gesture is enabled if the value returned for the specified `ChildStack` is not `null`, and disabled if the returned value is `null`. Only works if `ChildPanels.mode` is `SINGLE`. Also see the related docs below.

The default `HorizontalChildPanelsLayout` layout places child components (panels) in the following ways.

- If the `mode` is `SINGLE`, all panels are displayed in a stack. The Main panel, then the Details panel on top (if any), and finally the Extra panel (if any).
- If the `mode` is `DUAL`, the Main panel is always displayed on the left side, and then the Details and the Extra panels are displayed in a stack on the right side (next to the Main panel).
- If the `mode` is `TRIPLE`, all panels are displayed horizontally side by side.

You can use window size classes from the `material3-window-size-class` package to determine which `ChildPanelsMode` should be used.

```kotlin title="WindowSizeClass example"
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass
import androidx.compose.material3.windowsizeclass.WindowWidthSizeClass.Companion.Expanded
import androidx.compose.material3.windowsizeclass.calculateWindowSizeClass
import com.arkivanov.decompose.router.panels.ChildPanelsMode
import com.arkivanov.decompose.router.panels.ChildPanelsMode.SINGLE
import com.arkivanov.decompose.router.panels.ChildPanelsMode.DUAL

@Composable
fun ChildPanelsModeChangedEffect(onModeChanged: (ChildPanelsMode) -> Unit) {
    val windowSize = calculateWindowSizeClass()
    val mode = if (windowSize.widthSizeClass < Expanded) SINGLE else DUAL

    DisposableEffect(mode) {
        onModeChanged(mode)
        onDispose {}
    }
}
```

```kotlin title="Basic example"
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.extensions.compose.experimental.panels.ChildPanels
import com.arkivanov.decompose.router.panels.ChildPanelsMode

@Composable
fun PanelsContent(component: PanelsComponent) {
    ChildPanelsModeChangedEffect(component::setMode)

    ChildPanels(
        panels = component.panels,
        mainChild = { MainContent(it.instance) },
        detailsChild = { DetailsContent(it.instance) },
    )
}

@Composable
fun MainContent(component: MainComponent) {
    // Omitted code
}

@Composable
fun DetailsContent(component: DetailsComponent) {
    // Omitted code
}
```

```kotlin title="Example with animations"
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.extensions.compose.experimental.panels.ChildPanels
import com.arkivanov.decompose.extensions.compose.experimental.panels.ChildPanelsAnimators
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
import com.arkivanov.decompose.router.panels.ChildPanelsMode

@Composable
fun PanelsContent(component: PanelsComponent) {
    ChildPanelsModeChangedEffect(component::setMode)

    ChildPanels(
        panels = component.panels,
        mainChild = { MainContent(it.instance) },
        detailsChild = { DetailsContent(it.instance) },
        animators = ChildPanelsAnimators(single = fade() + scale(), dual = fade() to fade()),
        predictiveBackParams = { // See the docs below
            PredictiveBackParams(
                backHandler = component.backHandler,
                onBack = component::onBackClicked,
                animatable = ::materialPredictiveBackAnimatable,
            )
        },
    )
}
```

## Animations

Decompose provides [Child Animation API](https://github.com/arkivanov/Decompose/tree/master/extensions-compose/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/stack/animation) for Compose, as well as some predefined animation specs. To enable child animations you need to pass the `animation` argument to the `Children` function. There are predefined animators provided by Decompose.

### The new experimental animation API

Since version `3.2.0-alpha04`, Decompose also provides additional module with experimental animation API. Unlike the default stable API, the new experimental animation API also supports the [Shared Element Transitions](https://developer.android.com/develop/ui/compose/animation/shared-elements).

#### Adding the dependency with the new animation API

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose-experimental:<version>"
    ```
=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose-experimental:<version>")
    ```

#### The ChildStack composable function

The [ChildStack](https://github.com/arkivanov/Decompose/blob/master/extensions-compose-experimental/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/experimental/stack/ChildStack.kt) composable function is a replacement for the default `Children` composable function and serves the same purpose: displaying Child Stack components with transition animations.

```kotlin title="Example"
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack

@Composable
fun RootContent(rootComponent: RootComponent) {
    ChildStack(rootComponent.childStack) {
        when (val child = it.instance) {
            is MainChild -> MainContent(child.component)
            is DetailsChild -> DetailsContent(child.component)
        }
    }
}
```

### Fade animation

=== "Default API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = stackAnimation(fade()),
        ) {
            // Omitted code
        }
    }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation(fade()),
        ) {
            // Omitted code
        }
    }
    ```

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationFade.gif" width="512">

### Slide animation

=== "Default API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.slide
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = stackAnimation(slide()),
        ) {
            // Omitted code
        }
    }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.slide
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation(slide()),
        ) {
            // Omitted code
        }
    }
    ```

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationSlide.gif" width="512">

### Combining animators

It is also possible to combine animators using the `plus` operator. Please note that the order matters - the right animator is applied after the left animator.

=== "Default API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = stackAnimation(fade() + scale())
        ) {
            // Omitted code
        }
    }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation(fade() + scale())
        ) {
            // Omitted code
        }
    }
    ```

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationFadeScale.gif" width="512">

### Separate animations for children

Previous examples demonstrate simple cases when all children have the same animation. But it is also possible to specify separate animations for children.

=== "Default API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.stack.animation.slide
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = stackAnimation { child ->
                when (child.instance) {
                    is MainChild -> fade() + scale()
                    is DetailsChild -> fade() + slide()
                }
            }
        ) {
            // Omitted code
        }
    }
    ```

=== "Experimental API"

    Not avilable. Please use the veriant below.

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationSeparate.gif" width="512">

It is also possible to take into account the other child and the animation direction when selecting the animation.

=== "Default API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = stackAnimation { child, otherChild, direction ->
                // Select and return an animator here
            }
        ) {
            // Omitted code
        }
    }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation { child, otherChild, direction ->
                // Select and return an animator here
            }
        ) {
            // Omitted code
        }
    }
    ```

### Default stack animations

By default, the `Children` function (and all other functions with stack animations) does not animate stack changes, the change is performed instantly. The default stack animation is configurable so that it's possible to avoid specifying the same animation multiple times.

=== "Default API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import androidx.compose.runtime.CompositionLocalProvider
    import com.arkivanov.decompose.extensions.compose.stack.animation.LocalStackAnimationProvider
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimationProvider
    import com.arkivanov.decompose.extensions.compose.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.stack.animation.slide
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun App() {
        CompositionLocalProvider(LocalStackAnimationProvider provides DefaultStackAnimationProvider) {
            // The rest of the code
        }
    }
    
    private object DefaultStackAnimationProvider : StackAnimationProvider {
        override fun <C : Any, T : Any> provide(): StackAnimation<C, T> =
            stackAnimation(slide() + scale())
    }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import androidx.compose.runtime.CompositionLocalProvider
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.LocalStackAnimationProvider
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimation
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimationProvider
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.slide
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    
    @Composable
    fun App() {
        CompositionLocalProvider(LocalStackAnimationProvider provides DefaultStackAnimationProvider) {
            // The rest of the code
        }
    }
    
    private object DefaultStackAnimationProvider : StackAnimationProvider {
        override fun <C : Any, T : Any> provide(): StackAnimation<C, T> =
            stackAnimation(slide() + scale())
    }
    ```

### Custom animations

It is also possible to define custom animations.

#### Implementing `StackAnimation`

This is the most flexible low-level API. The animation block receives the current `ChildStack` and animates children using the provided `content` slot.

=== "Default API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import androidx.compose.ui.Modifier
    import com.arkivanov.decompose.Child
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimation
    import com.arkivanov.decompose.router.stack.ChildStack
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = someAnimation(),
        ) {
            // Omitted code
        }
    }
    
    fun <C : Any, T : Any> someAnimation(): StackAnimation<C, T> =
        StackAnimation { stack: ChildStack<C, T>,
                         modifier: Modifier,
                         content: @Composable (Child.Created<C, T>) -> Unit ->
            // Render each frame here
        }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.animation.AnimatedVisibilityScope
    import androidx.compose.runtime.Composable
    import androidx.compose.ui.Modifier
    import com.arkivanov.decompose.Child
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimation
    import com.arkivanov.decompose.router.stack.ChildStack
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = someAnimation(),
        ) {
            // Omitted code
        }
    }
    
    fun <C : Any, T : Any> someAnimation(): StackAnimation<C, T> =
        StackAnimation { stack: ChildStack<C, T>,
                         modifier: Modifier,
                         content: @Composable AnimatedVisibilityScope.(Child.Created<C, T>) -> Unit ->
            // Render each frame here
        }
    ```

#### Implementing `StackAnimator`

=== "Default API"

    The `stackAnimation` function takes care of tracking the `ChildStack` changes. `StackAnimator` is only responsible for manipulating the `Modifier` in the given `direction`, and calling `onFinished` at the end.

    ```kotlin
    import androidx.compose.runtime.Composable
    import androidx.compose.ui.Modifier
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimator
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = stackAnimation(someAnimator()),
        ) {
            // Omitted code
        }
    }
    
    fun someAnimator(): StackAnimator =
        StackAnimator { direction: Direction,
                        isInitial: Boolean,
                        onFinished: () -> Unit,
                        content: @Composable (Modifier) -> Unit ->
            // Manipulate the Modifier in the given direction and call onFinished at the end
        }
    ```

=== "Experimental API"

    The `stackAnimation` function takes care of tracking the `ChildStack` changes. `StackAnimator` is only responsible for animating a `Modifier` in the given `direction` and returning it from the `StackAnimator` composable block.

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimator
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation(someAnimator()),
        ) {
            // Omitted code
        }
    }
    
    fun someAnimator(): StackAnimator =
        StackAnimator { direction: Direction ->
            // Animate and return a Modifier for the given direction
        }
    ```

#### Using `stackAnimator` function

=== "Default API"

    This is the simplest, but less powerful way. The `stackAnimator` function takes care of running the animation. Its block has a very limited responsibility: to render the current frame using the provided `factor` and `direction`.

    ```kotlin
    import androidx.compose.runtime.Composable
    import androidx.compose.ui.Modifier
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimator
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimator
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = stackAnimation(someAnimator()),
        ) {
            // Omitted code
        }
    }
    
    fun someAnimator(): StackAnimator =
        stackAnimator { factor: Float,
                        direction: Direction,
                        content: (Modifier) -> Unit ->
            // Render the current frame
        }
    ```

=== "Experimental API"

    This is the simplest, but less powerful way. The `stackAnimator` function takes care of running the animation. Its block has a very limited responsibility: to create and return a `Modifier` for the current frame using the provided `factor` and `direction`.

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimator
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimator
    import com.arkivanov.decompose.extensions.compose.stack.animation.Direction
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation(someAnimator()),
        ) {
            // Omitted code
        }
    }
    
    fun someAnimator(): StackAnimator =
        stackAnimator { factor: Float, direction: Direction ->
            // Create and return a Modifier for the current frame
        }
    ```

Please refer to the predefined animators (`fade`, `slide`, etc.) for implementation examples.

## Shared Element Transitions

The support of the [Shared Element Transitions](https://developer.android.com/develop/ui/compose/animation/shared-elements) is experimental since version `3.2.0-alpha03`. It requires using the new experimental animation API from the [extensions-compose-experimental](#adding-the-dependency-with-the-new-animation-api) module.

The `ChildStack` composable function exposes [AnimatedVisibilityScope](https://developer.android.com/reference/kotlin/androidx/compose/animation/AnimatedVisibilityScope) as a receiver parameter of the `content` composable block. The scope is automatically controlled by Decompose when playing the animations, including predictive back gesture animations. So this can be used as usual for Shared Element Transitions. Please follow the Jetpack Compose docs linked above for more information and examples.

## Predictive Back Gesture

!!!warning
    Predictive Back Gesture support is experimental, the API is subject to change.

`Child Stack` supports the new [Android Predictive Back Gesture](https://developer.android.com/guide/navigation/custom-back/predictive-back-gesture) on all platforms. By default, the gesture animation resembles the [predictive back design for Android](https://developer.android.com/design/ui/mobile/guides/patterns/predictive-back), but it's customizable.

If you are using the experimental animation API, then the default gesture animation is the one used by `ChildStack` composable function. E.g. if you have `stackAnimation(slide())` specified for `ChildStack`, then the same slide animation will be playing for predictive back gesture.

To enable the gesture, first implement `BackHandlerOwner` interface in your component with `Child Stack`, then just pass `predictiveBackAnimation` to the `Children` function.

```kotlin title="RootComponent"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackHandlerOwner

interface RootComponent : BackHandlerOwner {
    val childStack: Value<ChildStack<...>>

    fun onBackClicked()
}

class DefaultRootComponent(
    componentContext: ComponentContext,
) : RootComponent, ComponentContext by componentContext, BackHandlerOwner {
    private val navigation = StackNavigation<Config>()

    // ComponentContext already implements BackHandlerOwner, no need to implement it separately

    // Omitted body

    override fun onBackClicked() {
        navigation.pop()
    }
}

```

=== "Default API"

    ```kotlin title="RootContent"
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.predictiveBackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = predictiveBackAnimation(
                backHandler = component.backHandler,
                fallbackAnimation = stackAnimation(fade() + scale()), // Your usual animation here
                onBack = component::onBackClicked,
            ),
        ) {
            // Omitted code
        }
    }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation(
                animator = fade() + scale(),
                predictiveBackParams = {
                    PredictiveBackParams(
                        backHandler = component.backHandler,
                        onBack = component::onBackClicked,
                    )
                },
            ),
        ) {
            // Omitted code
        }
    }
    ```

### Predefined animations

=== "Default API"

    By default, the gesture animation resembles the [predictive back design for Android](https://developer.android.com/design/ui/mobile/guides/patterns/predictive-back) on all platforms. There is no need to do anything special.

=== "Experimental API"

    As mentioned earlier, if you are using the experimental animation API, then the default gesture animation is the one used by `ChildStack` composable function. Use the following code to enable [predictive back design for Android](https://developer.android.com/design/ui/mobile/guides/patterns/predictive-back).

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation(
                animator = fade() + scale(),
                predictiveBackParams = {
                    PredictiveBackParams(
                        backHandler = component.backHandler,
                        onBack = component::onBackClicked,
                        animatable = ::materialPredictiveBackAnimatable,
                    )
                },
            ),
        ) {
            // Omitted code
        }
    }
    ```

<video width="192" autoplay loop muted><source src="/Decompose/media/BackGestureMaterial.mp4" type="video/mp4"></video>

#### Standard Android-like system animation

The `androidPredictiveBackAnimatable` API resembles the standard back gesture animation used on some Android devices (e.g. in system settings on Pixel phones).

=== "Default API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.androidPredictiveBackAnimatable
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.predictiveBackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = predictiveBackAnimation(
                backHandler = component.backHandler,
                fallbackAnimation = stackAnimation(fade() + scale()),
                selector = { backEvent, _, _ -> androidPredictiveBackAnimatable(backEvent) },
                onBack = component::onBackClicked,
            ),
        ) {
            // Omitted code
        }
    }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.plus
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.scale
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.androidPredictiveBackAnimatable
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = stackAnimation(
                animator = fade() + scale(),
                predictiveBackParams = {
                    PredictiveBackParams(
                        backHandler = component.backHandler,
                        onBack = component::onBackClicked,
                        animatable = ::androidPredictiveBackAnimatable,
                    )
                }
            ),
        ) {
            // Omitted code
        }
    }
    ```

<video width="192" autoplay loop muted><source src="/Decompose/media/BackGestureAndroid.mp4" type="video/mp4"></video>

### Predictive Back Gesture on Android

On Android, the predictive back gesture only works starting with Android T. On Android T, it works only between Activities, if enabled in the system settings. Starting with Android U, the predictive back gesture [can be enabled](https://developer.android.com/guide/navigation/custom-back/predictive-back-gesture#opt-predictive) between `Child Stack` screens inside a single Activity.

### Predictive Back Gesture on other platforms

On all other platforms, the predictive back gesture can be enabled by showing a special overlay that automatically handles the gesture and manipulates `BackDispatcher` as needed.

1. Create `BackDispatcher` and assign it to a variable.
2. Create the root `DefaultComponentContext` and pass the previously created `BackDispatcher` as `backHandler` argument.
3. Pass the **same** `BackDispatcher` to `PredictiveBackGestureOverlay`.

```kotlin title="Using Composable PredictiveBackGestureOverlay on iOS"
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.ComposeUIViewController
import com.arkivanov.decompose.extensions.compose.PredictiveBackGestureIcon
import com.arkivanov.decompose.extensions.compose.PredictiveBackGestureOverlay
import com.arkivanov.essenty.backhandler.BackDispatcher
import platform.UIKit.UIViewController

fun rootViewController(root: RootComponent, backDispatcher: BackDispatcher): UIViewController =
    ComposeUIViewController {
        PredictiveBackGestureOverlay(
            backDispatcher = backDispatcher,
            backIcon = { progress, _ ->
                PredictiveBackGestureIcon(
                    imageVector = Icons.Default.ArrowBack,
                    progress = progress,
                )
            },
            modifier = Modifier.fillMaxSize(),
        ) {
            RootContent(component = root, modifier = Modifier.fillMaxSize())
        }
    }
```

### Predictive Back Gesture on iOS

It is possible to customize the predictive back gesture, so it looks native-ish on iOS.

<video width="192" autoplay loop muted><source src="/Decompose/media/BackGestureIos.mp4" type="video/mp4"></video>

Add the following code in your `commonMain` source set.

=== "Default API"

    ```kotlin title="In commonMain source set"
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.stack.Children
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimation
    import com.arkivanov.essenty.backhandler.BackHandler
    
    @Composable
    fun RootContent(component: RootComponent) {
        Children(
            stack = component.childStack,
            animation = backAnimation(
                backHandler = component.backHandler,
                onBack = component::onBackClicked,
            ),
        ) {
            // Omitted code
        }
    }
    
    expect fun <C : Any, T : Any> backAnimation(
        backHandler: BackHandler,
        onBack: () -> Unit,
    ): StackAnimation<C, T>
    ```

=== "Experimental API"

    ```kotlin title="In commonMain source set"
    import androidx.compose.runtime.Composable
    import com.arkivanov.decompose.extensions.compose.experimental.stack.ChildStack
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimation
    import com.arkivanov.essenty.backhandler.BackHandler
    
    @Composable
    fun RootContent(component: RootComponent) {
        ChildStack(
            stack = component.childStack,
            animation = backAnimation(
                backHandler = component.backHandler,
                onBack = component::onBackClicked,
            ),
        ) {
            // Omitted code
        }
    }
    
    expect fun <C : Any, T : Any> backAnimation(
        backHandler: BackHandler,
        onBack: () -> Unit,
    ): StackAnimation<C, T>
    ```

Add the following code in your `androidMain` source set.

=== "Default API"
    
    ```kotlin title="In androidMain source set"
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.predictiveBackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    import com.arkivanov.essenty.backhandler.BackHandler
    
    actual fun <C : Any, T : Any> backAnimation(
        backHandler: BackHandler,
        onBack: () -> Unit,
    ): StackAnimation<C, T> =
        predictiveBackAnimation(
            backHandler = backHandler,
            fallbackAnimation = stackAnimation(fade()),
            onBack = onBack,
        )
    ```

=== "Experimental API"

    ```kotlin
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimation
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.fade
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.materialPredictiveBackAnimatable
    import com.arkivanov.essenty.backhandler.BackHandler
    
    actual fun <C : Any, T : Any> backAnimation(
        backHandler: BackHandler,
        onBack: () -> Unit,
    ): StackAnimation<C, T> =
        stackAnimation(
            animator = fade(),
            predictiveBackParams = PredictiveBackParams(
                backHandler = backHandler,
                onBack = onBack,
                animatable = ::materialPredictiveBackAnimatable,
            )
        )
    ```

Add the following code in your `iosMain` source set.

=== "Default API"

    ```kotlin title="In iosMain source set"
    import androidx.compose.animation.core.FiniteAnimationSpec
    import androidx.compose.animation.core.tween
    import androidx.compose.ui.Modifier
    import androidx.compose.ui.draw.drawWithContent
    import androidx.compose.ui.graphics.Color
    import androidx.compose.ui.layout.layout
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.StackAnimator
    import com.arkivanov.decompose.extensions.compose.stack.animation.isFront
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.predictiveBackAnimatable
    import com.arkivanov.decompose.extensions.compose.stack.animation.predictiveback.predictiveBackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimation
    import com.arkivanov.decompose.extensions.compose.stack.animation.stackAnimator
    import com.arkivanov.essenty.backhandler.BackHandler
    
    actual fun <C : Any, T : Any> backAnimation(
        backHandler: BackHandler,
        onBack: () -> Unit,
    ): StackAnimation<C, T> =
        predictiveBackAnimation(
            backHandler = backHandler,
            fallbackAnimation = stackAnimation(iosLikeSlide()),
            selector = { initialBackEvent, _, _ ->
                predictiveBackAnimatable(
                    initialBackEvent = initialBackEvent,
                    exitModifier = { progress, _ -> Modifier.slideExitModifier(progress = progress) },
                    enterModifier = { progress, _ -> Modifier.slideEnterModifier(progress = progress) },
                )
            },
            onBack = onBack,
        )
    
    private fun iosLikeSlide(animationSpec: FiniteAnimationSpec<Float> = tween()): StackAnimator =
        stackAnimator(animationSpec = animationSpec) { factor, direction, content ->
            content(
                Modifier
                    .then(if (direction.isFront) Modifier else Modifier.fade(factor + 1F))
                    .offsetXFactor(factor = if (direction.isFront) factor else factor * 0.5F)
            )
        }
    
    private fun Modifier.slideExitModifier(progress: Float): Modifier =
        offsetXFactor(progress)
    
    private fun Modifier.slideEnterModifier(progress: Float): Modifier =
        fade(progress).offsetXFactor((progress - 1f) * 0.5f)
    
    private fun Modifier.fade(factor: Float) =
        drawWithContent {
            drawContent()
            drawRect(color = Color(red = 0F, green = 0F, blue = 0F, alpha = (1F - factor) / 4F))
        }
    
    private fun Modifier.offsetXFactor(factor: Float): Modifier =
        layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)
    
            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = (placeable.width.toFloat() * factor).toInt(), y = 0)
            }
        }
    ```

=== "Experimental API"

    ```kotlin
    import androidx.compose.animation.core.FiniteAnimationSpec
    import androidx.compose.animation.core.tween
    import androidx.compose.ui.Modifier
    import androidx.compose.ui.draw.drawWithContent
    import androidx.compose.ui.graphics.Color
    import androidx.compose.ui.layout.layout
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.PredictiveBackParams
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimation
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.StackAnimator
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimation
    import com.arkivanov.decompose.extensions.compose.experimental.stack.animation.stackAnimator
    import com.arkivanov.decompose.extensions.compose.stack.animation.isFront
    import com.arkivanov.essenty.backhandler.BackHandler
    
    actual fun <C : Any, T : Any> backAnimation(
        backHandler: BackHandler,
        onBack: () -> Unit,
    ): StackAnimation<C, T> =
        stackAnimation(
            animator = iosLikeSlide(),
            predictiveBackParams = {
                PredictiveBackParams(
                    backHandler = backHandler,
                    onBack = onBack,
                )
            },
        )
    
    private fun iosLikeSlide(animationSpec: FiniteAnimationSpec<Float> = tween()): StackAnimator =
        stackAnimator(animationSpec = animationSpec) { factor, direction ->
            Modifier
                .then(if (direction.isFront) Modifier else Modifier.fade(factor + 1F))
                .offsetXFactor(factor = if (direction.isFront) factor else factor * 0.5F)
        }
    
    private fun Modifier.fade(factor: Float) =
        drawWithContent {
            drawContent()
            drawRect(color = Color(red = 0F, green = 0F, blue = 0F, alpha = (1F - factor) / 4F))
        }
    
    private fun Modifier.offsetXFactor(factor: Float): Modifier =
        layout { measurable, constraints ->
            val placeable = measurable.measure(constraints)
    
            layout(placeable.width, placeable.height) {
                placeable.placeRelative(x = (placeable.width.toFloat() * factor).toInt(), y = 0)
            }
        }
    ```
