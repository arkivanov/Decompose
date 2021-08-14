# Extensions for Jetpack/JetBrains Compose

Extensions and utilities for easier integration of Decompose with Jetpack/JetBrains Compose.

## Setup

Since Jetpack and JetBrains Compose are published separately into different repositories, Decompose provides separate modules for each
variant. Both modules provide similar functionality, but you need to choose the corresponding module depending on the used Compose variant.

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

As mentioned above both modules provide similar functionality. Most of the links in this document refer to the Jetpack module, however there
usually a mirror in the JetBrains module.

### Converting Value to State

To convert
Decompose [Value](https://github.com/arkivanov/Decompose/tree/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/value)
to Compose `State` use `Value<T>.subscribeAsState(): State<T>` extensions function:

```kotlin
interface SomeComponent {
    val models: Value<Model>

    data class Model(/*...*/)
}

@Composable
fun SomeUi(component: SomeComponent) {
    val models: State<Model> by component.models.subscribeAsState()
}
```

### Navigating between Composable components

The [Router](https://arkivanov.github.io/Decompose/router/overview/) provides
the [RouterState](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/RouterState.kt)
as `Value<RouterState>` which can be observed in a `Composable` component. This makes it possible to switch child `Composable` components
following the `Router`.

Both Compose extension modules provide
the [Children(...)](https://github.com/arkivanov/Decompose/blob/master/extensions-compose-jetpack/src/main/java/com/arkivanov/decompose/extensions/compose/jetpack/Children.kt)
function which has the following features:

- It listens for the `RouterState` changes and displays the corresponding child `Composable` component using the provided slot lambda.
- It preserves components' UI state (e.g. scrolling position) in the back stack and over configuration changes and process death.
- It animates between children if there is an `animation` spec provided.

#### Switching between child components defined as a sealed class

Prefer this variant if you also support non-Compose UI (like SwiftUI, React, etc):

```kotlin
// Root

interface RootComponent {
    val routerState: Value<RouterState<*, Child>>

    sealed class Child {
        data class Profile(val component: ProfileComponent) : Child()
        data class Settings(val component: SettingsComponent) : Child()
    }
}

@Composable
fun RootUi(rootComponent: RootComponent) {
    Children(rootComponent.routerState) {
        when (val child = it.instance) {
            is RootComponent.Child.Profile -> ProfileUi(child.component)
            is RootComponent.Child.Settings -> SettingsUi(child.component)
        }
    }
}

// Children

interface ProfileComponent

interface SettingsComponent

@Composable
fun ProfileUi(profileComponent: ProfileComponent) {
    // Omitted code
}

@Composable
fun SettingsUi(settingsComponent: SettingsComponent) {
    // Omitted code
}
```

#### Switching between child components defined as a Composable function

You may prefer this variant if you support only Compose UI:

```kotlin
typealias Content = @Composable () -> Unit

fun <T : Any> T.asContent(content: @Composable (T) -> Unit): Content = { content(this) }

// Root

interface RootComponent {
    val routerState: Value<RouterState<*, Content>>
}

@Composable
fun RootUi(rootComponent: RootComponent) {
    Children(rootComponent.routerState) {
        it.instance()
    }
}

// Children

interface ProfileComponent

interface SettingsComponent

@Composable
fun ProfileUi(profileComponent: ProfileComponent) {
    // Omitted code
}

@Composable
fun SettingsUi(settingsComponent: SettingsComponent) {
    // Omitted code
}
```

You can read more about this approach in the following
article: [Fully cross-platform Kotlin applications (almost)](https://proandroiddev.com/fully-cross-platform-kotlin-applications-almost-29c7054f8f28)
.

### Animations

Decompose provides
the [Child Animation API](https://github.com/arkivanov/Decompose/tree/master/extensions-compose-jetpack/src/main/java/com/arkivanov/decompose/extensions/compose/jetpack/animation/child)
for Compose, as well as some predefined animation specs. To enable child animations you need to pass the `animation`
argument to the `Children` function.

#### Crossfade animation

```kotlin
@Composable
fun RootUi(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = crossfade()
    ) { it.instance() }
}
```

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationCrossfade.gif" width="512">

#### Crossfade-Scale animation

```kotlin
@Composable
fun RootUi(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = crossfadeScale()
    ) { it.instance() }
}
```

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationCrossfadeScale.gif" width="512">

#### Slide animation

```kotlin
@Composable
fun RootUi(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = slide()
    ) { it.instance() }
}
```

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/ComposeAnimationSlide.gif" width="512">

#### Custom animations

It is possible to define custom animations in two ways.

Implementing the `ChildAnimation` manually:

```kotlin
@Composable
fun RootUi(rootComponent: RootComponent) {
    Children(
        routerState = rootComponent.routerState,
        animation = someAnimation()
    ) { it.instance() }
}

fun <C : Any, T : Any> someAnimation(): ChildAnimation<C, T> =
    { routerState: RouterState<C, T>, childContent: ChildContent<C, T> ->
        // Render each frame here
    }
```

Implementing the `ChildAnimation` using the `childAnimation` builder function:

```kotlin
fun <C : Any, T : Any> someAnimation(
    animationSpec: FiniteAnimationSpec<Float> = defaultChildAnimationSpec,
): ChildAnimation<C, T> =
    childAnimation(
        animationSpec = animationSpec
    ) { key: Child.Created<C, T>,
        factor: Float,
        arrangement: PageArrangement,
        direction: PageAnimationDirection,
        content: @Composable (Modifier) -> Unit ->
        // Render each frame here
    }
```

Please refer to the predefined animations for implementation examples.
