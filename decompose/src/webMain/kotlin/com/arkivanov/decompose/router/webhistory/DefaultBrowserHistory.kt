package com.arkivanov.decompose.router.webhistory

internal expect class DefaultBrowserHistory(version: String?): BrowserHistory {

    override val version: String?
    override val state: String?

    override fun go(delta: Int)
    override fun pushState(data: String?, url: String?)
    override fun replaceState(data: String?, url: String?)
    override fun setOnPopStateListener(listener: (state: String?) -> Unit)
}
