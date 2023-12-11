package com.arkivanov.decompose.router.stack.webhistory

class TestWindow : DefaultWebHistoryController.Window {

    private val pendingOperations = ArrayList<() -> Unit>()
    private var onPopStateListener: ((state: String?) -> Unit)? = null

    override val history: TestHistory =
        TestHistory(
            scheduleOperation = pendingOperations::add,
            onPopState = { onPopStateListener?.invoke(it) },
        )

    override fun setOnPopStateListener(listener: (state: String?) -> Unit) {
        onPopStateListener = listener
    }

    fun runPendingOperations() {
        val operations = pendingOperations.toList()
        pendingOperations.clear()
        operations.forEach { it() }
    }
}
