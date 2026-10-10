package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.JsonString
import com.arkivanov.decompose.decodeSavedState
import com.arkivanov.decompose.saveState
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.statekeeper.StateKeeper
import com.arkivanov.essenty.statekeeper.StateKeeperDispatcher
import kotlinx.browser.sessionStorage
import kotlinx.browser.window
import org.w3c.dom.get
import org.w3c.dom.set

/**
 * Enables Web browser history navigation for the root [WebNavigationOwner]
 * returned by [block] function.
 *
 * @param block a function that accepts a [StateKeeper] and an optional deep
 * link string and creates and returns a root [WebNavigationOwner].
 */
@Deprecated(
    message = "Use withWebHistory with schemaVersion parameter",
    replaceWith = ReplaceWith("withWebHistory(schemaVersion = \"<navigation schema version>\", block)"),
)
@ExperimentalDecomposeApi
fun <T : WebNavigationOwner> withWebHistory(
    block: (StateKeeper, deepLink: String?) -> T,
): T =
    withWebHistory(schemaVersion = null, block = block).value

/**
 * Enables Web browser history navigation for the root [WebNavigationOwner]
 * returned by [block] function.
 *
 * @param schemaVersion an optional navigation schema version (can be an application/build version),
 * used to discard the saved navigation state on version mismatch to prevent crashes.
 * @param block a function that accepts a [StateKeeper] and an optional deep
 * link string and creates and returns a root [WebNavigationOwner] of type [T].
 * Can be called more than once when the provided [schemaVersion] doesn't match the previously
 * saved browser history state.
 * **Important:** the function should create a new instance of `ComponentContext` for each call and
 * destroy any previously created `Lifecycle`.
 * @return an observable [Value] of the root component of type [T] created and returned by [block].
 */
@ExperimentalDecomposeApi
fun <T : WebNavigationOwner> withWebHistory(
    schemaVersion: String?,
    block: (StateKeeper, deepLink: String?) -> T,
): Value<T> {
    val savedUrl = sessionStorage[KEY_SAVED_URL]
    val isNewUrl = window.location.href != savedUrl
    val savedState = sessionStorage[KEY_SAVED_STATE]?.takeUnless { isNewUrl }?.let(::JsonString)?.decodeSavedState(version = schemaVersion)
    var stateKeeper = StateKeeperDispatcher(savedState = savedState)

    window.onbeforeunload =
        {
            sessionStorage[KEY_SAVED_STATE] = stateKeeper.saveState(version = schemaVersion).value
            sessionStorage[KEY_SAVED_URL] = window.location.href
            null
        }

    val browserHistory = DefaultBrowserHistory(schemaVersion = schemaVersion)
    val root = MutableValue(block(stateKeeper, window.location.href.takeIf { isNewUrl || (savedState == null) }))
    var cancellation: Cancellation? = null

    root.subscribe {
        cancellation?.cancel()

        cancellation =
            enableWebHistory(
                navigation = it.webNavigation,
                browserHistory = browserHistory,
                onRecreate = {
                    stateKeeper = StateKeeperDispatcher()
                    root.value = block(stateKeeper, window.location.href)
                },
            )
    }

    return root
}

private const val KEY_SAVED_STATE = "decompose_saved_state"
private const val KEY_SAVED_URL = "decompose_saved_url"
