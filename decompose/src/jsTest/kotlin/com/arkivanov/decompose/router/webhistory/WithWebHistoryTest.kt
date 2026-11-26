package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.isNodeJs
import kotlinx.browser.document
import kotlinx.browser.sessionStorage
import kotlinx.browser.window
import kotlinx.serialization.builtins.serializer
import org.w3c.dom.PageTransitionEvent
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

@Suppress("TestFunctionName")
class WithWebHistoryTest {

    private var initialHref: String? = null

    @BeforeTest
    fun before() {
        if (isNodeJs()) {
            return
        }

        initialHref = window.location.href
        sessionStorage.clear()
    }

    @AfterTest
    fun after() {
        if (isNodeJs()) {
            return
        }

        window.onbeforeunload = null
        window.onpagehide = null
        sessionStorage.clear()
        initialHref?.let { window.history.replaceState(data = null, title = "", url = it) }
    }

    @Test
    fun WHEN_beforeunload_dispatched_THEN_state_restored() {
        if (isNodeJs()) {
            return
        }

        withWebHistory(schemaVersion = "1") { stateKeeper, _ ->
            stateKeeper.register(key = "key", strategy = String.serializer()) { "saved-value" }
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        window.dispatchEvent(document.createEvent("BeforeUnloadEvent").apply { initEvent("beforeunload", false, false) })

        var restoredValue: String? = null
        var receivedDeepLink: String? = "unset"
        withWebHistory(schemaVersion = "1") { stateKeeper, deepLink ->
            restoredValue = stateKeeper.consume(key = "key", strategy = String.serializer())
            receivedDeepLink = deepLink
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        assertEquals("saved-value", restoredValue)
        assertNull(receivedDeepLink)
    }

    @Test
    fun WHEN_pagehide_dispatched_THEN_state_restored() {
        if (isNodeJs()) {
            return
        }

        withWebHistory(schemaVersion = "1") { stateKeeper, _ ->
            stateKeeper.register(key = "key", strategy = String.serializer()) { "saved-value" }
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        window.dispatchEvent(PageTransitionEvent("pagehide"))

        var restoredValue: String? = null
        var receivedDeepLink: String? = "unset"
        withWebHistory(schemaVersion = "1") { stateKeeper, deepLink ->
            restoredValue = stateKeeper.consume(key = "key", strategy = String.serializer())
            receivedDeepLink = deepLink
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        assertEquals("saved-value", restoredValue)
        assertNull(receivedDeepLink)
    }

    @Test
    fun WHEN_pagehide_dispatched_and_url_changed_THEN_state_not_restored() {
        if (isNodeJs()) {
            return
        }

        withWebHistory(schemaVersion = "1") { stateKeeper, _ ->
            stateKeeper.register(key = "key", strategy = String.serializer()) { "saved-value" }
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        window.dispatchEvent(PageTransitionEvent("pagehide"))
        window.history.replaceState(data = null, title = "", url = "/other")
        val newHref = window.location.href

        var restoredValue: String? = "unset"
        var receivedDeepLink: String? = null
        withWebHistory(schemaVersion = "1") { stateKeeper, deepLink ->
            restoredValue = stateKeeper.consume(key = "key", strategy = String.serializer())
            receivedDeepLink = deepLink
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        assertNull(restoredValue)
        assertEquals(newHref, receivedDeepLink)
    }

    private class TestWebNavigationOwner(
        override val webNavigation: WebNavigation<*>,
    ) : WebNavigationOwner
}
