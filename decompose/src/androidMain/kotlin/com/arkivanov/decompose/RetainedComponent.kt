package com.arkivanov.decompose

import androidx.activity.ComponentActivity
import androidx.fragment.app.Fragment
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry
import androidx.lifecycle.SavedStateViewModelFactory
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.viewmodel.CreationExtras
import androidx.lifecycle.viewmodel.plus
import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEventDispatcher
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.lifecycle.addObserver
import com.arkivanov.decompose.lifecycle.moveToCreated
import com.arkivanov.decompose.lifecycle.moveToDestroyed
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.lifecycle.moveToStarted
import com.arkivanov.decompose.navigationevent.ForwardingNavigationEventInput
import com.arkivanov.decompose.viewmodel.ViewModelStoreHost
import com.arkivanov.decompose.viewmodel.getOrCreate
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
 * @param viewModelFactory a provider of default [ViewModelProvider.Factory] for creating `ViewModel` instances.
 * Used when a `ViewModel` is being created without passing a specific factory. Default is [SavedStateViewModelFactory].
 * The provider function is remembered when [retainedComponent] is called the first time and then retained.
 * Pay attention not to leak any Activity-scoped objects.
 * @param viewModelCreationExtras a provider of additional `ViewModel` [CreationExtras]. Default is [CreationExtras.Empty].
 * Pay attention not to leak any Activity-scoped objects.
 * @param handleNavigationEvents a flag that determines whether the component handles navigation events
 * from the `Activity`'s [NavigationEventDispatcher], default is `true`.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not,
 * default value is `false`. Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 * @param factory a function that returns a new instance of the component.
 * Called only once on first component creation. Pay attention not to leak any Activity-scoped objects.
 */
inline fun <reified T : Any> ComponentActivity.retainedComponent(
    key: String = "RootRetainedComponent",
    noinline viewModelFactory: () -> ViewModelProvider.Factory = ::SavedStateViewModelFactory,
    noinline viewModelCreationExtras: () -> CreationExtras = { CreationExtras.Empty },
    handleNavigationEvents: Boolean = true,
    discardSavedState: Boolean = false,
    noinline isStateSavingAllowed: () -> Boolean = { true },
    noinline factory: (ComponentContext) -> T,
): T =
    retainedComponent(
        cast = { it as T },
        key = key,
        viewModelFactory = viewModelFactory,
        viewModelCreationExtras = viewModelCreationExtras,
        handleNavigationEvents = handleNavigationEvents,
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
        factory = factory,
    )

