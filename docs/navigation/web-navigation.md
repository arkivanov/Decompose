# Web Browser Navigation

!!!warning

    This API is experimental, available since version `3.3.0-alpha01`.

The Web Navigation API is a successor of the old [Web Browser History](stack/browser-history.md) API. It is a more flexible and powerful tool for managing browser URLs and history in a web application. The API is designed to work with different navigation models and provides a way to synchronize the browser URL and history with the navigation state. Currently, the following navigation models are supported:

- [Child Stack](stack/overview.md)
- [Child Pages](pages/overview.md)
- [Child Panels](panels/overview.md)

The `Child Slot` navigation model is currently not supported. It will likely require additional API changes, might be implemented in the future.

## WebNavigation and WebNavigationOwner interfaces

The API consists of two main interfaces:

- [WebNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/webhistory/WebNavigation.kt) - A two-way navigation controller for Web browsers that connects a navigation model (e.g. `Child Stack`) with the browser's navigation history.
- [WebNavigationOwner](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/webhistory/WebNavigationOwner.kt) - An interface that represents a holder of `WebNavigation`, typically implemented by a Decompose component.

You don't need to implement the `WebNavigation` interface directly. Instead, you should implement the `WebNavigationOwner` interface in your component using one of the provided functions available for each supported navigation model:

- [childStackWebNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/stack/StackWebNavigation.kt) - For `Child Stack` navigation model.
- [childPagesWebNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/pages/PagesWebNavigation.kt) - For `Child Pages` navigation model.
- [childPanelsWebNavigation](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/panels/PanelsWebNavigation.kt) - For `Child Panels` navigation model.

Only one instance of the `WebNavigation` controller is allowed per component. The new API also supports nested navigation, there can only be up to one (zero or one) child `WebNavigationOwner` at a time.

## Enabling the Web Navigation

