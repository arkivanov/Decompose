package com.arkivanov.decompose

import androidx.lifecycle.HasDefaultViewModelProviderFactory
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry
import androidx.lifecycle.SAVED_STATE_REGISTRY_OWNER_KEY
import androidx.lifecycle.VIEW_MODEL_STORE_OWNER_KEY
import androidx.lifecycle.ViewModelStoreOwner
import androidx.lifecycle.enableSavedStateHandles
import androidx.lifecycle.viewmodel.CreationExtras
import androidx.lifecycle.viewmodel.MutableCreationExtras
import androidx.navigationevent.NavigationEventDispatcher
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.SavedStateRegistryOwner
import androidx.savedstate.savedState
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.attach
import com.arkivanov.decompose.savedstate.SavedStateSerializer
import com.arkivanov.decompose.viewmodel.ViewModelStoreHost
import com.arkivanov.essenty.statekeeper.ExperimentalStateKeeperApi
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperOwner
import com.arkivanov.essenty.statekeeper.saveable

/**
 * A default component context interface provided by Decompose.
 * Should be passed to component classes via their constructors to
 * enable features like lifecycle handling, state preservation, navigation,
 * etc.
 *
 * It is also possible to define your own interface with additional
 * properties or methods, and use that instead of this one.
 */
interface ComponentContext : GenericComponentContext<ComponentContext>

/**
 * Creates a new instance of the [ComponentContext] interface with the provided parameters.
 *
 * For tests and Compose previews it's recommended to use [HostComponentContext] instead.
 */
fun ComponentContext(
    lifecycle: Lifecycle,
    stateKeeper: StateKeeper,
    viewModelStoreHost: ViewModelStoreHost,
    navigationEventDispatcher: NavigationEventDispatcher,
): ComponentContext =
    DefaultComponentContext(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper,
        viewModelStoreHost = viewModelStoreHost,
        navigationEventDispatcher = navigationEventDispatcher,
    )

private class DefaultComponentContext(
    override val lifecycle: Lifecycle,
    override val stateKeeper: StateKeeper,
    private val viewModelStoreHost: ViewModelStoreHost,
    override val navigationEventDispatcher: NavigationEventDispatcher,
) : ComponentContext,
    ViewModelStoreOwner by viewModelStoreHost,
    HasDefaultViewModelProviderFactory by viewModelStoreHost {

    override val savedStateRegistry: SavedStateRegistry by savedStateRegistry()
    override val defaultViewModelCreationExtras: CreationExtras get() = creationExtras(viewModelStoreHost.defaultViewModelCreationExtras)
    override val componentContextFactory: ComponentContextFactory<ComponentContext> = ComponentContextFactory(::DefaultComponentContext)
}

internal fun <T> T.creationExtras(initial: CreationExtras): CreationExtras where T : SavedStateRegistryOwner, T : ViewModelStoreOwner =
    MutableCreationExtras(initial).also { extras ->
        extras[SAVED_STATE_REGISTRY_OWNER_KEY] = this
        extras[VIEW_MODEL_STORE_OWNER_KEY] = this
    }

internal fun <T> T.savedStateRegistry(): Lazy<SavedStateRegistry> where T : LifecycleOwner, T : StateKeeperOwner, T : ViewModelStoreOwner =
    lazy {
        @OptIn(ExperimentalStateKeeperApi::class)
        val owner by saveable(
            serializer = SavedStateSerializer,
            state = { savedState().also(it.controller::performSave) },
            key = "decompose.SavedStateRegistry",
            init = { savedState ->
                object : LifecycleOwner, ViewModelStoreOwner by this, SavedStateRegistryOwner {
                    override val lifecycle: LifecycleRegistry = LifecycleRegistry()
                    val controller: SavedStateRegistryController = SavedStateRegistryController.create(this)
                    override val savedStateRegistry: SavedStateRegistry by controller::savedStateRegistry
                }.apply {
                    controller.performAttach()
                    controller.performRestore(savedState)
                    enableSavedStateHandles()
                    this@savedStateRegistry.lifecycle.attach(lifecycle)
                }
            },
        )

        owner.savedStateRegistry
    }
