package com.arkivanov.decompose.router.children

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStore
import androidx.navigationevent.NavigationEventDispatcher
import androidx.savedstate.SavedState
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.SavedStateRegistryOwner
import com.arkivanov.decompose.ComponentContextFactory
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.mergedLifecycle
import com.arkivanov.decompose.navigationevent.childNavigationEventDispatcher
import com.arkivanov.decompose.statekeeper.SavedStateRegistryControllerOwner

internal class DefaultChildItemFactory<out Ctx : Any, C : Any, out T : Any>(
    private val contextFactory: ComponentContextFactory<Ctx>,
    private val lifecycle: Lifecycle,
    private val navigationEventDispatcher: NavigationEventDispatcher,
    private val childFactory: (configuration: C, Ctx) -> T,
) : ChildItemFactory<C, T> {

    override fun invoke(
        configuration: C,
        key: String,
        savedState: SavedState?,
        viewModelStore: ViewModelStore?,
    ): ChildItem.Created<C, T> {
        val componentLifecycleRegistry = LifecycleRegistry()

        val owner =
            object : LifecycleOwner, SavedStateRegistryOwner, SavedStateRegistryControllerOwner {
                override val lifecycle: Lifecycle = mergedLifecycle(this@DefaultChildItemFactory.lifecycle, componentLifecycleRegistry)
                override val savedStateRegistryController: SavedStateRegistryController = SavedStateRegistryController.create(this)
                override val savedStateRegistry: SavedStateRegistry by savedStateRegistryController::savedStateRegistry
            }

        owner.savedStateRegistryController.performAttach()
        owner.savedStateRegistryController.performRestore(savedState)

        val viewModelStore = viewModelStore ?: ViewModelStore()
        val navigationEventDispatcher = navigationEventDispatcher.childNavigationEventDispatcher()

        val component =
            childFactory(
                configuration,
                contextFactory(
                    lifecycle = owner.lifecycle,
                    savedStateRegistry = owner.savedStateRegistry,
                    viewModelStore = viewModelStore,
                    navigationEventDispatcher = navigationEventDispatcher.dispatcher,
                )
            )

        return ChildItem.Created(
            configuration = configuration,
            key = key,
            instance = component,
            lifecycleRegistry = componentLifecycleRegistry,
            savedStateRegistryController = owner.savedStateRegistryController,
            viewModelStore = viewModelStore,
            navigationEventDispatcher = navigationEventDispatcher,
        )
    }
}
