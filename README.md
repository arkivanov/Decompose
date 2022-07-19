[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Twitter URL](https://img.shields.io/badge/Twitter-@arkann1985-blue.svg?style=social&logo=twitter)](https://twitter.com/arkann1985)

![badge][badge-android]
![badge][badge-ios]
![badge][badge-js]
![badge][badge-jvm]
![badge][badge-mac]
![badge][badge-tvos]
![badge][badge-watchos]

Should you have any questions or ideas - there is [Discussions](https://github.com/arkivanov/Decompose/discussions) section. Also welcome to the Kotlin Slack channel - [#decompose](https://kotlinlang.slack.com/archives/C03H3N51SKT)!

# Decompose

Please see the [project website](https://arkivanov.github.io/Decompose/) for documentation and APIs. 

Decompose is a Kotlin Multiplatform library for breaking down your code into lifecycle-aware business logic components (aka BLoC), with routing functionality and pluggable UI (Jetpack Compose, Android Views, SwiftUI, JS React, etc.).

## ⚡⚡⚡ Where are all the stars, issues, discussions, pull requests, etc?

Having spent 5 years working on a variety of projects for Badoo/Bumble, I’m now off to another adventure. As part of that transition I was asked to transfer this repository to [Badoo GitHub account](https://github.com/badoo).

Now I **continue my work** on this project **as a copy**.

There should be no breaking changes related to this transfer. Most of the external links should not be broken. The repository link is also the same: [arkivanov/Decompose](https://github.com/arkivanov/Decompose). Please file an issue in this repository, if you think something is broken or does not work properly.

Here is what is mostly affected by the transfer:

- All the stars were transferred
- All the issues and discussions were transferred as well. I will do all my best to fill the gap here.
- All pull requests with all the comment history are also gone.

I will continue doing all my best for this project and for the community! Business as usual!

Additional resources:

- [A thread on Hacker News](https://news.ycombinator.com/item?id=29447854)

## Why Decompose?

* Decompose breaks the code down into small and independent components and organizes them into trees. Each parent component is only aware of its immediate children.
* Decompose draws clear boundaries between UI and non-UI code, which gives the following benefits:
  * Better separation of concerns
  * Pluggable platform-specific UI (Compose, SwiftUI, React, etc.)
  * Business logic code is testable with pure multiplatform unit tests
* Proper dependency injection (DI) and inversion of control (IoC) via constructor
* Shared navigation logic
* Lifecycle-aware components
* Components in the back stack are not destroyed, they continue working in background without UI
* Components and UI state preservation (mostly useful in Android)
* Instances retaining (aka ViewModels) over configuration changes (mostly useful in Android)

## Setup

Please check the [Installation](https://arkivanov.github.io/Decompose/getting-started/installation/) section of the documentation.

## Overview

Here are some key concepts of the library, more details can be found in the documentation.

* [Component](https://arkivanov.github.io/Decompose/component/overview/) - every component represents a piece of logic with its own lifecycle, the UI is optional and is plugged externally
* [ComponentContext](https://arkivanov.github.io/Decompose/component/overview/#componentcontext) - every component has its own [ComponentContext], which makes components lifecycle-aware and allows state preservation, instances retaining (aka AndroidX `ViewModel`) and back button handling
* [Child Stack](https://arkivanov.github.io/Decompose/child-stack/overview/) - enables navigation between child components, nested navigation is also supported
* [Lifecycle](https://arkivanov.github.io/Decompose/component/lifecycle/) - provides a way to listen for lifecycle events in components
* [StateKeeper](https://arkivanov.github.io/Decompose/component/state-preservation/) - makes it possible to preserve state or data in a component when it gets destroyed
* [InstanceKeeper](https://arkivanov.github.io/Decompose/component/instance-retaining/) - retains instances in your components (similar to AndroidX `ViewModel`)
* [BackPressedHandler](https://arkivanov.github.io/Decompose/component/back-button/) - provides a way to handle and intercept back button presses

### Component hierarchy

<img src="docs/media/ComponentHierarchy.png" width="512">

### Pluggable UI hierarchy

<img src="docs/media/PluggableUiHierarchy.png" width="512">

### Typical component structure

<img src="docs/media/ComponentStructure.png" width="512">

## Samples

Check out the [project website](https://arkivanov.github.io/Decompose/samples/) for a full description of each sample.

## Articles

- [Decompose — experiments with Kotlin Multiplatform lifecycle-aware components and navigation](https://proandroiddev.com/decompose-experiments-with-kotlin-multiplatform-lifecycle-aware-components-and-navigation-a04ef3c7f6a3?source=friends_link&sk=f7d289cc329b6c8a765fc049e36c313f)
- [Fully cross-platform Kotlin applications (almost)](https://proandroiddev.com/fully-cross-platform-kotlin-applications-almost-29c7054f8f28?source=friends_link&sk=4619fdcb17912fde589bc4fca83efbbd)

## Author

Twitter: [@arkann1985](https://twitter.com/arkann1985)

If you like this project you can always <a href="https://www.buymeacoffee.com/arkivanov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" height=32></a> ;-)

[badge-android]: http://img.shields.io/badge/platform-android-6EDB8D.svg?style=flat
[badge-ios]: http://img.shields.io/badge/platform-ios-CDCDCD.svg?style=flat
[badge-js]: http://img.shields.io/badge/platform-js-F8DB5D.svg?style=flat
[badge-jvm]: http://img.shields.io/badge/platform-jvm-DB413D.svg?style=flat
[badge-mac]: http://img.shields.io/badge/platform-macos-111111.svg?style=flat
[badge-tvos]: http://img.shields.io/badge/platform-tvos-808080.svg?style=flat
[badge-watchos]: http://img.shields.io/badge/platform-watchos-C0C0C0.svg?style=flat
