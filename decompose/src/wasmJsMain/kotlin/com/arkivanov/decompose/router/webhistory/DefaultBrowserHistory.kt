package com.arkivanov.decompose.router.webhistory

import kotlinx.browser.window

internal actual object DefaultBrowserHistory : BrowserHistory {

    actual override val state: String? get() = window.history.state?.toString()

    actual override fun go(delta: Int) {
        window.history.go(delta = delta)
    }

    actual override fun pushState(data: String?, url: String?) {
        window.history.pushState(data = data?.toJsString(), title = "", url = url)
    }

    actual override fun replaceState(data: String?, url: String?) {
        window.history.replaceState(data = data?.toJsString(), title = "", url = url)
    }

    actual override fun setOnPopStateListener(listener: (state: String?) -> Unit) {
        window.onpopstate = { listener(it.state?.toString()) }
    }
}