@PublishedApi
internal fun <T : Any> ComponentActivity.retainedComponent(
    cast: (Any) -> T,
    key: String,
    viewModelFactory: () -> ViewModelProvider.Factory,
    viewModelCreationExtras: () -> CreationExtras,
    handleNavigationEvents: Boolean,
    discardSavedState: Boolean,
    isStateSavingAllowed: () -> Boolean,
    factory: (ComponentContext) -> T,
): T =
    retainedComponent(
        cast = cast,
        key = key,
        viewModelFactory = viewModelFactory,
        viewModelCreationExtras = viewModelCreationExtras,
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
 * @param viewModelFactory a provider of default [ViewModelProvider.Factory] for creating `ViewModel` instances.
 * Used when a `ViewModel` is being created without passing a specific factory.
 * The provider function is remembered when [retainedComponent] is called the first time and then retained.
 * Pay attention not to leak any Fragment-scoped objects.
 * Default is [SavedStateViewModelFactory].
 * @param viewModelCreationExtras a provider of additional `ViewModel` [CreationExtras]. Default is [CreationExtras.Empty].
 * Pay attention not to leak any Fragment-scoped objects.
 * @param handleNavigationEvents a flag that determines whether the component handles navigation events
 * from the host `Activity`'s [NavigationEventDispatcher], default is `true`.
 * @param discardSavedState a flag indicating whether any previously saved state should be discarded or not,
 * default value is `false`. Can be useful for handling deep links in `onCreate`, so that the navigation state
 * is not restored and initial state from the deep link is applied instead.
 * @param isStateSavingAllowed called before saving the state. When `true` then the state will be saved,
 * otherwise it won't. Default value is `true`.
 * @param factory a function that returns a new instance of the component.
 * Called only once on first component creation. Pay attention not to leak any Fragment or Activity scoped objects.
 */
inline fun <reified T : Any> Fragment.retainedComponent(
    key: String = "RootRetainedComponent",
    noinline viewModelFactory: () -> ViewModelProvider.Factory = ::SavedStateViewModelFactory,
    noinline viewModelCreationExtras: () -> CreationExtras = { CreationExtras.Empty },
    handleNavigationEvents: Boolean = true,
    discardSavedState: Boolean = false,
    noinline isStateSavingAllowed: () -> Boolean = { true },
    noinline factory: (ComponentContext) -> T,
): T =
    retainedComponent(
        cast = { it as T },
        key = key,
        viewModelFactory = viewModelFactory,
        viewModelCreationExtras = viewModelCreationExtras,
        handleNavigationEvents = handleNavigationEvents,
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
        factory = factory,
    )

@PublishedApi
internal fun <T : Any> Fragment.retainedComponent(
    cast: (Any) -> T,
    key: String,
    viewModelFactory: () -> ViewModelProvider.Factory,
    viewModelCreationExtras: () -> CreationExtras,
    handleNavigationEvents: Boolean,
    discardSavedState: Boolean,
    isStateSavingAllowed: () -> Boolean,
    factory: (ComponentContext) -> T,
): T =
    retainedComponent(
        cast = cast,
        key = key,
        viewModelFactory = viewModelFactory,
        viewModelCreationExtras = viewModelCreationExtras,
        navigationEventDispatcher = if (handleNavigationEvents) requireActivity().navigationEventDispatcher else null,
        discardSavedState = discardSavedState,
        isStateSavingAllowed = isStateSavingAllowed,
        isChangingConfigurations = { activity?.isChangingConfigurations ?: false },
        factory = factory,
    )

internal fun <T : Any, O> O.retainedComponent(
    cast: (Any) -> T,
    key: String,
    viewModelFactory: () -> ViewModelProvider.Factory,
    viewModelCreationExtras: () -> CreationExtras,
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

    val discardRetainedInstance = stateKeeper.consume(key = KEY_STATE_MARKER, strategy = Boolean.serializer()) == null
    stateKeeper.register(key = KEY_STATE_MARKER, strategy = Boolean.serializer()) { true }

    val retainedComponentHolders = viewModelStore.getOrCreate("decompose.RetainedComponentHolders", ::RetainedComponentHolders)

    if (discardRetainedInstance) {
        retainedComponentHolders.map.remove(key = key)?.also { holder ->
            holder.lifecycle.moveToDestroyed()
            holder.onDestroy()
        }
    }

    val holder =
        retainedComponentHolders.map.getOrPut(key = key) {
            RetainedComponentHolder(
                savedState = stateKeeper.consume(key = key, strategy = SerializableContainer.serializer()),
                viewModelFactory = viewModelFactory,
                viewModelCreationExtras = { baseViewModelCreationExtras() + viewModelCreationExtras() },
                factory = factory,
            )
        }

    holder.viewModelCreationExtras = { baseViewModelCreationExtras() + viewModelCreationExtras() }

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

    return cast(holder.component)
}

private const val KEY_STATE_MARKER = "RetainedComponent_state_marker"

private class RetainedComponentHolders : ViewModel() {
    val map: MutableMap<Any, RetainedComponentHolder<*>> = HashMap()

    override fun onCleared() {
        map.values.forEach { it.onDestroy() }
    }
}

private class RetainedComponentHolder<out T : Any>(
    savedState: SerializableContainer?,
    viewModelFactory: () -> ViewModelProvider.Factory,
    var viewModelCreationExtras: () -> CreationExtras,
    factory: (ComponentContext) -> T,
) : LifecycleOwner {
    override val lifecycle: LifecycleRegistry = LifecycleRegistry(this)

    val stateKeeper: StateKeeperDispatcher = StateKeeperDispatcher(savedState = savedState)
    private val viewModelStore = ViewModelStore()

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
            ComponentContext(
                lifecycle = lifecycle,
                stateKeeper = stateKeeper,
                viewModelStoreHost = ViewModelStoreHost(
                    store = viewModelStore,
                    factory = viewModelFactory,
                    extras = { viewModelCreationExtras() },
                ),
                navigationEventDispatcher = navigationEventDispatcher,
            )
        )

    init {
        navigationEventDispatcher.addInput(navigationEventInput)
    }

    fun onDestroy() {
        viewModelStore.clear()
        navigationEventDispatcher.dispose()
    }
}
