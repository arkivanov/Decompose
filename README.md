<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/logo/titled-1.png">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/logo/logo-titled-dark.png">
  <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/logo/titled-1.png" width="300">
</picture>

<br/>
<br/>

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Twitter URL](https://img.shields.io/badge/Twitter-@arkann1985-blue.svg?style=social&logo=twitter)](https://twitter.com/arkann1985)

---

Decompose is a Kotlin Multiplatform library for breaking down your code into tree-structured lifecycle-aware business logic components (aka BLoC), with routing functionality and pluggable UI (Jetpack/Multiplatform Compose, Android Views, SwiftUI, Kotlin/React, etc.).

Please see the [project website](https://arkivanov.github.io/Decompose/) for documentation and APIs. 

Should you have any questions or ideas - there is [Discussions](https://github.com/arkivanov/Decompose/discussions) section. Also welcome to the Kotlin Slack channel - [#decompose](https://kotlinlang.slack.com/archives/C03H3N51SKT)!

## Why Decompose?

* Decompose breaks the code down into small and independent components and organizes them into trees. Each parent component is only aware of its immediate children.
* Decompose draws clear boundaries between UI and non-UI code, which gives the following benefits:
  * Better separation of concerns
  * Pluggable platform-specific UI (Compose, SwiftUI, Kotlin/React, etc.)
  * Business logic code is testable with pure multiplatform unit tests
* Navigation state is fully exposed - plug any UI you want, animate as you like using your favourite UI framework's API or use predefined API.
* Navigation is a pure function from the old state to a new one - navigate without limits.
* Proper dependency injection (DI) and inversion of control (IoC) via constructor, including but not limited to type-safe arguments.
* Shared navigation logic
* Lifecycle-aware components
* Components in the back stack are not destroyed, they continue working in background without UI
* State preservation (automatically on Android, manually on all other targets via `kotlinx-serialization`)
* Instances retaining (aka ViewModels) over configuration changes (mostly useful in Android)

### Meme time!

<img src="docs/media/DecomposeMeme.png" width="512">

## Setup

Please check the [Installation](https://arkivanov.github.io/Decompose/getting-started/installation/) section of the documentation.

### Supported platforms

In general, Decompose supports the following targets: `android`, `jvm`, `ios`, `watchos`, `tvos`, `macos`, `wasmJs`, `js`. However, some modules do not support all targets or the support depends on the Decompose version. Please see the installation docs for details.

## Overview

Here are some key concepts of the library, more details can be found in the documentation.

* [Component](https://arkivanov.github.io/Decompose/component/overview/) - every component represents a piece of logic with its own lifecycle, the UI is optional and is plugged externally
* [ComponentContext](https://arkivanov.github.io/Decompose/component/overview/#componentcontext) - every component has its own [ComponentContext], which makes components lifecycle-aware and allows state preservation, instances retaining (aka AndroidX `ViewModel`) and back button handling
* [Child Stack](https://arkivanov.github.io/Decompose/navigation/stack/overview/) - enables navigation between child components, nested navigation is also supported
* [Child Slot](https://arkivanov.github.io/Decompose/navigation/slot/overview/) - allows only one child component at a time, or none
* [Child Pages](https://arkivanov.github.io/Decompose/navigation/pages/overview/) - a list of child components with one selected component (e.g. pager-like navigation)
* [Child Panels](https://arkivanov.github.io/Decompose/navigation/panels/overview/) - a multi-pane navigation 
* [Generic Navigation](https://arkivanov.github.io/Decompose/navigation/children/overview/) - provides a way to create your own custom navigation model, when none of the predefined models fit your needs
* [Lifecycle](https://arkivanov.github.io/Decompose/component/lifecycle/) - provides a way to listen for lifecycle events in components
* [StateKeeper](https://arkivanov.github.io/Decompose/component/state-preservation/) - makes it possible to preserve state or data in a component when it gets destroyed
* [InstanceKeeper](https://arkivanov.github.io/Decompose/component/instance-retaining/) - retains instances in your components (similar to AndroidX `ViewModel`)
* [BackPressedHandler](https://arkivanov.github.io/Decompose/component/back-button/) - provides a way to handle and intercept back button presses

### Decompose is a library

Decompose is a library that can be used as a framework. In its core, Decompose just manipulates instances of `ComponentContext` with strict parent-child relationship, which is also called "navigation". The possibility of creating custom implementations of the `ComponentContext` interface allows adding custom properties and functions, as well as storing additional data in each instance of `ComponentContext. This makes it a very powerful tool with various use cases.

The "component" term is just one of the possible usages, the recommended one. The [Decompose-Router](https://github.com/xxfast/Decompose-Router) library is a great example of leveraging Decompose to create a custom navigation solution a with completely different API.

### Component hierarchy

<img src="docs/media/ComponentHierarchy.png" width="512">

### Pluggable UI hierarchy

<img src="docs/media/PluggableUiHierarchy.png" width="512">

### Typical component structure

<img src="docs/media/ComponentStructure.png" width="512">

## Quick start

Please refer to the [Quick start](https://arkivanov.github.io/Decompose/getting-started/quick-start/) section of the docs.

## Samples

Check out the [Samples](https://arkivanov.github.io/Decompose/samples/) section of the docs for a full description of each sample.

## Template

Check out the [template repository](https://github.com/arkivanov/decompose-multiplatform-template) which may be used to kick-start a project for you.

## "Used by" list

Checkout a voluntary list of projects/companies using Decompose: https://github.com/arkivanov/Decompose/discussions/366. Feel free to add your project!

## Articles

- [Decompose — experiments with Kotlin Multiplatform lifecycle-aware components and navigation](https://proandroiddev.com/decompose-experiments-with-kotlin-multiplatform-lifecycle-aware-components-and-navigation-a04ef3c7f6a3?source=friends_link&sk=f7d289cc329b6c8a765fc049e36c313f)
- [Fully cross-platform Kotlin applications (almost)](https://proandroiddev.com/fully-cross-platform-kotlin-applications-almost-29c7054f8f28?source=friends_link&sk=4619fdcb17912fde589bc4fca83efbbd)
- [A comprehensive thirty-line navigation for Jetpack/Multiplatform Compose](https://medium.com/p/5b723c4f256e) - if you find Decompose verbose and would prefer something built on top of Compose.

- "Component-based Approach" series by [Artur Artikov](https://twitter.com/artik_artikov)
  - Part 1: [Fighting Complexity in Android Applications](https://medium.com/@a.artikov/component-based-approach-fighting-complexity-in-android-applications-2eaf5e8c5fad)
  - Part 2: [Implementing Screens with the Decompose Library](https://medium.com/@a.artikov/component-based-approach-implementing-screens-with-the-decompose-library-19c41d8ed087)

## Author

Twitter: [@arkann1985](https://twitter.com/arkann1985)

If you like this project you can always <a href="https://www.buymeacoffee.com/arkivanov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" height=32></a> ;-)
