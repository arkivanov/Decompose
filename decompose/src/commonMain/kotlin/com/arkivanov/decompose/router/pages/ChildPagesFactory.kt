package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.PARCELIZE_DEPRECATED_MESSAGE
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.router.consumeRequired
import com.arkivanov.decompose.router.toParcelableContainer
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.parcelable.consumeRequired
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlin.reflect.KClass

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
 * By default, the currently selected page is [Status.ACTIVE], its two neighbours
 * are [Status.INACTIVE], and the rest are [Status.DESTROYED]. You can implement your own
 * logic, for example with circular behaviour.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildPages].
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> ComponentContext.childPages(
    source: PagesNavigationSource<C>,
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
                SerializablePages(items = pages.items, selectedIndex = pages.selectedIndex)
                    .toParcelableContainer(strategy = SerializablePages.serializer(serializer))
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
 * @param key a key of the list, must be unique if there are multiple Child Pages used in
 * the same component.
 * @param pageStatus a function that returns a [Status] of a page at a given index.
 * By default, the currently selected page is [Status.ACTIVE], its two neighbours
 * are [Status.INACTIVE], and the rest are [Status.DESTROYED]. You can implement your own
 * logic, for example with circular behaviour.
 * @param persistent determines whether the navigation state should pre preserved or not,
 * default is `true`.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildPages].
 */
@Suppress("DeprecatedCallableAddReplaceWith", "DEPRECATION")
@Deprecated(message = PARCELIZE_DEPRECATED_MESSAGE)
@ExperimentalDecomposeApi
inline fun <reified C : Parcelable, T : Any> ComponentContext.childPages(
    source: PagesNavigationSource<C>,
    noinline initialPages: () -> Pages<C>,
    key: String = "DefaultChildPages",
    noinline pageStatus: (index: Int, Pages<C>) -> Status = ::getDefaultPageStatus,
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildPages<C, T>> =
    childPages(
        source = source,
        initialPages = initialPages,
        configurationClass = C::class,
        key = key,
        pageStatus = pageStatus,
        persistent = persistent,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

/**
 * Initializes and manages a list of components with one selected (active) component.
 * The list can be empty.
 *
 * @param source a source of navigation events.
 * @param initialPages an initial state of Child Pages that should be set
 * if there is no saved state. See [Pages] for more information.
 * @param configurationClass a [KClass] of the component configurations.
 * @param key a key of the list, must be unique if there are multiple Child Pages used in
 * the same component.
 * @param pageStatus a function that returns a [Status] of a page at a given index.
 * By default, the currently selected page is [Status.ACTIVE], its two neighbours
 * are [Status.INACTIVE], and the rest are [Status.DESTROYED]. You can implement your own
 * logic, for example with circular behaviour.
 * @param persistent determines whether the navigation state should pre preserved or not,
 * default is `true`.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildPages].
 */
@Deprecated(message = PARCELIZE_DEPRECATED_MESSAGE)
@ExperimentalDecomposeApi
fun <C : Parcelable, T : Any> ComponentContext.childPages(
    source: PagesNavigationSource<C>,
    initialPages: () -> Pages<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultChildPages",
    pageStatus: (index: Int, Pages<C>) -> Status = ::getDefaultPageStatus,
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildPages<C, T>> =
    childPages(
        source = source,
        initialPages = initialPages,
        savePages = { pages ->
            if (persistent) {
                ParcelableContainer(
                    PagesSavedNavState(
                        configurations = pages.items.map { ParcelableContainer(it) },
                        selectedIndex = pages.selectedIndex,
                    )
                )
            } else {
                null
            }
        },
        restorePages = { container ->
            val state = container.consumeRequired<PagesSavedNavState>()
            Pages(
                items = state.configurations.map { it.consumeRequired(configurationClass) },
                selectedIndex = state.selectedIndex,
            )
        },
        key = key,
        pageStatus = pageStatus,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

/**
 * Initializes and manages a list of components with one selected (active) component.
 * The list can be empty.
 *
 * @param source a source of navigation events.
 * @param initialPages an initial state of Child Pages that should be set
 * if there is no saved state. See [Pages] for more information.
 * @param savePages a function that saves the provided [Pages] state into [ParcelableContainer].
 * The navigation state is not saved if `null` is returned.
 * @param restorePages a function that restores the [Pages] state from the provided [ParcelableContainer].
 * If `null` is returned then [initialPages] is used instead.
 * The restored [Pages] state must have the same amount of configurations and in the same order.
 * @param key a key of the list, must be unique if there are multiple Child Pages used in
 * the same component.
 * @param pageStatus a function that returns a [Status] of a page at a given index.
 * By default, the currently selected page is [Status.ACTIVE], its two neighbours
 * are [Status.INACTIVE], and the rest are [Status.DESTROYED]. You can implement your own
 * logic, for example with circular behaviour.
 * @param handleBackButton determines whether the previous component should be automatically
 * selected on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildPages].
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> ComponentContext.childPages(
    source: PagesNavigationSource<C>,
    initialPages: () -> Pages<C>,
    savePages: (Pages<C>) -> ParcelableContainer?,
    restorePages: (ParcelableContainer) -> Pages<C>?,
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
        pages.selectedIndex -> Status.ACTIVE
        in (pages.selectedIndex - 1)..(pages.selectedIndex + 1) -> Status.INACTIVE
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

@Parcelize
private class PagesSavedNavState(
    val configurations: List<ParcelableContainer>,
    val selectedIndex: Int,
) : Parcelable
