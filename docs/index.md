# Overview

## What is Decompose?

Decompose is a Kotlin Multiplatform library for breaking down your code into lifecycle-aware business logic components (aka BLoC), with routing functionality and pluggable UI (Compose, Android Views, SwiftUI, Kotlin/React, etc.).

### Supported targets

- `android`,
- `jvm`
- `js` (both `IR` and `Legacy` modes)
- `iosX64`, `iosArm64`, `iosSimulatorArm64`
- `tvosArm64`, `tvosX64`, `tvosSimulatorArm64`
- `watchosArm32`, `watchosArm64`, `watchosX64`, `watchosSimulatorArm64`
- `macosX64`, `macosArm64`

## Why Decompose?

- Decompose draws clear boundaries between UI and non-UI code, which gives the following benefits:
    - Better separation of concerns
    - Pluggable platform-specific UI (Compose, SwiftUI, Kotlin/React, etc.)
    - Business logic code is testable with pure multiplatform unit tests
- Proper dependency injection (DI) and inversion of control (IoC) via constructor, including but not limited to type-safe arguments.
- Shared navigation logic
- Lifecycle-aware components
- Components in the back stack are not destroyed, they continue working in background without UI
- Components and UI state preservation (mostly useful in Android)
- Instances retaining (aka ViewModels) over configuration changes (mostly useful in Android)

### Decompose is a library

Decompose is a library that can be used as a framework. In its core, Decompose just manipulates instances of [ComponentContext](https://arkivanov.github.io/Decompose/component/overview/#componentcontext) with strict parent-child relationship, which is also called "navigation". The possibility of creating custom implementations of the `ComponentContext` interface allows adding custom properties and functions, as well as storing additional data in each instance of `ComponentContext`. This makes it a very powerful tool with various use cases.

The "component" term is just one of the possible usages, the recommended one. The [Decompose-Router](https://github.com/xxfast/Decompose-Router) library is a great example of leveraging Decompose to create a custom navigation solution with a completely different API.
