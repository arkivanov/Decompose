There are two sample apps: [Counter](#sample-counter-app) and [Todo List](#sample-todo-list-app).

## Sample Counter App

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterDemo.gif" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterIos.png" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterJs.png" width="196"> 

![](media/watchos-counter.gif)

This sample demonstrates the following features:

* Nested components
* Routing
* Reused components
* State preservation (using `StateKeeper`)
* Retaining instances (using `InstanceKeeper`)
* Pluggable UI (Android Views, Jetpack Compose, SwiftUI, JS React)

Content:

* [shared](https://github.com/arkivanov/Decompose/tree/master/sample/counter/shared) - the module which includes the following components:
    * [Counter](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/counter) - this component just increments the counter every 250 ms. It starts counting once created and stops when destroyed. So `Counter` continues counting while in the back stack, unless recreated. It uses the `InstanceKeeper`, so counting continues after configuration changes.
    * [CounterInnerContainer](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/inner) - this component contains the `Counter` and two `Routers` on the left and on the right side. Each `Router` displays its stack of `Counters` and two buttons for navigation. "Next" button pushes another `Counter` to the corresponding `Router`, "Prev" button pops the active `Counter` for the `Router`.
    * [CounterRootComponent](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/root) - this component contains the `Counter`, the `Router` of `CounterInnerContainer` and a button pushing another `CounterInnerContainer` to the stack. System back button is used for backward navigation.
* [Android sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/app-android)
* [iOS sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/ios-app)
* [watchOS sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/watchos-app)
* [JavaScript sample app](https://github.com/arkivanov/Decompose/tree/master/sample/counter/app-js)

### Counter Component Structure 

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleCounterStructure.png" width="384">

## Sample Todo List App

<img src="https://raw.githubusercontent.com/JetBrains/compose-jb/master/examples/todoapp/screenshots/todo.png" width="384">

The sample Todo List App demonstrates the following features:

* Multiplatform: Android, iOS, Desktop and Web
* Shared JetBrains Compose UI for Android and Desktop apps
* JetBrains Compose UI for the Web browser app
* SwiftUI for iOS app
* Nested components
* Shared routing with view state preservation
* Using `Lifecycle`
* Multi-module structure (one component per module)
* Inter-component communication (via [Reaktive](https://github.com/badoo/Reaktive), just an example)
* MVI using [MVIKotlin](https://github.com/arkivanov/MVIKotlin)
* Data persistence using [SQLDelight](https://github.com/cashapp/sqldelight)

Please refer to the [sample's readme](https://github.com/JetBrains/compose-jb/blob/master/examples/todoapp/README.md) for more information.

### Todo Source Code

The sample Todo List App can be found in the JetBrains Compose repository [here](https://github.com/JetBrains/compose-jb/tree/master/examples/todoapp).

## Sample Master-Detail App

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMasterDetailAndroid1.png" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMasterDetailAndroid2.png" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMasterDetailDesktop.gif" width="512"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleMasterDetailJs.gif" width="512">

> ⚠ This sample is for advanced single-pane/multi-pane navigation and layout, for generic master-detail navigation please refer to the Sample Todo List App described above.

This sample demonstrates the following features:

* Advanced master-detail navigation with automatic single-pane/multi-pane layout
* Nested components
* Pluggable UI (Jetpack Compose for Android and Desktop, React for JS, more to come)

Content:

* [shared](https://github.com/arkivanov/Decompose/tree/master/sample/master-detail/shared) - the multiplatform module which includes the following components:
    * [ArticleList](https://github.com/arkivanov/Decompose/tree/master/sample/master-detail/shared/src/commonMain/kotlin/com/arkivanov/sample/masterdetail/shared/list) - the list of the items
    * [ArticleDetails](https://github.com/arkivanov/Decompose/tree/master/sample/master-detail/shared/src/commonMain/kotlin/com/arkivanov/sample/masterdetail/shared/details) - the details of the selected item
    * [Root](https://github.com/arkivanov/Decompose/tree/master/sample/master-detail/shared/src/commonMain/kotlin/com/arkivanov/sample/masterdetail/shared/root) - the root component navigating between screens
* [compose-ui](https://github.com/arkivanov/Decompose/tree/master/sample/master-detail/compose-ui) - the module containing Compose UI for Android and Desktop targets
* [Android sample app](https://github.com/arkivanov/Decompose/tree/master/sample/master-detail/app-android)
* [Desktop sample app](https://github.com/arkivanov/Decompose/tree/master/sample/master-detail/app-desktop)
* [JavaScript sample app](https://github.com/arkivanov/Decompose/tree/master/sample/master-detail/app-js)

## Sample Dynamic Features App

<img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleDynamicFeaturesAndroid1.png" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleDynamicFeaturesAndroid2.png" width="196"> <img src="https://raw.githubusercontent.com/arkivanov/Decompose/master/docs/media/SampleDynamicFeaturesDesktop.png" width="384">

This sample demonstrates the following features:

* [Play Feature Delivery](https://developer.android.com/guide/playcore/feature-delivery) for Android
* Static features for JVM (Desktop)
* Nested components
* Routing
* Multi-module structure
* API and implementation modules for dynamic features
* Pluggable UI (JetBrains Compose)

> ⚠ For testing purposes all dynamic features are configured as `install-time`

Content:

* [shared/feature1Api](https://github.com/arkivanov/Decompose/tree/master/sample/dynamic-features/shared/feature1Api) - API module for dynamic `Feature1` component
* [shared/feature1Impl](https://github.com/arkivanov/Decompose/tree/master/sample/dynamic-features/shared/feature1Impl) - implementation module for dynamic `Feature1` component
* [shared/feature2Api](https://github.com/arkivanov/Decompose/tree/master/sample/dynamic-features/shared/feature2Api) - API module for dynamic `Feature2` component
* [shared/feature2Impl](https://github.com/arkivanov/Decompose/tree/master/sample/dynamic-features/shared/feature2Impl) - implementation module for dynamic `Feature2` component
* [shared/main](https://github.com/arkivanov/Decompose/tree/master/sample/dynamic-features/shared/main) - the `Main` component which is displayed at start
* [shared/root](https://github.com/arkivanov/Decompose/tree/master/sample/dynamic-features/shared/root) - the `Root` component which navigates between the child components
* [Android sample app](https://github.com/arkivanov/Decompose/tree/master/sample/dynamic-features/app-android)
* [Desktop sample app](https://github.com/arkivanov/Decompose/tree/master/sample/dynamic-features/app-desktop)

## Sample Greetings App

![](media/SampleGreetingsDemo.gif)

[Sample Greetings Repository](https://github.com/theapache64/decompose-desktop-example)

## Related articles

* [Decompose — experiments with Kotlin Multiplatform lifecycle-aware components and navigation](https://proandroiddev.com/decompose-experiments-with-kotlin-multiplatform-lifecycle-aware-components-and-navigation-a04ef3c7f6a3?source=friends_link&sk=f7d289cc329b6c8a765fc049e36c313f)
* [Fully cross-platform Kotlin applications (almost)](https://proandroiddev.com/fully-cross-platform-kotlin-applications-almost-29c7054f8f28?source=friends_link&sk=4619fdcb17912fde589bc4fca83efbbd)
