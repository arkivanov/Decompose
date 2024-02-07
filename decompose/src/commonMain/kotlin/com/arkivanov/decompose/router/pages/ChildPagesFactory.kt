package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.consumeRequired
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable

/**
 * Initializes and manages a list of components with one selected (active) component.
 * The list can be empty.
 *
 * @param source a source of navigation events.
 * @param serializer an optional [KSerializer] to be used for serializing and deserializing configurations.
 * If `null` then the navigation state will not be preserved.
 * @param initialPages an initial state of Child Pages that should be set
 * if there is no saved state. See [Pages] for more information.
 * @param key a key of the list, must be unique if there are multiple Child Pages used in
 * the same component.
 * @param pageStatus a function that returns a [Status] of a page at a given index.
 * By default, the currently selected page is [Status.RESUMED], its two neighbours
 * are [Status.CREATED], and the rest are [Status.DESTROYED]. You can implement your own
 * logic, for example with circular behaviour.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildPages].
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> ComponentContext.childPages(
    source: NavigationSource<PagesNavigation.Event<C>>,
    serializer: KSerializer<C>?,
    initialPages: () -> Pages<C> = { Pages() },
    key: String = "DefaultChildPages",
    pageStatus: (index: Int, Pages<C>) -> Status = ::getDefaultPageStatus,
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildPages<C, T>> =
    childPages(
        source = source,
        savePages = { pages ->
            if (serializer != null) {
                SerializableContainer(
                    value = SerializablePages(items = pages.items, selectedIndex = pages.selectedIndex),
                    strategy = SerializablePages.serializer(serializer),
                )
            } else {
                null
            }
        },
        restorePages = { container ->
            if (serializer != null) {
                val pages = container.consumeRequired(strategy = SerializablePages.serializer(serializer))
                Pages(
                    items = pages.items,
                    selectedIndex = pages.selectedIndex,
                )
            } else {
                null
            }
        },
        initialPages = initialPages,
        key = key,
        pageStatus = pageStatus,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

@Serializable
private class SerializablePages<out C : Any>(
    val items: List<C>,
    val selectedIndex: Int,
)

/**
 * Initializes and manages a list of components with one selected (active) component.
 * The list can be empty.
 *
 * @param source a source of navigation events.
 * @param initialPages an initial state of Child Pages that should be set
 * if there is no saved state. See [Pages] for more information.
 * @param savePages a function that saves the provided [Pages] state into [SerializableContainer].
 * The navigation state is not saved if `null` is returned.
 * @param restorePages a function that restores the [Pages] state from the provided [SerializableContainer].
 * If `null` is returned then [initialPages] is used instead.
 * The restored [Pages] state must have the same amount of configurations and in the same order.
 * @param key a key of the list, must be unique if there are multiple Child Pages used in
 * the same component.
 * @param pageStatus a function that returns a [Status] of a page at a given index.
 * By default, the currently selected page is [Status.RESUMED], its two neighbours
 * are [Status.CREATED], and the rest are [Status.DESTROYED]. You can implement your own
 * logic, for example with circular behaviour.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildPages].
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> ComponentContext.childPages(
    source: NavigationSource<PagesNavigation.Event<C>>,
    initialPages: () -> Pages<C>,
    savePages: (Pages<C>) -> SerializableContainer?,
    restorePages: (SerializableContainer) -> Pages<C>?,
    key: String = "DefaultChildPages",
    pageStatus: (index: Int, Pages<C>) -> Status = ::getDefaultPageStatus,
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildPages<C, T>> =
    children(
        source = source,
        key = key,
        initialState = {
            PagesNavState(
                pages = initialPages(),
                pageStatus = pageStatus,
            )
        },
        saveState = { savePages(it.pages) },
        restoreState = { container ->
            PagesNavState(
                pages = restorePages(container) ?: initialPages(),
                pageStatus = pageStatus,
            )
        },
        navTransformer = { state, event ->
            PagesNavState(
                pages = event.transformer(state.pages),
                pageStatus = pageStatus,
            )
        },
        stateMapper = { state, children ->
            ChildPages(
                items = children,
                selectedIndex = state.pages.selectedIndex,
            )
        },
        onEventComplete = { event, newState, oldState ->
            event.onComplete(newState.pages, oldState.pages)
        },
        backTransformer = { state ->
            val selectedIndex = state.pages.selectedIndex
            if (handleBackButton && state.pages.items.isNotEmpty() && (selectedIndex > 0)) {
                { state.copy(pages = state.pages.copy(selectedIndex = selectedIndex - 1)) }
            } else {
                null
            }
        },
        childFactory = childFactory,
    )

@PublishedApi
internal fun getDefaultPageStatus(index: Int, pages: Pages<*>): Status =
    when (index) {
        pages.selectedIndex -> Status.RESUMED
        in (pages.selectedIndex - 1)..(pages.selectedIndex + 1) -> Status.CREATED
        else -> Status.DESTROYED
    }

private data class PagesNavState<out C : Any>(
    val pages: Pages<C>,
    private val pageStatus: (index: Int, Pages<C>) -> Status,
) : NavState<C> {
    override val children: List<ChildNavState<C>> =
        List(pages.items.size) { index ->
            SimpleChildNavState(
                configuration = pages.items[index],
                status = pageStatus(index, pages),
            )
        }
}

@Serializable
private class PagesSavedNavState(
    val configurations: List<SerializableContainer>,
    val selectedIndex: Int,
)
