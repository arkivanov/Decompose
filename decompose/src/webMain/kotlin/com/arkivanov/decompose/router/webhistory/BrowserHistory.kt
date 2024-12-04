package com.arkivanov.decompose.router.webhistory

internal interface BrowserHistory {

    val state: String?

    fun go(delta: Int)
    fun pushState(data: String?, url: String?)
    fun replaceState(data: String?, url: String?)
    fun setOnPopStateListener(listener: (state: String?) -> Unit)
}
