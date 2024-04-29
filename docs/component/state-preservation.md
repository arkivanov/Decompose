# State preservation

Sometimes it might be necessary to preserve state or data in a component when it gets destroyed (e.g. killed by the system). A very common use case is Android Activity recreation due to configuration changes, or process death on Android or iOS. The `ComponentContext` interface extends the `StateKeeperOwner` interface, which provides the `StateKeeper` API - a multiplatform abstraction for state preservation. It is provided by [Essenty](https://github.com/arkivanov/Essenty) library (from the same author).

The `decompose` module adds Essenty's `state-keeper` module as `api` dependency, so you don't need to explicitly add it to your project. Please familiarise yourself with Essenty library, especially with the `StateKeeper` API.

Decompose relies on [kotlinx-serialization](https://github.com/Kotlin/kotlinx.serialization) library, which makes it easy to save and restore the state on all platforms.

## Usage examples

```kotlin title="Saving state in a component"
import com.arkivanov.decompose.ComponentContext
import kotlinx.serialization.Serializable

class SomeComponent(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private var state: State = stateKeeper.consume(key = "SAVED_STATE", strategy = State.serializer()) ?: State()

    init {
        stateKeeper.register(key = "SAVED_STATE", strategy = State.serializer()) { state }
    }

    @Serializable
    private class State(val someValue: Int = 0)
}
```

```kotlin title="Saving state of a retained instance"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.serialization.Serializable

class SomeComponent(
    componentContext: ComponentContext
) : ComponentContext by componentContext {

    private val statefulEntity =
        instanceKeeper.getOrCreate {
            SomeStatefulEntity(savedState = stateKeeper.consume(key = "SAVED_STATE", strategy = SerializableContainer.serializer()))
        }

    init {
        stateKeeper.register(
            key = "SAVED_STATE",
            strategy = SerializableContainer.serializer(),
            supplier = statefulEntity::saveState,
        )
    }
}

class SomeStatefulEntity(
    savedState: SerializableContainer?,
) : InstanceKeeper.Instance {

    var state: State = savedState?.consume(strategy = State.serializer()) ?: State()
        private set

    fun saveState(): SerializableContainer =
        SerializableContainer(value = state, strategy = State.serializer())

    override fun onDestroy() {}

    @Serializable
    data class State(val someValue: Int = 0)
} 
```

## Saving state on non-Android targets

Thanks to `kotlinx-serialization` the state can be serialized as JSON string and encoded as usual via `NSCoder` (iOS), file system (JVM), `localStorage` (Web), etc.
