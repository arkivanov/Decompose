# Installation

Decompose provides a number of modules, they are all published to Maven Central Repository.

## The main Decompose module

The main functionality is provided by the `decompose` module. It contains some core features like [ComponentContext](/Decompose/component/overview/#componentcontext), [Child Stack](/Decompose/navigation/stack/overview/), [Child Slot](/Decompose/navigation/slot/overview/), etc.

### Gradle setup

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:decompose:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:decompose:<version>")
    ```

### Dependency on Essenty library

Some functionality is actually provided by [Essenty](https://github.com/arkivanov/Essenty) library. Essenty is implemented by the same author and provides very basic things like `Lifecycle`, `StateKeeper`, etc. Most important Essenty modules are added to the `decompose` module as `api` dependency, so you don't have to add them manually to your project. Please familiarise yourself with Essenty library.

## Extensions for Jetpack/JetBrains Compose

The Compose UI is currently published in two separate variants:

- The one developed and maintained by Google is Android only, called [Jetpack Compose](https://developer.android.com/jetpack/compose)
- The Kotlin Multiplatform variant of Jetpack Compose maintained by both JetBrains and Google, we call it [JetBrains Compose](https://github.com/JetBrains/compose-jb)

Due to this fragmentation Decompose provides two separate extension modules for Compose UI:

- `extensions-compose-jetpack` - Android library for Jetpack Compose
- `extensions-compose-jetbrains` - Kotlin Multiplatform library for JetBrains Compose, supports `android` and `jvm` targets

Both modules are used to connect Compose UI to Decompose components. Please see the corresponding [documentation page](/Decompose/extensions/compose/).

### Gradle setup

Typically only one module should be selected, depending on the Compose UI variant being used.

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose-jetpack:<version>"
    // or
    implementation "com.arkivanov.decompose:extensions-compose-jetbrains:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose-jetpack:<version>")
    // or
    implementation("com.arkivanov.decompose:extensions-compose-jetbrains:<version>")
    ```

## Extensions for Android views

The `extensions-android` module provides extensions to connect Android views based UI to Decompose components. Please head to the corresponding [documentation page](/Decompose/extensions/android/) for more information.

### Gradle setup

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-android:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-android:<version>")
    ```

