## Multi-Feature Sample App

This sample demonstrates the following features:

* Nested reusable components
* Bottom navigation
* Nested navigation
* State preservation (using `StateKeeper`)
* Retaining instances (using `InstanceKeeper`)
* Pluggable UI (Android Views, Jetpack Compose, SwiftUI, JS React)
* [Play Feature Delivery](https://developer.android.com/guide/playcore/feature-delivery) for Android

Please note that Gradle files included in this sample project are not supposed to be used as a reference. They share the configuration with the reset of the library, which simplifies the maintenance a lot. Please refer to the [KMP documentation](https://kotlinlang.org/docs/multiplatform-mobile-getting-started.html) for information on configuring a KMP project. You can also check other sample projects described below.

Content:

* [shared](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared) - this is a shared module that contains the following components:
    * [Root](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/root) - the root (top-most) component, it displays the bottom navigation bar and the currently selected tab.
    * [Counters](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/counters) - the Counters tab, it has two `Child Stacks`, each with a stack of the `Counter` component.
        * [Counter](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/counters/counter) - the `Counter` component, it just increments the counter every 250 ms. It starts counting once created and stops when destroyed. So `Counter` continues counting while in the back stack, unless recreated. It uses the `InstanceKeeper`, so counting continues after Android configuration changes. The `StateKeeper` is used to preserve the state when the process is recreated on Android.
    * [MultiPane](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/multipane) - the Multi-Pane tab, it displays `List` and `Details` components either in a stack (one on top of another) or side by side. **Please note that this sample is for advanced single-pane/multi-pane navigation and layout, for generic master-detail navigation please refer to the Sample Todo List App described below.**
        * [ArticleList](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/multipane/list) - displays a random list of articles. Clicking on an item triggers the `ArticleDetails` component.
        * [ArticleDetails](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/multipane/details) - displays the content of the selected article.
    * [DynamicFeatures](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/dynamicfeatures) - the Dynamic Features tab, it demonstrates the usage of [Play Feature Delivery](https://developer.android.com/guide/playcore/feature-delivery) on Android, while using classing integration on other platforms. There are two simple feature components - `Feature1` and `Feature2` - they are located in separate modules described below.
        * [DynamicFeature](https://github.com/arkivanov/Decompose/tree/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/dynamicfeatures/dynamicfeature) - a helper component responsible for loading dynamic feature components.
* [compose](https://github.com/arkivanov/Decompose/tree/master/sample/shared/compose) - this module contains Jetpack Compose UI.
* [dynamic-features/api](https://github.com/arkivanov/Decompose/tree/master/sample/shared/dynamic-features/api) - this module contains only API for dynamic feature components.
* [dynamic-features/compose-api](https://github.com/arkivanov/Decompose/tree/master/sample/shared/dynamic-features/feature1Impl) - this module contains only Jetpack Compose API for dynamic feature components.
* [dynamic-features/feature1Impl](https://github.com/arkivanov/Decompose/tree/master/sample/shared/dynamic-features/feature1Impl) - contains the implementation of `Feature1` dynamic feature component. On Android it depends on `android-app` module and is used via reflection. On all other targets, the `shared` module directly depends on this module and no reflection is used.
* [dynamic-features/feature2Impl](https://github.com/arkivanov/Decompose/tree/master/sample/shared/dynamic-features/feature2Impl) - contains the implementation of `Feature2` dynamic feature component. On Android it depends on `android-app` module and is used via reflection. On all other targets, the `shared` module directly depends on this module and no reflection is used.
* [Android sample app](https://github.com/arkivanov/Decompose/tree/master/sample/app-android)
* [Desktop sample app](https://github.com/arkivanov/Decompose/tree/master/sample/app-desktop)
* [iOS sample app](https://github.com/arkivanov/Decompose/tree/master/sample/app-ios)
* [Web (JS) sample app](https://github.com/arkivanov/Decompose/tree/master/sample/app-js)

!!!warning
    The Multi-Pane sample is only for advanced single-pane/multi-pane navigation and layout. For generic master-detail navigation please refer to the Sample Todo List App described below.

### Component Hierarchy

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleComponentHierarchy.png" width="384">

### Counters Screenshots

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCountersAndroid.gif" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCountersIos.png" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCountersDesktop.png" width="294">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCountersWeb.png" width="294">

### Multi-Pane Screenshots

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneListAndroid.png" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneDetailsAndroid.png" width="196">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneIos.png" width="392">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneDesktop.png" width="392">
<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMultiPaneWeb.gif" width="392">

## Sample Todo List App

<img src="https://raw.githubusercontent.com/JetBrains/compose-jb/master/examples/todoapp/screenshots/todo.png" width="384">

The Sample Todo List App demonstrates the following features:

* Multiplatform: Android, iOS, Desktop and Web
* Shared JetBrains Compose UI for Android and Desktop apps
* JetBrains (multiplatform) Compose UI for the Web browser app
* SwiftUI for iOS app
* Nested components
* Shared routing with view state preservation
* Using `Lifecycle`
* Multi-module structure (one component per module)
* Inter-component communication (via [Reaktive](https://github.com/badoo/Reaktive), just an example)
* MVI using [MVIKotlin](https://github.com/arkivanov/MVIKotlin)
* Data persistence using [SQLDelight](https://github.com/cashapp/sqldelight)

Please refer to the [sample's readme](https://github.com/JetBrains/compose-jb/blob/master/examples/todoapp/README.md) for more information.

### Source Code

The Sample Todo List App can be found in the JetBrains Compose repository [here](https://github.com/JetBrains/compose-jb/tree/master/examples/todoapp).

## Sample Greetings App

![](media/SampleGreetingsDemo.gif)

[Sample Greetings Repository](https://github.com/theapache64/decompose-desktop-example)

## Related articles

* [Decompose — experiments with Kotlin Multiplatform lifecycle-aware components and navigation](https://proandroiddev.com/decompose-experiments-with-kotlin-multiplatform-lifecycle-aware-components-and-navigation-a04ef3c7f6a3?source=friends_link&sk=f7d289cc329b6c8a765fc049e36c313f)
* [Fully cross-platform Kotlin applications (almost)](https://proandroiddev.com/fully-cross-platform-kotlin-applications-almost-29c7054f8f28?source=friends_link&sk=4619fdcb17912fde589bc4fca83efbbd)