To enable the Web Navigation, just use the `withWebHistory {}` function available for `js` ([link](https://github.com/arkivanov/Decompose/blob/master/decompose/src/jsMain/kotlin/com/arkivanov/decompose/router/webhistory/WebHistoryNavigation.kt)) and `wasmJs` ([link](https://github.com/arkivanov/Decompose/blob/master/decompose/src/wasmJsMain/kotlin/com/arkivanov/decompose/router/webhistory/WebHistoryNavigation.kt)) targets separately. The function provides two parameters: the current URL and an instance of `StateKeeper`. The URL should typically be used as a deep link to initialize the navigation state. The `StateKeeper` automatically saves and restores the navigation state on page reloads, it should be used to create the root `ComponentContext`.

Once the Web Navigation is enabled, the browser URL and history will be automatically synchronized with the navigation state. The browser history automatically follows the navigation state changes, and the navigation is automatically performed following the browser history changes.

## Configuring the application

Using Web Navigation in a single page application requires additional configuration - a catch-all strategy to return the same html resource for all paths. This strategy will be different for different server configurations.

### Development configuration

The Kotlin/JS `browser` target uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) as a local development server.
It can be configured to use the same `index.html` file (or your primary html file) for all paths, by setting the [devServer.historyApiFallback](https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback) flag. The Gradle DSL for Kotlin
webpack currently does not support the `historyApiFallback` flag, so a special configuration file should be used instead.

First, create a directory named `webpack.config.d` in the JS app module's directory. Then create a new file named `devServerConfig.js`
inside that directory. Finally, put the following content to the file:

```javascript
// <js app module>/webpack.config.d/devServerConfig.js

config.devServer = {
  ...config.devServer, // Merge with other devServer settings
  "historyApiFallback": true
};
```

## Web Navigation with Child Stack

```kotlin title="Component interface"
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value

interface MyStackComponent : WebNavigationOwner {
    val stack: Value<ChildStack<*, Child>>

    sealed class Child {
        // Omitted code
    }
}

```

```kotlin title="Component implementation"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.childStackWebNavigation
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.Serializable

class DefaultMyStackComponent(
    componentContext: ComponentContext,
    deepLinkUrl: String?, // Or your favourite data structure, like Uri, etc.
) : MyStackComponent, ComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    private val _stack: Value<ChildStack<Config, MyStackComponent.Child>> =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialStack = { TODO("Use the deepLinkUrl parameter to initialize the stack") },
            childFactory = { ... },
        )

    override val stack: Value<ChildStack<*, MyStackComponent.Child>> = _stack

    override val webNavigation: WebNavigation<*> =
        childStackWebNavigation(
            navigator = nav,
            stack = _stack,
            serializer = Config.serializer(),
            pathMapper = { child -> TODO("Return a path for the child") }, // Optional
            parametersMapper = { child -> TODO("Return a Map with parameters for the child") }, // Optional
            childSelector = { child -> TODO("Return a WebNavigationOwner for the child") }, // Optional
        )

    @Serializable
    private sealed interface Config {
        // Omitted code
    }
}
```

## Web Navigation with Child Pages

```kotlin title="Component interface"
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value

interface MyPagesComponent : WebNavigationOwner {
    val pages: Value<ChildPages<*, ...>>
}
```

```kotlin title="Component implementation"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.router.pages.PagesNavigation
import com.arkivanov.decompose.router.pages.childPages
import com.arkivanov.decompose.router.pages.childPagesWebNavigation
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.Serializable

class DefaultMyPagesComponent(
    componentContext: ComponentContext,
    deepLinkUrl: String?, // Or your favourite data structure, like Uri, etc.
) : MyPagesComponent, ComponentContext by componentContext {

    private val nav = PagesNavigation<Config>()

    private val _pages: Value<ChildPages<Config, ...>> =
        childPages(
            source = nav,
            serializer = Config.serializer(),
            initialPages = { TODO("Use the deepLinkUrl parameter to initialize the navigation") },
            childFactory = { ... },
        )

    override val pages: Value<ChildPages<*, ...>> = _pages

    override val webNavigation: WebNavigation<*> =
        childPagesWebNavigation(
            navigator = nav,
            pages = _pages,
            serializer = Config.serializer(),
            pathMapper = { pages -> TODO("Return a path for the navigation state") }, // Optional
            parametersMapper = { pages -> TODO("Return a Map with parameters for the navigation state") }, // Optional
            childSelector = { child -> TODO("Return a WebNavigationOwner for the child") }, // Optional
        )

    @Serializable
    private data class Config(...)
}
```

## Web Navigation with Child Panels

```kotlin title="Component interface"
import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value

interface MyPanelsComponent : WebNavigationOwner {
    val panels: Value<ChildPanels<...>>
}
```

```kotlin title="Component implementation"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.router.panels.PanelsNavigation
import com.arkivanov.decompose.router.panels.childPanels
import com.arkivanov.decompose.router.panels.childPanelsWebNavigation
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.Serializable

class DefaultMyPanelsComponent(
    componentContext: ComponentContext,
    deepLinkUrl: String?, // Or your favourite data structure, like Uri, etc.
) : MyPanelsComponent, ComponentContext by componentContext {

    private val nav = PanelsNavigation<MainConfig, DetailsConfig, Nothing>()

    private val _panels: Value<ChildPanels<...>> =
        childPanels(
            source = nav,
            serializers = MainConfig.serializer() to DetailsConfig.serializer(),
            initialPanels = { TODO("Use the deepLinkUrl parameter to initialize the navigation") },
            mainFactory = { ... },
            detailsFactory = { ... },
        )

    override val panels: Value<ChildPanels<...>> = _panels

    override val webNavigation: WebNavigation<*> =
        childPanelsWebNavigation(
            navigator = nav,
            panels = _panels,
            serializers = MainConfig.serializer() to DetailsConfig.serializer(),
            pathMapper = { panels -> TODO("Return a path for the navigation state") }, // Optional
            parametersMapper = { panels -> TODO("Return a Map with parameters for the navigation state") }, // Optional
            childSelector = { panels -> TODO("Return a WebNavigationOwner for the navigation state") }, // Optional
        )

    @Serializable
    private data class MainConfig(...)

    @Serializable
    private data class DetailsConfig(...)
}
```
## Example

Please refer to the [main sample](https://github.com/arkivanov/Decompose/tree/master/sample) for a complete example of using the Web Navigation API.
