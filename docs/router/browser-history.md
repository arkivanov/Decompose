# Web Browser History

By default `Router` navigation does not affect URLs in the browser address bar. But sometimes it is necessary to have different URLs for
different `Router` destinations. For this purpose Decompose provides an **experimental** API - [WebHistoryController](https://github.com/arkivanov/Decompose/blob/master/decompose/src/jsMain/kotlin/com/arkivanov/decompose/router/webhistory/DefaultWebHistoryController.kt).

The controller listens for the `Router` state changes and updates the browser URL and the history accordingly:

- When one or more components are pushed to the `Router` stack, the controller pushes corresponding pages to the history
- When one or more components are popped from the stack, the controller pops corresponding pages from the history
- When some components are replaced in the stack, the controller tries its best to keep the page history aligned (there are corner cases)
- When the user presses the browser's Back button (or selects one of the previous pages in the history dropdown menu), the controller
pops the corresponding configurations from the `Router`
- When the user navigates forward in the browser history, the controller pushes the corresponding configurations to the `Router`

## Corner cases

There is one known corner case due to the History API limitations. When *all* configurations in the stack are *replaced* with another
*single* configuration (`A`<-`B`<-`C` ===> `D`), the pages corresponding to the *second and subsequent* removed configurations (`B` and `C`)
remain in the history. If at this point the user will move forward (by clicking on the Forward button in the browser), the previously
removed configurations will be pushed back to the stack (the stack will become `D`<-`B` or `D`<-`B`<-`C`).

## Limitations

Only one `Router` can be attached to an instance of the `WebHistoryController`. Having multiple instances of the controller is not allowed.

## Configuring the application

Using `WebHistoryController` in a single page application requires additional configuration - a catch-all strategy to return the same html
resource for all paths. This strategy will be different for different server configurations.

### Development configuration

The Kotlin/JS `browser` target uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server) as a local development server.
It can be configured to use the same `index.html` file (or your primary html file) for all paths, by setting the
[devServer.historyApiFallback](https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback) flag. The Gradle DSL for Kotlin
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

## Using the WebHistoryController

Using `WebHistoryController` is easy:

1. Create a new instance of `WebHistoryController` in the JS app and pass it via constructor to a component responsible for
navigation (typically it is the root component)
2. In the component, call the `WebHistoryController.attach` method and supply all arguments
3. In the JS app, pass an initial deeplink to the component
4. Use the deeplink in the component to generate an initial back stack

### Example

The Counter sample demonstrates the use of `WebHistoryController`:

- [App.kt](https://github.com/arkivanov/Decompose/blob/master/sample/counter/app-js/src/main/kotlin/com/arkivanov/sample/counter/app/App.kt) -
demonstrates passing `WebHistoryController` and a deeplink via constructor to `CounterRootComponent`
- [CounterRootComponent](https://github.com/arkivanov/Decompose/blob/master/sample/counter/shared/src/commonMain/kotlin/com/arkivanov/sample/counter/shared/root/CounterRootComponent.kt) -
demonstrates generating the initial back from the deeplink, as well as calling `WebHistoryController.attach` and supplying the arguments
