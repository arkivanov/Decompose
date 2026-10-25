package com.arkivanov.decompose

import androidx.activity.ComponentActivity
import androidx.fragment.app.Fragment
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry
import androidx.lifecycle.ViewModelStoreOwner
import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEventDispatcher
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.lifecycle.addObserver
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToDestroyed
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.lifecycle.moveToStarted
import com.arkivanov.decompose.navigationevent.ForwardingNavigationEventInput
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.instancekeeper.instanceKeeper
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import com.arkivanov.essenty.statekeeper.stateKeeper
import kotlinx.serialization.builtins.serializer

/**
 * Returns (creating if needed) a component that is retained over configuration changes.
 * This is typically used to create a retained root component.
 *
 * Please pay attention when supplying dependencies to the component to avoid leaking the `Activity`.
 *
 * @param key a key of the component, must be unique within the `Activity`.
 * @param handleNavigationEvents a flag that determines whether the component handles navigation events
 * from the `Activity`'s [NavigationEventDispatcher], default is `true`.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not,
 * default value is `false`. Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 * @param factory a function that returns a new instance of the component.
 */
fun <T> ComponentActivity.retainedComponent(
    key: String = "RootRetainedComponent",
    handleNavigationEvents: Boolean = true,
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
    factory: (ComponentContext) -> T,
): T =
    retainedComponent(
        key = key,
        navigationEventDispatcher = if (handleNavigationEvents) navigationEventDispatcher else null,
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
        isChangingConfigurations = ::isChangingConfigurations,
        factory = factory,
    )

/**
 * Returns (creating if needed) a component that is retained over configuration changes.
 * This is typically used to create a retained root component.
 *
 * Please pay attention when supplying dependencies to the component to avoid leaking the `Fragment`.
 *
 * @param key a key of the component, must be unique within the `Fragment`.
 * @param handleNavigationEvents a flag that determines whether the component handles navigation events
 * from the host `Activity`'s [NavigationEventDispatcher], default is `true`.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not,
 * default value is `false`. Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 * @param factory a function that returns a new instance of the component.
 */
fun <T> Fragment.retainedComponent(
    key: String = "RootRetainedComponent",
    handleNavigationEvents: Boolean = true,
    discardSavedState: Boolean = false,
    isStateSavingAllowed: () -> Boolean = { true },
    factory: (ComponentContext) -> T,
): T =
    retainedComponent(
        key = key,
        navigationEventDispatcher = if (handleNavigationEvents) requireActivity().navigationEventDispatcher else null,
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
        isChangingConfigurations = { activity?.isChangingConfigurations ?: false },
        factory = factory,
    )

internal fun <T, O> O.retainedComponent(
    key: String,
    navigationEventDispatcher: NavigationEventDispatcher?,
    discardSavedState: Boolean,
    isStateSavingAllowed: () -> Boolean,
    isChangingConfigurations: () -> Boolean,
    factory: (ComponentContext) -> T,
): T where O : LifecycleOwner, O : SavedStateRegistryOwner, O : ViewModelStoreOwner {
    check(savedStateRegistry.getSavedStateProvider(key = key) == null) {
        "Another retained component is already registered with the key: $key"
    }

    val stateKeeper = stateKeeper(key = key, discardSavedState = discardSavedState, isSavingAllowed = isStateSavingAllowed)
    val instanceKeeper = instanceKeeper()

    val discardRetainedInstance = stateKeeper.consume(key = KEY_STATE_MARKER, strategy = Boolean.serializer()) == null
    stateKeeper.register(key = KEY_STATE_MARKER, strategy = Boolean.serializer()) { true }

    if (discardRetainedInstance) {
        (instanceKeeper.remove(key = key) as RetainedComponentHolder<*>?)?.also { holder ->
            holder.lifecycle.moveToDestroyed()
            holder.onDestroy()
        }
    }

    val holder =
        instanceKeeper.getOrCreate(key = key) {
            RetainedComponentHolder(
                savedState = stateKeeper.consume(key = key, strategy = SerializableContainer.serializer()),
                factory = factory,
            )
        }

    lifecycle.addObserver(
        onCreate = {
            if (holder.lifecycle.currentState < Lifecycle.State.CREATED) {
                holder.lifecycle.moveToCreated()
            }
        },
        onStart = {
            if (holder.lifecycle.currentState < Lifecycle.State.STARTED) {
                holder.lifecycle.moveToStarted()
            }
        },
        onResume = {
            if (holder.lifecycle.currentState < Lifecycle.State.RESUMED) {
                holder.lifecycle.moveToResumed()
            }
        },
        onPause = {
            if (!isChangingConfigurations()) {
                holder.lifecycle.moveToStarted()
            }
        },
        onStop = {
            if (!isChangingConfigurations()) {
                holder.lifecycle.moveToCreated()
            }
        },
        onDestroy = {
            if (!isChangingConfigurations()) {
                holder.lifecycle.moveToDestroyed()
            }
        },
    )

    stateKeeper.register(key = key, strategy = SerializableContainer.serializer()) { holder.stateKeeper.save() }

    if (navigationEventDispatcher != null) {
        navigationEventDispatcher.addHandler(holder.navigationEventInput.handler)
        navigationEventDispatcher.addInput(holder.fallbackNavigationEventInput)

        lifecycle.addObserver(
            onStart = { holder.isEnabled = true },
            onStop = { holder.isEnabled = false },
            onDestroy = {
                holder.navigationEventInput.handler.remove()
                navigationEventDispatcher.removeInput(holder.fallbackNavigationEventInput)
            },
        )
    }

    return holder.component
}

private const val KEY_STATE_MARKER = "RetainedComponent_state_marker"

private class RetainedComponentHolder<out T>(
    savedState: SerializableContainer?,
    factory: (ComponentContext) -> T,
) : InstanceKeeper.Instance, LifecycleOwner {
    override val lifecycle: LifecycleRegistry = LifecycleRegistry(this)

    val stateKeeper: StateKeeperDispatcher = StateKeeperDispatcher(savedState = savedState)
    private val instanceKeeper = InstanceKeeperDispatcher()

    val fallbackNavigationEventInput: DirectNavigationEventInput = DirectNavigationEventInput()
    val navigationEventInput: ForwardingNavigationEventInput = ForwardingNavigationEventInput(isEnabled = false)
    var isEnabled: Boolean by navigationEventInput::isEnabled

    val navigationEventDispatcher: NavigationEventDispatcher =
        NavigationEventDispatcher(
            onBackCompletedFallback = {
                fallbackNavigationEventInput.takeIf { isEnabled }?.backCompleted()
            },
            onForwardCompletedFallback = {
                fallbackNavigationEventInput.takeIf { isEnabled }?.forwardCompleted()
            },
        )

    val component: T =
        factory(
            DefaultComponentContext(
                lifecycle = lifecycle,
                stateKeeper = stateKeeper,
                instanceKeeper = instanceKeeper,
                navigationEventDispatcher = navigationEventDispatcher,
            )
        )

    init {
        navigationEventDispatcher.addInput(navigationEventInput)
    }

    override fun onDestroy() {
        instanceKeeper.destroy()
        navigationEventDispatcher.dispose()
    }
}
