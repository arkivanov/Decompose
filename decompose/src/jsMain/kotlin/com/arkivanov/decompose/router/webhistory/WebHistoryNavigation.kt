package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.JsonString
import com.arkivanov.decompose.decodeSavedState
import com.arkivanov.decompose.saveState
import com.arkivanov.decompose.statekeeper.StateKeeperDispatcherOwner
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.statekeeper.SerializableContainer
import kotlinx.browser.sessionStorage
import kotlinx.browser.window
import org.w3c.dom.get
import org.w3c.dom.set

/**
 * Enables Web browser history navigation for the root [WebNavigationOwner]
 * returned by [componentFactory] function.
 *
 * @param schemaVersion an optional navigation schema version (can be an application/build version),
 * used to discard the saved navigation state on version mismatch to prevent crashes.
 * @param createComponentContext a function that creates a new component context [Ctx].
 * @param destroyComponentContext a function that destroys the provided component context [Ctx].
 * @param componentFactory a function that accepts a component context [Ctx] and an optional deep
 * link string and creates and returns a root [WebNavigationOwner] of type [T].
 * Can be called more than once when the provided [schemaVersion] doesn't match the previously
 * saved browser history state.
 * @return an observable [Value] of the root component of type [T] created and returned by [componentFactory].
 */
@ExperimentalDecomposeApi
fun <Ctx, T : WebNavigationOwner> withWebHistory(
    schemaVersion: String?,
    createComponentContext: (savedState: SerializableContainer?) -> Ctx,
    destroyComponentContext: (Ctx) -> Unit,
    componentFactory: (Ctx, deepLink: String?) -> T,
): Value<T> where Ctx : StateKeeperDispatcherOwner {
    val savedUrl = sessionStorage[KEY_SAVED_URL]
    val isNewUrl = window.location.href != savedUrl
    val savedState = sessionStorage[KEY_SAVED_STATE]?.takeUnless { isNewUrl }?.let(::JsonString)?.decodeSavedState(version = schemaVersion)
    var componentContext = createComponentContext(savedState)

    window.onbeforeunload =
        {
            sessionStorage[KEY_SAVED_STATE] = componentContext.stateKeeper.saveState(version = schemaVersion).value
            sessionStorage[KEY_SAVED_URL] = window.location.href
            null
        }

    val browserHistory = DefaultBrowserHistory(schemaVersion = schemaVersion)
    val root = MutableValue(componentFactory(componentContext, window.location.href.takeIf { isNewUrl || (savedState == null) }))
    var cancellation: Cancellation? = null

    root.subscribe {
        cancellation?.cancel()

        cancellation =
            enableWebHistory(
                navigation = it.webNavigation,
                browserHistory = browserHistory,
                onRecreate = {
                    destroyComponentContext(componentContext)
                    componentContext = createComponentContext(null)
                    root.value = componentFactory(componentContext, window.location.href)
                },
            )
    }

    return root
}

private const val KEY_SAVED_STATE = "decompose_saved_state"
private const val KEY_SAVED_URL = "decompose_saved_url"
