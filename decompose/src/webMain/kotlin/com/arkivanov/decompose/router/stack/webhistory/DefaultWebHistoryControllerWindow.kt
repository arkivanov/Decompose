package com.arkivanov.decompose.router.stack.webhistory

internal expect class DefaultWebHistoryControllerWindow() : DefaultWebHistoryController.Window {

    override val history: DefaultWebHistoryController.History

    override fun setOnPopStateListener(listener: (state: String?) -> Unit)
}
