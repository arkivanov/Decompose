Decompose provides a number of modules, they all published to Maven Central Repository.

## The main Decompose module

The main functionality is provided by the `decompose` module. It includes (but is not limited to) the following:

- The [Router](https://arkivanov.github.io/Decompose/router/overview/)
- The [ComponentContext](https://arkivanov.github.io/Decompose/component/overview/#componentcontext)
- The [Lifecycle](https://arkivanov.github.io/Decompose/component/lifecycle/)
- The [StateKeeper](https://arkivanov.github.io/Decompose/component/state-keeper/)
- The [InstanceKeeper](https://arkivanov.github.io/Decompose/component/instance-keeper/)

This module supports the following Kotlin Multiplatform targets: 
- `android`,
- `jvm`
- `iosX64`, `iosArm64`
- `js` (both `IR` and `Legacy` modes)
- `macosX64`
- `tvosArm64`, `tvosX64`
- `watchosArm32`, `watchosArm64`, `watchosX86`, `watchosX64`

### Gradle setup

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:decompose:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:decompose:<version>")
    ```

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

