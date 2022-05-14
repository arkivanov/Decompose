Decompose provides a number of modules, they are all published to Maven Central Repository.

[![Maven Central](https://img.shields.io/maven-central/v/com.arkivanov.decompose/decompose?color=blue)](https://search.maven.org/artifact/com.arkivanov.decompose/decompose)

## The main Decompose module

The main functionality is provided by the `decompose` module. It contains the core functionality, like [Router](https://arkivanov.github.io/Decompose/router/overview/), [ComponentContext](https://arkivanov.github.io/Decompose/component/overview/#componentcontext), etc.

This module supports the following Kotlin Multiplatform targets:

- `android`,
- `jvm`
- `js` (both `IR` and `Legacy` modes)
- `iosX64`, `iosArm64`
- `tvosArm64`, `tvosX64`
- `watchosArm32`, `watchosArm64`, `watchosX64`
- `macosX64`

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

Both modules are used to connect Compose UI to Decompose components. Please see the corresponding [documentation page](https://arkivanov.github.io/Decompose/extensions/compose/).

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

The `extensions-android` module provides extensions to connect Android views based UI to Decompose components. Please head to the corresponding [documentation page](https://arkivanov.github.io/Decompose/extensions/android/) for more information.

### Gradle setup

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-android:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-android:<version>")
    ```

