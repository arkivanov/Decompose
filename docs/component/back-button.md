# Back button handling

Some devices (e.g. Android) have hardware back buttons. A very common use case is to close the current screen, or the app if there is only one screen in the stack. Another possible use case is to show a confirmation dialog before closing the app.

## Navigation with back button

`Child Stack` can automatically navigate back when the back button is pressed. All you need to do is to supply the `handleBackButton=true` argument when you initialize the `ChildStack`. Please see the related [documentation page](https://arkivanov.github.io/Decompose/child-stack/overview/) for more information.

## Manual back button handling

The back button can be handled manually using `BackPressedHandler` (comes from [Essenty](https://github.com/arkivanov/Essenty) library), which is provided by `ComponentContext`. The `decompose` module adds Essenty's `back-pressed` module as `api` dependency, so you don't need to explicitly add it to your project. Please familiarise yourself with Essenty library, especially with the `BackPressedDispatcher`.

### Usage example

```kotlin
import com.arkivanov.decompose.ComponentContext

class SomeComponent(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    init {
        backPressedHandler.register(::onBackPressed)
    }

    private fun onBackPressed(): Boolean {
        // Handle the back button.
        // Return true to consume the event, or false to allow other consumers.
        return false
    }
}
```
