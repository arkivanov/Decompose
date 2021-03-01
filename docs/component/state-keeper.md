# StateKeeper

## Saving state over configurations change or process death

Decompose provides the `StateKeeper` API for state preservation. Currently it relies on `Parcelable` interface. It can be used in multiplatform code but is only useful in Android.

Here is a quick example:

```kotlin
class Child1(componentContext: ComponentContext) : ComponentContext by componentContext {
    private var state = stateKeeper.consume<State>("SAVED_STATE") ?: State()

    init {
        stateKeeper.register("SAVED_STATE") { state }
    }

    @Parcelize
    private class State(val someValue: Int = 0) : Parcelable
}
```