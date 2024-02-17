## Multi-Feature Sample App

This sample demonstrates the following features:

* Nested reusable components
* Bottom navigation
* Nested navigation
* Various navigation models: Child Stack, Child Slot, Child Pages, Generic Navigation
* State preservation (using `StateKeeper`)
* Retaining instances (using `InstanceKeeper`)
* Pluggable UI (Android Views, Compose, SwiftUI, Kotlin/React)
* [Play Feature Delivery](https://developer.android.com/guide/playcore/feature-delivery) for Android
* Tests, including Compose UI tests

Please note that Gradle files included in this sample project are not supposed to be used as a reference. They share the configuration with the reset of the library, which simplifies the maintenance a lot. Please refer to the [KMP documentation](https://kotlinlang.org/docs/multiplatform-mobile-getting-started.html) for information on configuring a KMP project. You can also check other sample projects described below.

Content:

* [shared](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared) - this is a shared module that contains the following components:
    * [Root](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/root) - the root (top-most) component, it displays the bottom navigation bar and the currently selected tab.
    * [Counters](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/counters) - the Counters tab, contains a stack of `CounterComponent`.
        * [Counter](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/counters/counter) - contains `CounterComponent`, it just increments the counter every 250 ms. It starts counting once created and stops when destroyed. So `CounterComponent` continues counting while in the back stack, unless recreated. It uses the `InstanceKeeper`, so counting continues after Android configuration changes. The `StateKeeper` is used to preserve the state when the process is recreated on Android.
    * [Cards](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/cards) - the (draggable) Cards tab, contains a stack of [Card] components that can be dragged and thrown to the back of the stack. The top component is resumed and running, and components in the back stack are stopped. This sample demonstrates how the navigation can be controlled by gestures.
        * [Card](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/cards/card) - contains `CardComponent` - a draggable card with some text information.
    * [MultiPane](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/multipane) - the Multi-Pane tab, it displays `ArticleListComponent` and `ArticleDetailsComponent` components either in a stack (one on top of another) or side by side. **Please note that this sample is for advanced single-pane/multi-pane navigation and layout, for generic master-detail navigation please refer to the Sample Todo List App described below.**
        * [ArticleListComponent](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/multipane/list) - displays a random list of articles. Clicking on an item triggers the `ArticleDetails` component.
        * [ArticleDetailsComponent](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/multipane/details) - displays the content of the selected article.
    * [DynamicFeatures](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/dynamicfeatures) - the Dynamic Features tab, it demonstrates the usage of [Play Feature Delivery](https://developer.android.com/guide/playcore/feature-delivery) on Android, while using classic integration on other platforms. There are two simple feature components - `Feature1` and `Feature2` - they are located in separate modules described below.
        * [DynamicFeature](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/dynamicfeatures/dynamicfeature) - a helper component responsible for loading dynamic feature components.
    * [CustomNavigation](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/customnavigation) - the Custom Navigation tab that demonstrates the usage of the Generic Navigation model.
    * [Pages](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/pages) - the Pages tab that demonstrates the usage of the Child Pages navigation model.
* [compose](https://github.com/arkivanov/Decompose/tree/master/sample/shared/compose) - this module contains Compose UI.
* [dynamic-features/api](https://github.com/arkivanov/Decompose/tree/master/sample/shared/dynamic-features/api) - this module contains only API for dynamic feature components.
* [dynamic-features/compose-api](https://github.com/arkivanov/Decompose/tree/master/sample/shared/dynamic-features/compose-api) - this module contains only Compose API for dynamic feature components.
* [dynamic-features/feature1Impl](https://github.com/arkivanov/Decompose/tree/master/sample/shared/dynamic-features/feature1Impl) - contains the implementation of `Feature1` dynamic feature component. On Android it depends on `android-app` module and is used via reflection. On all other targets, the `shared` module directly depends on this module and no reflection is used.
* [dynamic-features/feature2Impl](https://github.com/arkivanov/Decompose/tree/master/sample/shared/dynamic-features/feature2Impl) - contains the implementation of `Feature2` dynamic feature component. On Android it depends on `android-app` module and is used via reflection. On all other targets, the `shared` module directly depends on this module and no reflection is used.
* [Android sample app](https://github.com/arkivanov/Decompose/tree/master/sample/app-android)
* [Desktop sample app](https://github.com/arkivanov/Decompose/tree/master/sample/app-desktop)
* [iOS sample app](https://github.com/arkivanov/Decompose/tree/master/sample/app-ios)
* [Web (JS) sample app](https://github.com/arkivanov/Decompose/tree/master/sample/app-js)
* Tests
    * [RootComponentIntegrationTest](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonTest/kotlin/com/arkivanov/sample/shared/root/RootComponentIntegrationTest.kt) - integration tests for `RootComponent`, including navigation tests.
    * [CountersComponentIntegrationTest](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonTest/kotlin/com/arkivanov/sample/shared/counters/CountersComponentIntegrationTest.kt) - integration tests for `CountersComponent`, including navigation tests.
    * [CounterComponentTest](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonTest/kotlin/com/arkivanov/sample/shared/counters/counter/CounterComponentTest.kt) - unit tests for `CounterComponent`. Includes supplying test dependencies, tests for instance retaining and state preservation, etc.
    * [CounterContentTest](https://github.com/arkivanov/Decompose/tree/master/sample/shared/compose/src/jvmTest/kotlin/com/arkivanov/sample/shared/counters/counter/CounterContentTest.kt) - Compose UI tests for `CounterComponent`.

!!!warning
    The Multi-Pane sample is only for advanced single-pane/multi-pane navigation and layout. For generic master-detail navigation please refer to the Sample Todo List App described below.

### Component Hierarchy

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleComponentHierarchy.png" width="384">

### Counters Screenshots

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCountersAndroid.gif" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCardsAndroid.gif" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCountersIos.png" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCountersDesktop.png" width="294">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCountersWeb.png" width="294">

### Multi-Pane Screenshots

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneListAndroid.png" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneDetailsAndroid.png" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneIos.png" width="392">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneDesktop.png" width="392">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneWeb.gif" width="392">

## Sample Todo App

Simple todo application with a list and detail page that shares UI between Android and desktop with Compose Multiplatform and SwiftUI for iOS. The following libraries are used in this sample: 

* [MVIKotlin](https://github.com/arkivanov/MVIKotlin) - presentation and business logic
* [Reaktive](https://github.com/badoo/Reaktive) - background processing and data transformation
* [SQLDelight](https://github.com/cashapp/sqldelight) - data storage

[TodoAppDecomposeMviKotlin](https://github.com/IlyaGulya/TodoAppDecomposeMviKotlin)

![](https://github.com/IlyaGulya/TodoAppDecomposeMviKotlin/blob/master/screenshots/todo.png?raw=true)

## Decompose-Dagger Sample

A sample Android project demonstrating the use of Decompose library together with Dagger DI framework.

[decompose-dagger-sample](https://github.com/arkivanov/decompose-dagger-sample)

## Sample Greetings App

![](media/SampleGreetingsDemo.gif)

[Sample Greetings Repository](https://github.com/theapache64/decompose-desktop-example)

## Related Articles

- [Decompose — experiments with Kotlin Multiplatform lifecycle-aware components and navigation](https://proandroiddev.com/decompose-experiments-with-kotlin-multiplatform-lifecycle-aware-components-and-navigation-a04ef3c7f6a3?source=friends_link&sk=f7d289cc329b6c8a765fc049e36c313f)
- [Fully cross-platform Kotlin applications (almost)](https://proandroiddev.com/fully-cross-platform-kotlin-applications-almost-29c7054f8f28?source=friends_link&sk=4619fdcb17912fde589bc4fca83efbbd)
- [A comprehensive thirty-line navigation for Jetpack/Multiplatform Compose](https://medium.com/p/5b723c4f256e) - if you find Decompose verbose and would prefer something built on top of Compose.

- "Component-based Approach" series by [Artur Artikov](https://twitter.com/artik_artikov)
    * Part 1: [Fighting Complexity in Android Applications](https://medium.com/@a.artikov/component-based-approach-fighting-complexity-in-android-applications-2eaf5e8c5fad)
    * Part 2: [Implementing Screens with the Decompose Library](https://medium.com/@a.artikov/component-based-approach-implementing-screens-with-the-decompose-library-19c41d8ed087)
