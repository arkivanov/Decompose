# Extensions for Jetpack/JetBrains Compose

Extensions and utilities for easier integration of Decompose with Jetpack/JetBrains Compose.

## Setup

Since Jetpack and JetBrains Compose are published separately into different repositories, Decompose provides separate modules for each variant. Both modules provide similar functionality, but you need to choose the corresponding module depending on the used Compose variant.

### Setup extensions for Jetpack Compose

Extensions for Jetpack Compose are provided by the `extensions-compose-jetpack` module.

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose-jetpack:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose-jetpack:<version>")
    ```

### Setup extensions for JetBrains Compose

Extensions for JetBrains Compose are provided by the `extensions-compose-jetbrains` module.

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose-jetbrains:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose-jetbrains:<version>")
    ```

## Content

As mentioned above both modules provide similar functionality. Most of the links in this document refer to the Jetpack module, however there usually a mirror in the JetBrains module.

### Converting Value to State

To convert Decompose [Value](https://github.com/arkivanov/Decompose/tree/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value) to Compose `State` use `Value<T>.subscribeAsState(): State<T>` extension function:

```kotlin
interface SomeComponent {
    val model: Value<Model>

    data class Model(/*...*/)
}

@Composable
fun SomeContent(component: SomeComponent) {
    val model: State<Model> by component.model.subscribeAsState()
}
```

### Controlling the Lifecycle on Desktop

When using JetBrains Compose, you can have a `LifecycleRegistry` react to changes in the window state using the `LifecycleController()` composable. This will trigger appropriate lifecycle events when the window is minimized, restored or closed.

It is also possible to manually start the lifecycle using `LifecycleRegistry.resume()` when the instance is created.

```kotlin
fun main() {
    val lifecycle = LifecycleRegistry()
    val root = RootComponent(DefaultComponentContext(lifecycle))
    
    // Alternative: manually start the lifecycle (no reaction to window state)
    // lifecycle.resume()
    
    application {
        val windowState = rememberWindowState()
        
        // Bind the registry to the life cycle of the window
        LifecycleController(lifecycle, windowState)
        
        Window(state = windowState, ...) {
            // The rest of your content
        }
    }
}
```

!!!warning
    When using Compose in desktop platforms, make sure to always use one of the methods above, or your components might not receive lifecycle events correctly.

### Navigating between Composable components

The [Child Stack](/Decompose/navigation/stack/overview/) feature provides [ChildStack](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/ChildStack.kt) as `Value<ChildStack>` that can be observed in a `Composable` component. This makes it possible to switch child `Composable` components following the `ChildStack` changes.

Both Compose extension modules provide the [Children(...)](https://github.com/arkivanov/Decompose/blob/master/extensions-compose-jetbrains/src/commonMain/kotlin/com/arkivanov/decompose/extensions/compose/jetbrains/stack/Children.kt) function which has the following features:

- It listens for the `ChildStack` changes and displays the corresponding child `Composable` component using the provided slot lambda.
- It preserves components' UI state (e.g. scrolling position) in the back stack and over configuration changes and process death.
- It animates between children if there is an `animation` spec provided.

Here is an example of switching child components on navigation:

```kotlin
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

### Animations

Decompose provides [Child Animation API](https://github.com/arkivanov/Decompose/tree/master/extensions-compose-jetpack/src/main/java/com/arkivanov/decompose/extensions/compose/jetpack/animation/child) for Compose, as well as some predefined animation specs. To enable child animations you need to pass the `animation` argument to the `Children` function. There are predefined animators provided by Decompose.

#### Fade animation

```kotlin
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

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationFade.gif" width="512">

#### Slide animation

```kotlin
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

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationSlide.gif" width="512">

#### Combining animators

It is also possible to combine animators using the `plus` operator. Please note that the order matters - the right animator is applied after the left animator.

```kotlin
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

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationFadeScale.gif" width="512">

#### Separate animations for children

Previous examples demonstrate simple cases, when all children have the same animation. But it is also possible to specify separate animations for children.

```kotlin
@Composable
fun RootContent(component: RootComponent) {
    Children(
        stack = component.childStack,
        animation = stackAnimation { child, otherChild, direction ->
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

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationSeparate.gif" width="512">

#### Custom animations

It is also possible to define custom animations.

Implementing `StackAnimation` manually. This is the most flexible low-level API. The animation block receives the current `ChildStack` and animates children using the provided `content` slot.

```kotlin
@Composable
fun RootContent(component: RootComponent) {
    Children(
        stack = rootComponent.childStack,
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

Using the `stackAnimation` helper function and implementing `StackAnimator`. The `stackAnimation` function takes care of tracking the `ChildStack` changes. `StackAnimator` is only responsible for manipulating the `Modifier` in the given `direction`, and calling `onFinished` at the end.

```kotlin
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
                    onFinished: () -> Unit,
                    content: @Composable (Modifier) -> Unit ->
        // Manipulate the Modifier in the given direction and call onFinished at the end
    }
```

Using `stackAnimation` and `stackAnimator` helper functions. This is the simplest, but less powerful way. The `stackAnimator` function takes care of running the animation. Its block has a very limited responsibility - to render the current frame using the provided `factor` and `direction`.

```kotlin
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

Please refer to the predefined animators (`fade`, `slide`, etc.) for implementation examples.

## Compose for iOS and macOS

Compose for iOS and macOS is still work in progress and was not officially announced. However, Decompose already supports it. The support is also experimental and is not part of the main branch - see [#74](https://github.com/arkivanov/Decompose/issues/74) for more information.

If you want to use Decompose with Compose for iOS/macOS, you have to use special versions of `extensions-compose-jetbrains` module.

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose-jetbrains:<version>-native-compose"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose-jetbrains:<version>-native-compose")

### Samples

You can find samples in a separate branch - [compose-darwin/sample/app-darwin-compose](https://github.com/arkivanov/Decompose/tree/compose-darwin/sample/app-darwin-compose).
