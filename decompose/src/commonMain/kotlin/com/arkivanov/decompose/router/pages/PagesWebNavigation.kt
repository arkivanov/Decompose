package com.arkivanov.decompose.router.pages

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import kotlinx.serialization.KSerializer

/**
 * Creates and returns an implementation of [WebNavigation] attached
 * to the provided [navigator] and [pages]. The navigation observes page
 * changes and manipulates the browser history to match the state. It also
 * observes the browser history changes and navigates the pages as needed.
 *
 * The navigation only takes into account the currently selected page, replacing
 * the current entry of the browser history when the selected page changes.
 * Multiple entries can still be pushed/popped to/from the browser history at the
 * same time if required to follow the nested navigation.
 *
 * @param navigator a [PagesNavigator] that should be used for navigation when
 * the user presses the browser back and forward buttons.
 * @param pages an observable [ChildPages] that should be bound to the browser
 * navigation history.
 * @param serializer a [KSerializer] of configurations [C].
 * @param pathMapper an optional function that returns a part of the URL path for
 * the provided [ChildPages], or `null` (or empty string) if the path shouldn't be
 * affected. The resulting URL path is constructed by concatenating all URL parts from
 * every parent and child navigation, top to bottom. Default return value is `null`.
 * @param parametersMapper an optional function that returns a [Map] containing all
 * required URL parameters for the provided [ChildPages], or `null` (or empty Map)
 * if parameters are not required. The resulting URL parameters string is constructed
 * by merging all URL parameters from every parent and child navigation. Default
 * return value is `null`.
 * @param onBeforeNavigate an optional callback that can be used to allow (by
 * returning `true`) or deny (by returning `false`) the browser-initiated navigation.
 * Can be used e.g. to display an alert dialog before closing a screen. Returns `true`
 * by default.
 * @param childSelector an optional function that selects and returns a child
 * [WebNavigationOwner] for the provided child.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> childPagesWebNavigation(
    navigator: PagesNavigator<C>,
    pages: Value<ChildPages<C, T>>,
    serializer: KSerializer<C>,
    pathMapper: (ChildPages<C, T>) -> String? = { null },
    parametersMapper: (ChildPages<C, T>) -> Map<String, String>? = { null },
    onBeforeNavigate: () -> Boolean = { true },
    childSelector: (Child.Created<C, T>) -> WebNavigationOwner? = { null },
): WebNavigation<*> =
    PagesWebNavigation(
        navigator = navigator,
        pages = pages,
        serializer = serializer,
        pathMapper = pathMapper,
        parametersMapper = parametersMapper,
        onBeforeNavigate = onBeforeNavigate,
        childSelector = childSelector,
    )

private class PagesWebNavigation<C : Any, T : Any>(
    private val navigator: PagesNavigator<C>,
    pages: Value<ChildPages<C, T>>,
    serializer: KSerializer<C>,
    private val pathMapper: (ChildPages<C, T>) -> String?,
    private val parametersMapper: (ChildPages<C, T>) -> Map<String, String>?,
    private val onBeforeNavigate: () -> Boolean,
    private val childSelector: (Child.Created<C, T>) -> WebNavigationOwner?,
) : WebNavigation<Pages<C>> {

    override val serializer: KSerializer<Pages<C>> = Pages.serializer(serializer)

    override val history: Value<List<WebNavigation.HistoryItem<Pages<C>>>> =
        pages.map { pages ->
            listOf(
                WebNavigation.HistoryItem(
                    path = pathMapper(pages) ?: "",
                    parameters = parametersMapper(pages) ?: emptyMap(),
                    key = Pages(
                        items = pages.items.map { it.configuration },
                        selectedIndex = pages.selectedIndex,
                    ),
                    child = (pages.items.getOrNull(pages.selectedIndex) as? Child.Created)?.let(childSelector),
                )
            )
        }

    override fun onBeforeNavigate(): Boolean =
        onBeforeNavigate.invoke()

    override fun navigate(history: List<Pages<C>>) {
        navigator.navigate { history.first() }
    }
}
