# Overview

## What is Decompose?

Decompose is a Kotlin Multiplatform library for breaking down your code into lifecycle-aware business logic components (aka BLoC), with routing functionality and pluggable UI (Jetpack Compose, Android Views, SwiftUI, JS React, etc.).

### Supported targets

- `android`,
- `jvm`
- `js` (both `IR` and `Legacy` modes)
- `iosX64`, `iosArm64`
- `tvosArm64`, `tvosX64`
- `watchosArm32`, `watchosArm64`, `watchosX64`
- `macosX64`

## Why Decompose?

- Decompose draws clear boundaries between UI and non-UI code, which gives the following benefits:
    - Better separation of concerns
    - Pluggable platform-specific UI (Compose, SwiftUI, React, etc.)
    - Business logic code is testable with pure multiplatform unit tets
- Proper dependency injection (DI) and inversion of control (IoC) via constructor
- Shared navigation logic
- Lifecycle-aware components
- Components in the back stack are not destroyed, they continue working in background without UI
- Components and UI state preservation (mostly useful in Android)
- Instances retaining (aka ViewModels) over configuration changes (mostly useful in Android)
