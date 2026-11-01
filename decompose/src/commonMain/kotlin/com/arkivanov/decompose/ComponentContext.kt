package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import androidx.lifecycle.ViewModelStore
import androidx.navigationevent.NavigationEventDispatcher
import androidx.savedstate.SavedStateRegistry

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
    savedStateRegistry: SavedStateRegistry,
    viewModelStore: ViewModelStore,
    navigationEventDispatcher: NavigationEventDispatcher,
): ComponentContext =
    DefaultComponentContext(
        lifecycle = lifecycle,
        savedStateRegistry = savedStateRegistry,
        viewModelStore = viewModelStore,
        navigationEventDispatcher = navigationEventDispatcher,
    )

private class DefaultComponentContext(
    override val lifecycle: Lifecycle,
    override val savedStateRegistry: SavedStateRegistry,
    override val viewModelStore: ViewModelStore,
    override val navigationEventDispatcher: NavigationEventDispatcher,
) : ComponentContext {

    override val componentContextFactory: ComponentContextFactory<ComponentContext> = ComponentContextFactory(::DefaultComponentContext)
}
