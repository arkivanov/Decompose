package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.isNodeJs
import kotlinx.browser.document
import kotlinx.browser.sessionStorage
import kotlinx.browser.window
import kotlinx.serialization.builtins.serializer
import org.w3c.dom.PageTransitionEvent
import org.w3c.dom.PageTransitionEventInit
import org.w3c.dom.get
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull

@Suppress("TestFunctionName")
class WithWebHistorySessionStorageTest {

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
        window.onpageshow = null
        sessionStorage.clear()
        initialHref?.let { window.history.replaceState(data = null, title = "", url = it) }
    }

    @Test
    fun WHEN_state_restored_THEN_session_storage_cleared_and_not_reused() {
        if (isNodeJs()) {
            return
        }

        withWebHistory(schemaVersion = "1") { stateKeeper, _ ->
            stateKeeper.register(key = "key", strategy = String.serializer()) { "saved-value" }
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        window.dispatchEvent(document.createEvent("BeforeUnloadEvent").apply { initEvent("beforeunload", false, false) })

        var firstRestoredValue: String? = null
        var firstDeepLink: String? = "unset"
        withWebHistory(schemaVersion = "1") { stateKeeper, deepLink ->
            firstRestoredValue = stateKeeper.consume(key = "key", strategy = String.serializer())
            firstDeepLink = deepLink
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        assertEquals("saved-value", firstRestoredValue)
        assertNull(firstDeepLink)
        assertNull(sessionStorage["decompose_saved_state"])
        assertNull(sessionStorage["decompose_saved_url"])

        var secondRestoredValue: String? = "unset"
        var secondDeepLink: String? = null
        withWebHistory(schemaVersion = "1") { stateKeeper, deepLink ->
            secondRestoredValue = stateKeeper.consume(key = "key", strategy = String.serializer())
            secondDeepLink = deepLink
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        assertNull(secondRestoredValue)
        assertEquals(window.location.href, secondDeepLink)
    }

    @Test
    fun WHEN_url_changed_THEN_session_storage_cleared() {
        if (isNodeJs()) {
            return
        }

        withWebHistory(schemaVersion = "1") { stateKeeper, _ ->
            stateKeeper.register(key = "key", strategy = String.serializer()) { "saved-value" }
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        window.dispatchEvent(document.createEvent("BeforeUnloadEvent").apply { initEvent("beforeunload", false, false) })
        window.history.replaceState(data = null, title = "", url = "/other")

        withWebHistory(schemaVersion = "1") { _, _ ->
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        assertNull(sessionStorage["decompose_saved_state"])
        assertNull(sessionStorage["decompose_saved_url"])
    }

    @Test
    fun WHEN_schema_version_mismatched_THEN_session_storage_cleared() {
        if (isNodeJs()) {
            return
        }

        withWebHistory(schemaVersion = "1") { stateKeeper, _ ->
            stateKeeper.register(key = "key", strategy = String.serializer()) { "saved-value" }
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        window.dispatchEvent(document.createEvent("BeforeUnloadEvent").apply { initEvent("beforeunload", false, false) })

        var restoredValue: String? = "unset"
        var receivedDeepLink: String? = null
        withWebHistory(schemaVersion = "2") { stateKeeper, deepLink ->
            restoredValue = stateKeeper.consume(key = "key", strategy = String.serializer())
            receivedDeepLink = deepLink
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        assertNull(restoredValue)
        assertEquals(window.location.href, receivedDeepLink)
        assertNull(sessionStorage["decompose_saved_state"])
        assertNull(sessionStorage["decompose_saved_url"])
    }

    @Test
    fun WHEN_pageshow_persisted_dispatched_THEN_session_storage_cleared() {
        if (isNodeJs()) {
            return
        }

        withWebHistory(schemaVersion = "1") { stateKeeper, _ ->
            stateKeeper.register(key = "key", strategy = String.serializer()) { "saved-value" }
            TestWebNavigationOwner(TestWebNavigation(initialHistory = listOf(1)))
        }

        window.dispatchEvent(PageTransitionEvent("pagehide"))
        assertNotNull(sessionStorage["decompose_saved_state"])
        assertNotNull(sessionStorage["decompose_saved_url"])

        window.dispatchEvent(PageTransitionEvent("pageshow", PageTransitionEventInit(persisted = true)))
        assertNull(sessionStorage["decompose_saved_state"])
        assertNull(sessionStorage["decompose_saved_url"])
    }

    private class TestWebNavigationOwner(
        override val webNavigation: WebNavigation<*>,
    ) : WebNavigationOwner
}
