package com.arkivanov.decompose.router.webhistory

import kotlinx.browser.window

internal actual object DefaultBrowserHistory : BrowserHistory {

    actual override val state: String? get() = window.history.state?.unsafeCast<String>()

    actual override fun go(delta: Int) {
        window.history.go(delta = delta)
    }

    actual override fun pushState(data: String?, url: String?) {
        window.history.pushState(data = data, title = "", url = url)
    }

    actual override fun replaceState(data: String?, url: String?) {
        window.history.replaceState(data = data, title = "", url = url)
    }

    actual override fun setOnPopStateListener(listener: (state: String?) -> Unit) {
        window.onpopstate = { listener(it.state?.unsafeCast<String>()) }
    }
}
