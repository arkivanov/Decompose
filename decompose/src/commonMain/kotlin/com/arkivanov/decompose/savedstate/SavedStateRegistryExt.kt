package com.arkivanov.decompose.savedstate

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.savedstate.SavedState
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.SavedStateRegistryOwner
import androidx.savedstate.savedState
import com.arkivanov.decompose.statekeeper.SavedStateRegistryControllerOwner
import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.SerializationStrategy
import kotlin.concurrent.Volatile
import kotlin.properties.PropertyDelegateProvider
import kotlin.properties.ReadOnlyProperty
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

expect fun <T : Any> SavedStateRegistry.register(key: String, strategy: SerializationStrategy<T>, supplier: () -> T?)

expect fun <T : Any> SavedStateRegistry.consume(key: String, strategy: DeserializationStrategy<T>): T?

/**
 * Helper function for creating a
 * [delegated property](https://kotlinlang.org/docs/delegated-properties.html) holding an object
 * whose state is automatically saved and restored using [StateKeeper].
 *
 * Example:
 *
 * ```
 * import com.arkivanov.essenty.statekeeper.StateKeeper
 * import com.arkivanov.essenty.statekeeper.saveable
 * import kotlinx.serialization.Serializable
 *
 * private class SomeLogic(stateKeeper: StateKeeper) {
 *
 *     private val stateHolder by stateKeeper.saveable(
 *         serializer = State.serializer(),
 *         state = StateHolder::state,
 *     ) { savedState ->
 *         StateHolder(state = savedState ?: State())
 *     }
 *
 *     private class StateHolder(var state: State)
 *
 *     @Serializable
 *     private class State(val someValue: Int = 0)
 * }
 * ```
 *
 * @param serializer a [KSerializer] for serializing and deserializing the state.
 * @param state a function that selects a state [S] from the resulting
 * object [T] and returns it for saving.
 * @param key an optional key for saving and restoring the state. If not provided, then the
 * property name is used as a key.
 * @param init a function that accepts the previously saved state [S] (if any) and
 * returns an object of type [T].
 * @return [PropertyDelegateProvider] of type [T], typically used to define a delegated property.
 */
fun <T, S> SavedStateRegistry.saveable(
    serializer: KSerializer<S>,
    state: (T) -> S,
    key: String? = null,
    init: (savedState: S?) -> T,
): PropertyDelegateProvider<Any?, ReadOnlyProperty<Any?, T>> =
    PropertyDelegateProvider { _, property ->
        val stateKey = key ?: "SAVEABLE_HOLDER_${property.name}"
        val holderSerializer = Holder.serializer(serializer)
        val result = init(consume(key = stateKey, strategy = holderSerializer)?.value)
        register(key = stateKey, strategy = holderSerializer) { Holder(state(result)) }
        ReadOnlyProperty { _, _ -> result }
    }

/**
 * Helper function for creating a
 * [delegated property](https://kotlinlang.org/docs/delegated-properties.html) holding an object
 * whose state is automatically saved and restored using [StateKeeper].
 *
 * Example:
 *
 * ```
 * import com.arkivanov.essenty.statekeeper.StateKeeper
 * import com.arkivanov.essenty.statekeeper.saveable
 * import kotlinx.serialization.Serializable
 *
 * private class SomeLogic(override val stateKeeper: StateKeeper) : StateKeeperOwner {
 *
 *     private val stateHolder by saveable(
 *         serializer = State.serializer(),
 *         state = StateHolder::state,
 *     ) { savedState ->
 *         StateHolder(state = savedState ?: State())
 *     }
 *
 *     private class StateHolder(var state: State)
 *
 *     @Serializable
 *     private class State(val someValue: Int = 0)
 * }
 * ```
 *
 * @param serializer a [KSerializer] for serializing and deserializing the state.
 * @param state a function that selects a state [S] from the resulting
 * object [T] and returns it for saving.
 * @param key an optional key for saving and restoring the state. If not provided, then the
 * property name is used as a key.
 * @param init a function that accepts the previously saved state [S] (if any) and
 * returns an object of type [T].
 * @return [PropertyDelegateProvider] of type [T], typically used to define a delegated property.
 */
fun <T, S> SavedStateRegistryOwner.saveable(
    serializer: KSerializer<S>,
    state: (T) -> S,
    key: String? = null,
    init: (savedState: S?) -> T,
): PropertyDelegateProvider<Any?, ReadOnlyProperty<Any?, T>> =
    savedStateRegistry.saveable(
        serializer = serializer,
        state = state,
        key = key,
        init = init,
    )

