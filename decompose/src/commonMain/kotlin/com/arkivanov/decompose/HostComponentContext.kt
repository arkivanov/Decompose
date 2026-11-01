package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleRegistry
import androidx.lifecycle.ViewModelStore
import androidx.navigationevent.DirectNavigationEventInput
import androidx.navigationevent.NavigationEventDispatcher
import androidx.savedstate.SavedState
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.LifecycleRegistryOwner
import com.arkivanov.decompose.lifecycle.moveToDestroyed
import com.arkivanov.decompose.navigationevent.addDirectInput
import com.arkivanov.decompose.statekeeper.SavedStateRegistryControllerOwner
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher

/**
 * An implementation of [ComponentContext] that (unlike [DefaultComponentContext]) exposes manipulatable
 * [LifecycleRegistry], [StateKeeperDispatcher], [ViewModelStore], and [NavigationEventDispatcher].
 *
 * Primarily designed for using in tests and Compose previews.
 *
 * @param lifecycleState initial [Lifecycle.State] of the [lifecycle]. Default value is [Lifecycle.State.INITIALIZED].
 * You can also use one of the following extension functions to move the [lifecycle] to a required state:
 * - [LifecycleRegistryOwner.created][com.arkivanov.decompose.lifecycle.created]
 * - [LifecycleRegistryOwner.started][com.arkivanov.decompose.lifecycle.started]
 * - [LifecycleRegistryOwner.resumed][com.arkivanov.decompose.lifecycle.resumed]
 * @param savedState an optional previously saved state for restoration. Default value is `null`.
 * You can save the state using [StateKeeperDispatcher.save] when needed.
 * @param viewModelStore a [ViewModelStore] to be used by this [HostComponentContext],
 * creates a new instance if not provided. You can pass an existing instance of [ViewModelStore]
 * to retain `ViewModels` across instances of [HostComponentContext].
 * @param navigationEventDispatcher a [NavigationEventDispatcher] to be used by this [HostComponentContext],
 * creates a new instance if not provided.
 */
@ExperimentalDecomposeApi
class HostComponentContext(
    lifecycleState: Lifecycle.State = Lifecycle.State.INITIALIZED,
    savedState: SavedState? = null,
    override val viewModelStore: ViewModelStore = ViewModelStore(),
    override val navigationEventDispatcher: NavigationEventDispatcher = NavigationEventDispatcher()
) : ComponentContext, LifecycleRegistryOwner, SavedStateRegistryControllerOwner {

    /**
     * Convenience constructor for calling from Swift.
     */
    constructor() : this(
        lifecycleState = Lifecycle.State.INITIALIZED,
        savedState = null,
        viewModelStore = ViewModelStore(),
    )

    /**
     * Convenience constructor for calling from Swift.
     */
    constructor(savedState: SavedState?) : this(
        lifecycleState = Lifecycle.State.INITIALIZED,
        savedState = savedState,
        viewModelStore = ViewModelStore(),
    )

    override val lifecycle: LifecycleRegistry = LifecycleRegistry(lifecycleState)

    override val savedStateRegistryController: SavedStateRegistryController = SavedStateRegistryController.create(this)
    override val savedStateRegistry: SavedStateRegistry by savedStateRegistryController::savedStateRegistry

    override val componentContextFactory: ComponentContextFactory<ComponentContext> = ComponentContextFactory(::ComponentContext)

    val navigationEventInput: DirectNavigationEventInput = navigationEventDispatcher.addDirectInput()
    private var isDestroyed = false

    init {
        savedStateRegistryController.performAttach()
        savedStateRegistryController.performRestore(savedState)
    }

    /**
     * Destroys this [HostComponentContext] including its [lifecycle], [viewModelStore] and [navigationEventDispatcher].
     */
    fun destroy() {
        if (isDestroyed) {
            return
        }

        isDestroyed = true
        lifecycle.moveToDestroyed()
        viewModelStore.clear()
        navigationEventDispatcher.dispose()
    }
}
