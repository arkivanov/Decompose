package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.KSerializer

/**
 * A two-way navigation controller for Web browsers that connects a navigation
 * model (e.g. `Child Stack`) with the Web browser's navigation history.
 */
@ExperimentalDecomposeApi
interface WebNavigation<T : Any> {

    /**
     * A serializer of [HistoryItem.key].
     */
    val serializer: KSerializer<T>

    /**
     * An observable list of history items, must not be empty. The last item is
     * considered active, i.e. its [HistoryItem.child] navigation controller is
     * also observed. The browser history is automatically updated (pushed,
     * popped or replaced) when the history list changes.
     */
    val history: Value<List<HistoryItem<T>>>

    /**
     * A callback that can be used to allow (by returning `true`) or deny (by
     * returning `false`) the browser-initiated navigation. Can be used e.g. to
     * display an alert dialog before closing a screen.
     */
    fun onBeforeNavigate(): Boolean

    /**
     * Manipulates the underlying navigation model when the browser navigation history
     * is changed, e.g. when the user presses the browser's back or forward button.
     *
     * @param history a list of history item keys to be applied to the underlying
     * navigation model.
     */
    fun navigate(history: List<T>)

    /**
     * Represents an item of the browser history.
     *
     * @param key a key of the item that can be serialized using
     * [WebNavigation.serializer] and later restored and passed back to
     * [WebNavigation.navigate] for navigation.
     * @param path a part of the URL path. The resulting URL path is constructed by
     * concatenating all URL parts from every parent and child navigation, top to bottom.
     * Can be empty.
     * @param parameters a [Map] containing all required URL parameters for the provided
     * item. The resulting URL parameters string is constructed by merging all URL
     * parameters from every parent and child navigation. Can be empty.
     * @param child an optional child [WebNavigationOwner].
     */
    class HistoryItem<out T>(
        val key: T,
        val path: String,
        val parameters: Map<String, String>,
        val child: WebNavigationOwner?,
    )
}
