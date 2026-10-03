package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.JsonString
import com.arkivanov.decompose.decodeSavedState
import com.arkivanov.decompose.saveState
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
 * @param version an optional application/build version,
 * used to discard the saved navigation state on version mismatch to prevent crashes
 * @param block a function that accepts a [StateKeeper] and an optional deep
 * link string and creates and returns a root [WebNavigationOwner].
 */
@ExperimentalDecomposeApi
fun <T : WebNavigationOwner> withWebHistory(
    version: String? = null,
    block: (StateKeeper, deepLink: String?) -> T,
): T {
    val savedUrl = sessionStorage[KEY_SAVED_URL]
    val isNewUrl = window.location.href != savedUrl
    val savedState = sessionStorage[KEY_SAVED_STATE]?.takeUnless { isNewUrl }?.let(::JsonString)?.decodeSavedState(version = version)
    val stateKeeper = StateKeeperDispatcher(savedState = savedState)

    window.onbeforeunload =
        {
            sessionStorage[KEY_SAVED_STATE] = stateKeeper.saveState(version = version)
            sessionStorage[KEY_SAVED_URL] = window.location.href
            null
        }

    val root = block(stateKeeper, window.location.href.takeIf { isNewUrl || (savedState == null) })
    enableWebHistory(root.webNavigation, DefaultBrowserHistory(version = version))

    return root
}

private const val KEY_SAVED_STATE = "decompose_saved_state"
private const val KEY_SAVED_URL = "decompose_saved_url"
