## Setup

Decompose is published to Bintray, the repository is synchronized with JCenter.
Make sure you have the JCenter repository specified in your `build.gradle`:

=== "Groovy"

    ``` groovy
    repositories {
        jcenter()
    }
    ```

=== "Kotlin"

    ``` kotlin
    repositories {
        jcenter()
    }
    ```

Add Decompose dependency to your `build.gradle` and replace `<version>` with the latest [version](https://github.com/arkivanov/Decompose/tags). 

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:decompose:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:decompose:<version>")
    ```

## Android View Extensions

Add extensions for Android [`View`](https://developer.android.com/reference/android/view/View) to your Android `build.gradle`:

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-android:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-android:<version>")
    ```

## Jetpack Compose Extensions

Add extensions for [Jetpack Compose](https://developer.android.com/jetpack/compose) to your Android `build.gradle`:

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose-jetpack:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose-jetpack:<version>")
    ```

## Jetpack Compose Multiplatform Extensions

Add extensions for [JetBrains Compose](https://www.jetbrains.com/lp/compose/) to your Android/JVM/Multiplatform `build.gradle`:

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.decompose:extensions-compose-jetbrains:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.decompose:extensions-compose-jetbrains:<version>")
    ```
