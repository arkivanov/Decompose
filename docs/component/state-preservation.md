# State preservation

Sometimes it might be necessary to preserve state or data in a component when it gets destroyed. A very common use case is Android Activity recreation due to configuration changes, or process death. The `ComponentContext` interface extends the `StateKeeperOwner` interface, which provides the `StateKeeper` - a multiplatform abstraction for state preservation. It is provided by [Essenty](https://github.com/arkivanov/Essenty) library (from the same author).

The `decompose` module adds Essenty's `state-keeper` module as `api` dependency, so you don't need to explicitly add it to your project. Please familiarise yourself with Essenty library, especially with the `StateKeeper`.

## Usage example

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.statekeeper.consume

class SomeComponent(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private var state: State = stateKeeper.consume(key = "SAVED_STATE") ?: State()

    init {
        stateKeeper.register(key = "SAVED_STATE") { state }
    }

    @Parcelize
    private class State(val someValue: Int = 0) : Parcelable
}
```