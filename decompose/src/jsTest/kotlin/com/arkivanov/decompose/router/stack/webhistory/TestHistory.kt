package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import org.w3c.dom.PopStateEvent
import org.w3c.dom.PopStateEventInit
import kotlin.test.assertEquals

@OptIn(ExperimentalDecomposeApi::class)
class TestHistory(
    private val scheduleOperation: (() -> Unit) -> Unit,
    private val onPopState: (PopStateEvent) -> Unit,
) : DefaultWebHistoryController.History {

    private val stack: MutableList<Entry> = mutableListOf(Entry())
    private var index = 0

    override val state: Any? get() = stack[index].data

    override fun go(delta: Int) {
        scheduleOperation {
            index += delta

            onPopState(
                PopStateEvent(
                    type = "PopStateEvent",
                    eventInitDict = PopStateEventInit(state = stack[index].data)
                )
            )
        }
    }

    override fun pushState(data: Any?, url: String?) {
        while (stack.lastIndex > index) {
            stack.removeLast()
        }

        stack += Entry(data = data?.serializeAndDeserialize(), url = url)
        index++
    }

    override fun replaceState(data: Any?, url: String?) {
        stack[index] = Entry(data = data?.serializeAndDeserialize(), url = url)
    }

    fun assertStack(urls: List<String?>, index: Int = urls.lastIndex) {
        assertEquals(urls, stack.map(Entry::url))
        assertEquals(index, this.index)
    }

    private fun Any.serializeAndDeserialize(): Any = JSON.parse(JSON.stringify(this))

    class Entry(
        val data: Any? = null,
        val url: String? = null,
    )
}
