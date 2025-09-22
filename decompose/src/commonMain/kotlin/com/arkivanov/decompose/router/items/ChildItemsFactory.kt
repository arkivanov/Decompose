package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.router.children.ChildController
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.items.ItemsNavigation.Event
import com.arkivanov.essenty.lifecycle.doOnDestroy
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.ListSerializer


/**
 * Initializes and manages a list of components with arbitrary lifecycle states. Typically used for lazy lists.
 *
 * **It is strongly recommended to call this method on the Main thread.**
 *
 * @param source a source of navigation events.
 * @param serializer an optional [KSerializer] for serializing and deserializing configurations.
 * If `null` then the navigation state will not be preserved.
 * @param initialItems an initial state of Child Items that should be set
 * if there is no saved state. See [Items] for more information.
 * @param key a key of the navigation, must be unique if there are multiple Child Items used in
 * the same component.
 * @param childFactory a factory function that creates new child instances.
 * @return observable [LazyChildItems].
 */
@ExperimentalDecomposeApi
fun <Ctx : GenericComponentContext<Ctx>, C : Any, T : Any> Ctx.childItems(
    source: NavigationSource<Event<C>>,
    serializer: KSerializer<C>?,
    initialItems: () -> List<C>,
    key: String = "DefaultChildItems",
    itemKey: (C) -> Any = { it },
    childFactory: (configuration: C, Ctx) -> T,
): ChildLazyItems<C, T> =
    childItems(
        source = source,
        initialItems = initialItems,
        stateSaver = serializer?.let { NavStateSaver(ListSerializer(it)) },
        key = key,
        itemKey = itemKey,
        childFactory = childFactory,
    )

/**
 * Initializes and manages a list of components with arbitrary lifecycle states. Typically used for lazy lists.
 *
 * **It is strongly recommended to call this method on the Main thread.**
 *
 * @param source a source of navigation events.
 * @param stateSaver an optional [NavStateSaver] for saving and restoring the navigation state.
 * If `null` then the navigation state will not be preserved.
 * Use [transientNavStateSaver][com.arkivanov.decompose.router.children.transientNavStateSaver]
 * to prevent the navigation state from being saved to disk and only keep it in memory (i.e., saved
 * only over configuration changes on Android).
 * @param initialItems an initial state of Child Items that should be set
 * if there is no saved state. See [Items] for more information.
 * @param key a key of the navigation, must be unique if there are multiple Child Items used in
 * the same component.
 * @param childFactory a factory function that creates new child instances.
 * @return observable [LazyChildItems].
 */
@ExperimentalDecomposeApi
fun <Ctx : GenericComponentContext<Ctx>, C : Any, T : Any> Ctx.childItems(
    source: NavigationSource<Event<C>>,
    stateSaver: NavStateSaver<List<C>>?,
    initialItems: () -> List<C>,
    key: String = "DefaultChildItems",
    itemKey: (C) -> Any = { it },
    childFactory: (configuration: C, Ctx) -> T,
): ChildLazyItems<C, T> {
    val controller =
        ItemsController(
            controller = ChildController(
                componentContext = this,
                key = key,
                childFactory = childFactory,
            ),
            itemKey = itemKey,
        )

    val cancellation =
        controller.init(
            source = source,
            initialState = initialItems,
            key = key,
            stateKeeper = stateKeeper,
            stateSaver = stateSaver,
        )

    lifecycle.doOnDestroy(cancellation::cancel)

    return controller
}
