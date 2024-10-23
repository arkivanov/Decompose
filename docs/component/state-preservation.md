# State preservation (aka SavedStateHandle)

Sometimes it might be necessary to preserve some persistent state or data in a component when it gets destroyed (e.g. killed by the system). A very common use case is Android Activity recreation due to configuration changes, or process death on Android or iOS. Many Android developers are used to AndroidX `SavedStateHandle`, however Decompose takes a different approach. The `ComponentContext` interface extends the `StateKeeperOwner` interface, which provides the `StateKeeper` API - a multiplatform abstraction for state preservation. It is provided by [Essenty](https://github.com/arkivanov/Essenty) library (from the same author).

The `decompose` module adds Essenty's `state-keeper` module as `api` dependency, so you don't need to explicitly add it to your project. Please familiarise yourself with Essenty library, especially with the `StateKeeper` API.

Decompose relies on [kotlinx-serialization](https://github.com/Kotlin/kotlinx.serialization) library, which makes it easy to save and restore the state on all platforms.

## Usage examples

```kotlin title="Saving state in a component"
import com.arkivanov.decompose.ComponentContext
import kotlinx.serialization.Serializable

class SomeComponent(componentContext: ComponentContext) : ComponentContext by componentContext {

    // Either restore the previously saved state or create a new (initial) one
    private var state: State = stateKeeper.consume(key = "SAVED_STATE", strategy = State.serializer()) ?: State()

    init {
        stateKeeper.register(key = "SAVED_STATE", strategy = State.serializer()) {
            state // Called when it's time to save the state
        }
    }

    @Serializable // Comes from kotlinx-serialization
    private class State(val someValue: Int = 0)
}
```

```kotlin title="Saving state of a retained instance"
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.sample.shared.SomeStatefulEntity.State
import kotlinx.serialization.Serializable

class SomeComponent(componentContext: ComponentContext) : ComponentContext by componentContext {
    private val statefulEntity =
        instanceKeeper.getOrCreate {
            SomeStatefulEntity(savedState = stateKeeper.consume(key = "SAVED_STATE", strategy = State.serializer()))
        }

    init {
        stateKeeper.register(key = "SAVED_STATE", strategy = State.serializer(), supplier = statefulEntity::state)
    }
}

class SomeStatefulEntity(savedState: State?) : InstanceKeeper.Instance {
    var state: State = savedState ?: State()
        private set

    @Serializable
    data class State(val someValue: Int = 0)
}
```

## Simplified state preservation

!!!warning

    The `saveable` API is experimental since version `3.2.0-alpha02`.

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.statekeeper.saveable
import kotlinx.serialization.Serializable

class SomeComponent(componentContext: ComponentContext) : ComponentContext by componentContext {
    private var state: State by saveable(serializer = State.serializer(), init = ::State)

    @Serializable // Comes from kotlinx-serialization
    private data class State(val someValue: Int = 0)
}
```

## Simplified state preservation of a retained instance

!!!warning

    The `retainedInstance` API is experimental since version `3.2.0-alpha02`, stable since `3.2.0`.

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.retainedInstance
import com.arkivanov.essenty.statekeeper.saveable
import com.arkivanov.sample.shared.SomeStatefulEntity.State
import kotlinx.serialization.Serializable

class SomeComponent(componentContext: ComponentContext) : ComponentContext by componentContext {
    private val statefulEntity by saveable(serializer = State.serializer(), state = { it.state }) { savedState ->
        retainedInstance {
            SomeStatefulEntity(savedState = savedState)
        }
    }
}

class SomeStatefulEntity(savedState: State?) : InstanceKeeper.Instance {
    var state: State = savedState ?: State()
        private set

    @Serializable
    data class State(val someValue: Int = 0)
}
```

## Saving state on non-Android targets

Thanks to `kotlinx-serialization` the state can be serialized as JSON string and encoded as usual via `NSCoder` (iOS), file system (JVM), `localStorage` (Web), etc.
