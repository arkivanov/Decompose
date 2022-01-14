package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.webhistory.DefaultWebHistoryController.Window
import org.w3c.dom.PopStateEvent

@OptIn(ExperimentalDecomposeApi::class)
class TestWindow : Window {

    private val pendingOperations = ArrayList<() -> Unit>()

    override var onPopState: ((PopStateEvent) -> Unit)? = null

    override val history: TestHistory =
        TestHistory(
            scheduleOperation = pendingOperations::add,
            onPopState = { onPopState?.invoke(it) }
        )

    fun runPendingOperations() {
        val operations = pendingOperations.toList()
        pendingOperations.clear()
        operations.forEach { it() }
    }
}
