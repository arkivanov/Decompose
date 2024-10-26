package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.JsonString
import com.arkivanov.decompose.decodeContainer
import com.arkivanov.decompose.encodeToJson
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
@ExperimentalDecomposeApi
fun <T : WebNavigationOwner> withWebHistory(
    block: (StateKeeper, deepLink: String?) -> T,
): T {
    val deepLink = window.location.href.takeUnless { it == sessionStorage[KEY_SAVED_URL] }

    val stateKeeper =
        StateKeeperDispatcher(
            savedState = sessionStorage[KEY_SAVED_STATE]
                ?.takeIf { deepLink == null }
                ?.let(::JsonString)
                ?.decodeContainer(),
        )

    window.onbeforeunload =
        {
            sessionStorage[KEY_SAVED_STATE] = stateKeeper.save().encodeToJson().value
            sessionStorage[KEY_SAVED_URL] = window.location.href
            null
        }

    val root = block(stateKeeper, deepLink)
    enableWebHistory(root.webNavigation, DefaultBrowserHistory)

    return root
}

private const val KEY_SAVED_STATE = "decompose_saved_state"
private const val KEY_SAVED_URL = "decompose_saved_url"
