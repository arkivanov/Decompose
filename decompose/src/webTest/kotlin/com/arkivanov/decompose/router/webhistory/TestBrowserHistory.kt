package com.arkivanov.decompose.router.webhistory

import kotlin.test.assertEquals

class TestBrowserHistory : BrowserHistory {

    private val pendingOperations = ArrayList<() -> Unit>()
    private var onPopStateListener: ((state: String?) -> Unit)? = null
    private val stack: MutableList<Entry> = mutableListOf(Entry())
    private var index = 0

    override val state: String? get() = stack[index].data

    override fun go(delta: Int) {
        scheduleOperation {
            index += delta
            onPopStateListener?.invoke(stack[index].data)
        }
    }

    fun navigate(delta: Int) {
        go(delta = delta)
        runPendingOperations()
    }

    override fun pushState(data: String?, url: String?) {
        while (stack.lastIndex > index) {
            stack.removeLast()
        }

        stack += Entry(data = data, url = url)
        index++
    }

    override fun replaceState(data: String?, url: String?) {
        stack[index] = Entry(data = data, url = url)
    }

    override fun setOnPopStateListener(listener: (state: String?) -> Unit) {
        onPopStateListener = listener
    }

    private fun scheduleOperation(block: () -> Unit) {
        pendingOperations += block
    }

    fun runPendingOperations() {
        while (true) {
            val operations = pendingOperations.toList().takeUnless(List<*>::isEmpty) ?: break
            pendingOperations.clear()
            operations.forEach { it() }
        }
    }

    fun assertStack(urls: List<String?>, index: Int = urls.lastIndex) {
        assertEquals(urls, stack.map(Entry::url))
        assertEquals(index, this.index)
    }

    private class Entry(
        val data: String? = null,
        val url: String? = null,
    )
}