/**
 * Helper function for creating a mutable
 * [delegated property](https://kotlinlang.org/docs/delegated-properties.html) whose value is
 * automatically saved and restored using [StateKeeper].
 *
 * Example:
 *
 * ```
 * import com.arkivanov.essenty.statekeeper.StateKeeper
 * import com.arkivanov.essenty.statekeeper.saveable
 * import kotlinx.serialization.Serializable
 *
 * class SomeLogic(stateKeeper: StateKeeper) {
 *     private var state: State by stateKeeper.saveable(serializer = State.serializer(), init = ::State)
 *
 *     @Serializable
 *     private class State(val someValue: Int = 0)
 * }
 * ```
 *
 * @param serializer a [KSerializer] for serializing and deserializing values of type [T].
 * @param key an optional key for saving and restoring the value. If not provided, then the
 * property name is used as a key.
 * @param init a function returning the initial value of type [T].
 * @return [PropertyDelegateProvider] of type [T], typically used to define a delegated property.
 */
fun <T> SavedStateRegistry.saveable(
    serializer: KSerializer<T>,
    key: String? = null,
    init: () -> T,
): PropertyDelegateProvider<Any?, ReadWriteProperty<Any?, T>> =
    PropertyDelegateProvider { _, property ->
        val stateKey = key ?: "SAVEABLE_${property.name}"
        val holderSerializer = Holder.serializer(serializer)
        val holder = consume(key = stateKey, strategy = holderSerializer) ?: Holder(init())
        register(key = stateKey, strategy = holderSerializer) { Holder(holder.value) }
        holder
    }

@Serializable
private class Holder<T>(@Volatile var value: T) : ReadWriteProperty<Any?, T> {
    override fun getValue(thisRef: Any?, property: KProperty<*>): T =
        this.value

    override fun setValue(thisRef: Any?, property: KProperty<*>, value: T) {
        this.value = value
    }
}

/**
 * Helper function for creating a mutable
 * [delegated property]((https://kotlinlang.org/docs/delegated-properties.html)) whose value is
 * automatically saved and restored using [StateKeeper].
 *
 * Example:
 *
 * ```
 * import com.arkivanov.essenty.statekeeper.StateKeeper
 * import com.arkivanov.essenty.statekeeper.saveable
 * import kotlinx.serialization.Serializable
 *
 * class SomeLogic(override val stateKeeper: StateKeeper) : StateKeeperOwner {
 *     private var state: State by saveable(serializer = State.serializer(), init = ::State)
 *
 *     @Serializable
 *     private class State(val someValue: Int = 0)
 * }
 * ```
 *
 * @param serializer a [KSerializer] for serializing and deserializing values of type [T].
 * @param key an optional key for saving and restoring the value. If not provided, then the
 * property name is used as a key.
 * @param init a function returning the initial value of type [T].
 * @return [PropertyDelegateProvider] of type [T], typically used to define a delegated property.
 */
fun <T> SavedStateRegistryOwner.saveable(
    serializer: KSerializer<T>,
    key: String? = null,
    init: () -> T,
): PropertyDelegateProvider<Any?, ReadWriteProperty<Any?, T>> =
    savedStateRegistry.saveable(
        serializer = serializer,
        key = key,
        init = init,
    )

internal fun SavedStateRegistry.child(
    key: String,
    lifecycle: Lifecycle,
    recreate: Boolean = false,
    isSavingAllowed: () -> Boolean = { true },
): SavedStateRegistry {
    val owner =
        object : LifecycleOwner, SavedStateRegistryOwner, SavedStateRegistryControllerOwner {
            override val lifecycle: Lifecycle get() = lifecycle
            override val savedStateRegistryController: SavedStateRegistryController = SavedStateRegistryController.create(this)
            override val savedStateRegistry: SavedStateRegistry by savedStateRegistryController::savedStateRegistry
        }

    owner.savedStateRegistryController.performAttach()

    consumeRestoredStateForKey(key = key).also { savedState ->
        owner.savedStateRegistryController.performRestore(savedState?.takeUnless { recreate })
    }

    registerSavedStateProvider(key = key) {
        if (isSavingAllowed()) owner.savedStateRegistryController.save() else savedState() // FIXME: Test the else case
    }

    // FIXME: enableSavedStateHandles()

    return owner.savedStateRegistryController.savedStateRegistry
}

internal fun SavedStateRegistryController.save(): SavedState =
    savedState().also(this::performSave)
