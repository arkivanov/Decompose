# State preservation

Sometimes it might be necessary to preserve state or data in a component when it gets destroyed. A very common use case is Android Activity recreation due to configuration changes, or process death on Android or iOS. The `ComponentContext` interface extends the `StateKeeperOwner` interface, which provides the `StateKeeper` - a multiplatform abstraction for state preservation. It is provided by [Essenty](https://github.com/arkivanov/Essenty) library (from the same author).

The `decompose` module adds Essenty's `state-keeper` module as `api` dependency, so you don't need to explicitly add it to your project. Please familiarise yourself with Essenty library, especially with the `StateKeeper`.

Since Decompose `v2.2.0-alpha01` the recommended way is to use [kotlinx-serialization](https://github.com/Kotlin/kotlinx.serialization) library. Most of the Parcelable/Parcelize APIs are now deprecated.

## Usage examples

=== "Before v2.2.0-alpha01"

    ```kotlin title="Saving state in a component"
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

=== "After v2.2.0-alpha01"

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

=== "Before v3.0.0-alpha01"

    ```kotlin title="Saving state of a retained instance"
    import com.arkivanov.decompose.ComponentContext
    import com.arkivanov.essenty.instancekeeper.InstanceKeeper
    import com.arkivanov.essenty.instancekeeper.getOrCreate
    import com.arkivanov.essenty.parcelable.Parcelable
    import com.arkivanov.essenty.parcelable.ParcelableContainer
    import com.arkivanov.essenty.parcelable.Parcelize
    import com.arkivanov.essenty.parcelable.consume
    import com.arkivanov.essenty.statekeeper.consume
    
    class SomeComponent(
        componentContext: ComponentContext
    ) : ComponentContext by componentContext {
    
        private val statefulEntity =
            instanceKeeper.getOrCreate {
                SomeStatefulEntity(savedState = stateKeeper.consume(key = "SAVED_STATE"))
            }
    
        init {
            stateKeeper.register(key = "SAVED_STATE", supplier = statefulEntity::saveState)
        }
    }
    
    class SomeStatefulEntity(
        savedState: ParcelableContainer?,
    ) : InstanceKeeper.Instance {
    
        var state: State = savedState?.consume() ?: State()
            private set
    
        fun saveState(): ParcelableContainer =
            ParcelableContainer(state)
    
        override fun onDestroy() {}
    
        @Parcelize
        data class State(val someValue: Int = 0) : Parcelable
    } 
    ```

=== "Since v3.0.0-alpha01"

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

## Darwin (Apple) targets support (before v3.0.0)

Decompose provides an experimental support of state preservation for all Darwin (Apple) targets. It works via `Essenty` library and [parcelize-darwin](https://github.com/arkivanov/parcelize-darwin) compiler plugin (from the same author). Please read the documentation of both before using state preservation on Darwin targets.

This only affects your project if you explicitly enable the `parcelize-darwin` compiler plugin in your project. Otherwise, it's just no-op.

Please refer to the [sample iOS app](https://github.com/arkivanov/Decompose/blob/master/sample/app-ios/app-ios/app_iosApp.swift) where you can find an example of preserving the state.

## Darwin (Apple) targets support (since v3.0.0)

Decompose fully supports `kotlinx-serialization` since version `3.0.0-alpha01`, so the state can be serialized as JSON and
encoded via `NSCoder` as usual.

## JVM/desktop support (before v3.0.0)

Decompose also provides an experimental support of state preservation for JVM/desktop. Similarly to other targets, it works via `Essenty` library. Currently, there is no `Parcelize` compiler plugin, `Parcelable` interface just extends `java.io.Serializable`.

Due to [KT-40218](https://youtrack.jetbrains.com/issue/KT-40218), deserialized `object` classes are not equal to their original instances. This prevents the navigation state from being restored correctly when a configuration is an `object`. This will be fixed with the introduction of `data object` in Kotlin 1.9 (see [KT-4107](https://youtrack.jetbrains.com/issue/KT-4107)). A workaround for now is to add a [readResolve](https://docs.oracle.com/javase/7/docs/platform/serialization/spec/input.html#5903) method to every `object` configuration (see an [example](https://github.com/arkivanov/Decompose/blob/master/sample/shared/shared/src/commonMain/kotlin/com/arkivanov/sample/shared/root/DefaultRootComponent.kt)).

Please refer to the [sample JVM/desktop app](https://github.com/arkivanov/Decompose/blob/master/sample/app-desktop/src/jvmMain/kotlin/com/arkivanov/sample/app/Main.kt) where you can find an example of preserving the state.

## JVM/desktop support (since v3.0.0)

Decompose fully supports `kotlinx-serialization` since version `3.0.0-alpha01`, so the state can be serialized as JSON into a file as usual.
