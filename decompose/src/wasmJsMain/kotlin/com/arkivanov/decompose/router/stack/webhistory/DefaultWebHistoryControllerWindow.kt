package com.arkivanov.decompose.router.stack.webhistory

internal actual class DefaultWebHistoryControllerWindow actual constructor() : DefaultWebHistoryController.Window {

    override val history: DefaultWebHistoryController.History = HistoryImpl()

    override fun setOnPopStateListener(listener: (state: String?) -> Unit) {
        kotlinx.browser.window.onpopstate = { listener(it.state?.toString()) }
    }

    private class HistoryImpl : DefaultWebHistoryController.History {
        override val state: String?
            get() = kotlinx.browser.window.history.state?.toString()

        override fun go(delta: Int) {
            kotlinx.browser.window.history.go(delta = delta)
        }

        override fun pushState(data: String, url: String?) {
            kotlinx.browser.window.history.pushState(data = data.toJsString(), title = "", url = url)
        }

        override fun replaceState(data: String, url: String?) {
            kotlinx.browser.window.history.replaceState(data = data.toJsString(), title = "", url = url)
        }
    }
}
