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

To convert Decompose [Value](https://github.com/arkivanov/Decompose/tree/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value) to Compose `State` use `Value<T>.subscribeAsState(): State<T>` extensions function:

```kotlin
interface SomeComponent {
    val models: Value<Model>

    data class Model(/*...*/)
}

@Composable
fun SomeContent(component: SomeComponent) {
    val models: State<Model> by component.models.subscribeAsState()
}
```

### Navigating between Composable components

The [Router](https://arkivanov.github.io/Decompose/router/overview/) provides
the [RouterState](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/RouterState.kt) as `Value<RouterState>` which can be observed in a `Composable` component. This makes it possible to switch child `Composable` components following the `Router`.

Both Compose extension modules provide the [Children(...)](https://github.com/arkivanov/Decompose/blob/master/extensions-compose-jetpack/src/main/java/com/arkivanov/decompose/extensions/compose/jetpack/Children.kt) function which has the following features:

- It listens for the `RouterState` changes and displays the corresponding child `Composable` component using the provided slot lambda.
- It preserves components' UI state (e.g. scrolling position) in the back stack and over configuration changes and process death.
- It animates between children if there is an `animation` spec provided.

Here is an example of switching child components on navigation:

```kotlin
// Root

interface RootComponent {
    val routerState: Value<RouterState<*, Child>>

    sealed class Child {
        data class Main(val component: MainComponent) : Child()
        data class Details(val component: DetailsComponent) : Child()
    }
}

@Composable
fun RootContent(rootComponent: RootComponent) {
    Children(rootComponent.routerState) {
        when (val child = it.instance) {
            is RootComponent.Child.Main -> MainContent(child.component)
            is RootComponent.Child.Details -> DetailsContent(child.component)
        }
    }
}

// Children

interface MainComponent

interface DetailsComponent

@Composable
fun MainContent(profileComponent: MainComponent) {
    // Omitted code
}

@Composable
fun DetailsContent(settingsComponent: DetailsComponent) {
    // Omitted code
}
```

### Animations (experimental)

Decompose provides the [Child Animation API](https://github.com/arkivanov/Decompose/tree/master/extensions-compose-jetpack/src/main/java/com/arkivanov/decompose/extensions/compose/jetpack/animation/child) for Compose, as well as some predefined animation specs. To enable child animations you need to pass the `animation` argument to the `Children` function. There are predefined animators provided by Decompose.

#### Fade animation

```kotlin
@Composable
fun RootContent(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = childAnimation(fade())
    ) {
        // Omitted code
    }
}
```

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationFade.gif" width="512">

#### Slide animation

```kotlin
@Composable
fun RootContent(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = childAnimation(slide())
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
fun RootContent(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = childAnimation(fade() + scale())
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
fun RootContent(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = childAnimation { child, direction ->
            when (child.instance) {
                is RootComponent.Child.Main -> fade() + scale()
                is RootComponent.Child.Details -> fade() + slide()
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

Implementing `ChildAnimation` manually. This is the most flexible low-level API. The animation block receives the current `RouterState` and animates children using the provided `content` slot.

```kotlin
@Composable
fun RootContent(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = someAnimation()
    ) {
        // Omitted code
    }
}

fun <C : Any, T : Any> someAnimation(): ChildAnimation<C, T> =
    ChildAnimation { routerState: RouterState<C, T>,
                     modifier: Modifier,
                     content: @Composable (Child.Created<C, T>) -> Unit ->
        // Render each frame here
    }
```

Using the `childAnimation` helper function and implementing `ChildAnimator`. The `childAnimation` function takes care of tracking the `RouterState` changes. `ChildAnimator` is only responsible for manipulating the `Modifier` in the given `direction`, and calling `onFinished` at the end.

```kotlin
@Composable
fun RootContent(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = childAnimation(someAnimator())
    ) {
        // Omitted code
    }
}

fun someAnimator(): ChildAnimator =
    ChildAnimator { direction: Direction,
                    onFinished: () -> Unit,
                    content: @Composable (Modifier) -> Unit ->
        // Manipulate the Modifier in the given direction and call onFinished at the end
    }
```

Using `childAnimation` and `childAnimator` helper functions. This is the simplest, but less powerful way. The `childAnimator` function takes care of running the animation. Its block has a very limited responsibility - to render the current frame using the provided `factor` and `direction`.

```kotlin
@Composable
fun RootContent(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = childAnimation(someAnimator())
    ) {
        // Omitted code
    }
}

fun someAnimator(): ChildAnimator =
    childAnimator { factor: Float,
                    direction: Direction,
                    content: (Modifier) -> Unit ->
        // Render the current frame
    }
```

Please refer to the predefined animators (`fade`, `slide`, etc.) for implementation examples.
