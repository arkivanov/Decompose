package com.arkivanov.decompose.router.stack.webhistory

import kotlin.test.assertEquals

class TestHistory(
    private val scheduleOperation: (() -> Unit) -> Unit,
    private val onPopState: (state: String?) -> Unit,
) : DefaultWebHistoryController.History {

    private val stack: MutableList<Entry> = mutableListOf(Entry())
    private var index = 0

    override val state: String? get() = stack[index].data

    override fun go(delta: Int) {
        scheduleOperation {
            index += delta
            onPopState(stack[index].data)
        }
    }

    override fun pushState(data: String, url: String?) {
        while (stack.lastIndex > index) {
            stack.removeLast()
        }

        stack += Entry(data = data, url = url)
        index++
    }

    override fun replaceState(data: String, url: String?) {
        stack[index] = Entry(data = data, url = url)
    }

    fun assertStack(urls: List<String?>, index: Int = urls.lastIndex) {
        assertEquals(urls, stack.map(Entry::url))
        assertEquals(index, this.index)
    }

    class Entry(
        val data: String? = null,
        val url: String? = null,
    )
}
