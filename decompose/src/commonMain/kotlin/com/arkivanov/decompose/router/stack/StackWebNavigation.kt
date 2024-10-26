package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.router.webhistory.WebNavigation.HistoryItem
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import kotlinx.serialization.KSerializer

/**
 * Creates and returns an implementation of [WebNavigation] attached
 * to the provided [navigator] and [stack]. The navigation observes stack
 * changes and manipulates the browser history to match the state. It also
 * observes the browser history changes and navigates the stack as needed.
 *
 * When [enableHistory] parameter is `true`, the browser history follows
 * the entire stack, taking the back stack into account. E.g. the navigation
 * pushes an entry to the browser history when a child is pushed to the stack,
 * pops an entry from the browser history when a child is popped from the stack,
 * replaces the current entry of the browser history when the active child of
 * the stack is changed. Multiple entries can be pushed/popped to/from the
 * browser history at the same time if required to follow the stack.
 *
 * When [enableHistory] parameter is `false`, the browser history only takes
 * into account the currently active child of the stack. Multiple entries can
 * still be pushed/popped to/from the browser history at the same time if
 * required to follow the nested navigation. This mode can be useful for bottom
 * tab navigation.
 *
 * @param navigator a [StackNavigator] that should be used for navigation when
 * the user presses the browser back and forward buttons.
 * @param stack an observable [ChildStack] that should be bound to the browser
 * navigation history.
 * @param serializer a [KSerializer] of configurations [C].
 * @param enableHistory a flag that enabled or disables the back stack history.
 * When `true`, the browser navigation history follows the entire stack.
 * When `false`, the browser navigation history follows only the currently
 * active child (i.e. the back stack will not be taken into account), can be useful
 * for bottom tab navigation. Default value is `true`.
 * @param pathMapper an optional function that returns a part of the URL path for
 * the provided child, or `null` (or empty string) if the path shouldn't be affected.
 * The resulting URL path is constructed by concatenating all URL parts from every
 * parent and child navigation, top to bottom. Default return value is `null`.
 * @param parametersMapper an optional function that returns a [Map] containing all
 * required URL parameters for the provided child, or `null` (or empty Map) if
 * parameters are not required. The resulting URL parameters string is constructed by
 * merging all URL parameters from every parent and child navigation. Default return
 * value is `null`.
 * @param onBeforeNavigate an optional callback that can be used to allow (by
 * returning `true`) or deny (by returning `false`) the browser-initiated navigation.
 * Can be used e.g. to display an alert dialog before closing a screen. Returns `true`
 * by default.
 * @param childSelector an optional function that selects and returns a child
 * [WebNavigationOwner] for the provided child.
 */
@ExperimentalDecomposeApi
fun <C : Any, T : Any> childStackWebNavigation(
    navigator: StackNavigator<C>,
    stack: Value<ChildStack<C, T>>,
    serializer: KSerializer<C>,
    enableHistory: Boolean = true,
    pathMapper: (Child.Created<C, T>) -> String? = { null },
    parametersMapper: (Child.Created<C, T>) -> Map<String, String>? = { null },
    onBeforeNavigate: () -> Boolean = { true },
    childSelector: (Child.Created<C, T>) -> WebNavigationOwner? = { null },
): WebNavigation<*> =
    StackWebNavigation(
        navigator = navigator,
        stack = stack,
        serializer = serializer,
        enableHistory = enableHistory,
        pathMapper = pathMapper,
        parametersMapper = parametersMapper,
        onBeforeNavigate = onBeforeNavigate,
        childSelector = childSelector,
    )

private class StackWebNavigation<C : Any, T : Any>(
    private val navigator: StackNavigator<C>,
    stack: Value<ChildStack<C, T>>,
    override val serializer: KSerializer<C>,
    private val enableHistory: Boolean,
    private val pathMapper: (Child.Created<C, T>) -> String?,
    private val parametersMapper: (Child.Created<C, T>) -> Map<String, String>?,
    private val onBeforeNavigate: () -> Boolean,
    private val childSelector: (Child.Created<C, T>) -> WebNavigationOwner?,
) : WebNavigation<C> {

    override val history: Value<List<HistoryItem<C>>> = stack.map { it.toHistory() }

    private fun ChildStack<C, T>.toHistory(): List<HistoryItem<C>> =
        (if (enableHistory) items else items.takeLast(1)).map { child ->
            HistoryItem(
                path = pathMapper(child) ?: "",
                parameters = parametersMapper(child) ?: emptyMap(),
                key = child.configuration,
                child = childSelector(child),
            )
        }

    override fun onBeforeNavigate(): Boolean =
        onBeforeNavigate.invoke()

    override fun navigate(history: List<C>) {
        navigator.navigate { history }
    }
}
