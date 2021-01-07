# Getting started

## Setup

Decompose is published to Bintray, the repository is synchronized with JCenter.
Make sure you have the JCenter repository specified in your build.gradle:

```groovy
repositories {
    jcenter()
}
```

Add Decompose dependency to your build.gradle:

```groovy
implementation "com.arkivanov.decompose:decompose:<version>"
```

Add extensions for Android Views to your Android build.gradle:

```groovy
implementation "com.arkivanov.decompose:extensions-android:<version>"
```

Add extensions for Jetpack Compose to your Android build.gradle:

```groovy
implementation "com.arkivanov.decompose:extensions-compose-jetpack:<version>"
```

Add extensions for JetBrains Compose to your Android/JVM/Multiplatform build.gradle:

```groovy
implementation "com.arkivanov.decompose:extensions-compose-jetbrains:<version>"
```
