# Installation

Decompose provides a number of modules, they are all published to Maven Central Repository.

## The main Decompose module

The main functionality is provided by the `decompose` module. It contains some core features like:

- [ComponentContext](../component/overview.md#componentcontext) - provides API for components to manage lifecycle, state saving, etc.
- [Value](../component/overview.md/#value-and-mutablevalue-state-holders) - Multiplatform (Swift-friendly) observable state holder (allows observing state changes in the UI).
- [Child Stack](../navigation/stack/overview.md) - stack navigation model.
- [defaultComponentContext](../getting-started/quick-start.md/#android-with-compose) - creates a default `ComponentContext` attached to an Activity or Fragment on Android.
- And many other important APIs.

This module should be imported into build.gradle.kts for shared application module
at ```kotlin.sourceSets.commonMain.dependencies```

If you are having Android module (androidApp or composeApp if using KMP Wizard) this dependency also needs to be
added into build.gradle.kts for Android module at ```android.dependencies``` to allow Android code access to above functionality

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

!!! note
    If you are targetting Android, make sure you applied the [kotlin-parcelize](https://developer.android.com/kotlin/parcelize) Gradle plugin.

## Extensions for Jetpack and Multiplatform Compose

Compose is currently published in two separate variants:
    
- The one developed and maintained by Google is Android only, called [Jetpack Compose](https://developer.android.com/jetpack/compose).
- The Kotlin Multiplatform variant of Jetpack Compose maintained by both JetBrains and Google, called [Multiplatform Compose](https://github.com/JetBrains/compose-multiplatform).

=== "Before v3.0.0-alpha01"

    Due to this fragmentation Decompose provides two separate extension modules for Compose:
    
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
    Both modules are used to connect Compose with Decompose components. Please see the corresponding [documentation page](../extensions/compose.md).
    Typically only one module should be selected, depending on the Compose variant being used.


=== "Since v3.0.0-alpha01"

    Since Decompose version v3.0.0-alpha01 there is just one extension module for Compose - compatible with both Jetpack Compose and Multiplatform Compose.

    === "Groovy"

        ``` groovy
        implementation "com.arkivanov.decompose:extensions-compose:<version>"
        ```
    === "Kotlin"
    
        ``` kotlin
        implementation("com.arkivanov.decompose:extensions-compose:<version>")
        ```

    The module is used to connect Compose with Decompose components. Please see the corresponding [documentation page](../extensions/compose.md).


#### Support for Compose for iOS and Web (JS/Canvas and Wasm)

=== "Before v3.0.0-alpha01"

    Compose for iOS and Web (JS/Canvas, not Wasm) are supported and published from a separate branch: `compose-experimental`. This means that a special version suffix for all Decompose modules is required when configuring dependencies.
    
    === "Groovy"
    
        ``` groovy
        implementation "com.arkivanov.decompose:decompose:<version>-compose-experimental"
        implementation "com.arkivanov.decompose:extensions-compose-jetbrains:<version>-compose-experimental"
        ```
    
    === "Kotlin"
    
        ``` kotlin
        implementation("com.arkivanov.decompose:decompose:<version>-compose-experimental")
        implementation("com.arkivanov.decompose:extensions-compose-jetbrains:<version>-compose-experimental")
        ```

=== "Since v3.0.0-alpha01"

    All Compose variants (Android, JVM/Desktop, Native/iOS, Native/macOS, JS/Canvas, Wasm) are published from the main branch, please add dependencies as usual (no version suffixes required).

!!!warning
    Wasm target is not yet supported. Please follow [issue #74](https://github.com/arkivanov/Decompose/issues/74) for more information and updates.

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
