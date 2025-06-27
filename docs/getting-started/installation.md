# Installation

Decompose provides a number of modules, they are all published to Maven Central Repository.

## The main Decompose module

The main functionality is provided by the `decompose` module. It contains some core features like:

- [ComponentContext](../component/overview.md#componentcontext) - provides API for components to manage lifecycle, state saving, etc.
- [Value](../component/overview.md/#value-and-mutablevalue-state-holders) - Multiplatform (Swift-friendly) observable state holder (allows observing state changes in the UI).
- [Child Stack](../navigation/stack/overview.md) - stack navigation model.
- [defaultComponentContext](../getting-started/quick-start.md/#android-with-compose) - creates a default `ComponentContext` attached to an Activity or Fragment on Android.
- And many other important APIs.

This module should be imported into build.gradle.kts for shared application module at `kotlin.sourceSets.commonMain.dependencies`.

If you are having Android module (androidApp or composeApp if using KMP Wizard) this dependency also needs to be added into build.gradle.kts for Android module at ```android.dependencies``` to allow Android code access to above functionality

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

## Extensions for Jetpack and Multiplatform Compose

Compose is currently published in two separate variants:
    
- The one developed and maintained by Google is Android only, called [Jetpack Compose](https://developer.android.com/jetpack/compose).
- The Kotlin Multiplatform variant of Jetpack Compose maintained by both JetBrains and Google, called [Multiplatform Compose](https://github.com/JetBrains/compose-multiplatform).

Decompose provides extensions for Compose and depends on Multiplatform Compose, which makes it also compatible with Android Jetpack Compose. The extensions are used to connect Compose with Decompose components. Please see the corresponding [documentation page](../extensions/compose.md).

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose:<version>"
    ```
=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose:<version>")
    ```

Supported multiplatform targets: Android, JVM/Desktop, Native/iOS, Native/macOS, JS/Canvas and JS/Wasm.

### Experimental extensions for Jetpack and Multiplatform Compose

There is also a small set of experimental extensions available for Compose, enabling features like shared transitions, etc. For more information please refer to the corresponding [documentation page](../extensions/compose.md).

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose-experimental:<version>"
    ```
=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose-experimental:<version>")
    ```

Supported multiplatform targets: Android, JVM/Desktop, Native/iOS, Native/macOS, JS/Canvas and JS/Wasm.

## Extensions for Android views

The `extensions-android` module provides extensions to connect Android views (older alternative to Compose UI) to Decompose components. Please head to the corresponding [documentation page](../extensions/android.md) for more information.

### Gradle setup

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-android:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-android:<version>")
    ```

## JetpackComponentContext

If you want to use AndroidX Architecture Components (such as AndroidX `Lifecycle`, `ViewModel` and `Saved State`) together with Decompose, you can leverage [JetpackComponentContext](../component/jetpack-component-context.md) provided by `jetpack-component-context` module.

### Gradle setup

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:jetpack-component-context:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:jetpack-component-context:<version>")
    ```

## Exporting Decompose to iOS Framework

For using Decompose on your iOS project you need to export it to the iOS Framework.

### Regular Framework


``` kotlin
...
kotlin {
    ...
    targets
        .filterIsInstance<KotlinNativeTarget>()
        .filter { it.konanTarget.family == Family.IOS }
        .forEach {
            it.binaries.framework {
                ...
                
                export("com.arkivanov.decompose:decompose:<version>")
                export("com.arkivanov.essenty:lifecycle:<essenty_version>")
    
                // Optional, only if you need state preservation on Darwin (Apple) targets
                export("com.arkivanov.essenty:state-keeper:<essenty_version>")
    
                // Optional, only if you need state preservation on Darwin (Apple) targets
                export("com.arkivanov.parcelize.darwin:runtime:<parcelize_darwin_version>")
            }
        }
    ...
}
...
```

### CocoaPods

``` kotlin
...
kotlin {
    ...
    cocoapods {
        ...
        framework {
            ...

            export("com.arkivanov.decompose:decompose:<version>")
            export("com.arkivanov.essenty:lifecycle:<essenty_version>")

            // Optional, only if you need state preservation on Darwin (Apple) targets
            export("com.arkivanov.essenty:state-keeper:<essenty_version>")

            // Optional, only if you need state preservation on Darwin (Apple) targets
            export("com.arkivanov.parcelize.darwin:runtime:<parcelize_darwin_version>")
        }
    }
    ...
}
...
```
