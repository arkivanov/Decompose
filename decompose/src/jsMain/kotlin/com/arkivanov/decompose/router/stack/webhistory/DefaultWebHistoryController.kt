package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.findFirstDifferentIndex
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackRouter
import com.arkivanov.decompose.router.stack.navigate
import com.arkivanov.decompose.router.startsWith
import com.arkivanov.decompose.router.subscribe
import org.w3c.dom.PopStateEvent

@ExperimentalDecomposeApi
class DefaultWebHistoryController internal constructor(
    private val window: Window,
) : WebHistoryController {

    @Suppress("unused") // Public API
    constructor() : this(WindowImpl())

    override fun <C : Any> attach(
        router: StackRouter<C, *>,
        getPath: (configuration: C) -> String,
        getConfiguration: (path: String) -> C,
    ) {
        val impl = Impl(router, window, getPath, getConfiguration)
        router.stack.subscribe(impl::onStackChanged)
        window.onPopState = impl::onPopState
    }

    private class Impl<in C : Any>(
        private val router: StackRouter<C, *>,
        private val window: Window,
        private val getPath: (C) -> String,
        private val getConfiguration: (String) -> C,
    ) {
        private var isStateObserverFirstPass = true
        private var isStateObserverEnabled = true

        fun onStackChanged(newStack: ChildStack<C, *>, oldStack: ChildStack<C, *>) {
            if (!isStateObserverEnabled) {
                return
            }

            val newConfigurationStack = newStack.configurations()
            val oldConfigurationStack = oldStack.configurations()
            val firstDifferentIndex = oldConfigurationStack.findFirstDifferentIndex(newConfigurationStack)

            when {
                // Initialize the history
                isStateObserverFirstPass -> {
                    isStateObserverFirstPass = false
                    window.history.replaceState(newConfigurationStack[0])
                    for (i in 1..newConfigurationStack.lastIndex) {
                        window.history.pushState(newConfigurationStack[i])
                    }
                }

                newConfigurationStack == oldConfigurationStack -> return

                // One or more configurations were popped from the stack
                oldConfigurationStack.startsWith(newConfigurationStack) -> { // Pop removed pages from the history
                    window.history.go(delta = newConfigurationStack.size - oldConfigurationStack.size)
                }

                // One or more configurations were pushed to the history
                newConfigurationStack.startsWith(oldConfigurationStack) -> { // Push new pages to the history
                    for (i in oldConfigurationStack.size..newConfigurationStack.lastIndex) {
                        window.history.pushState(newConfigurationStack[i])
                    }
                }

                // The active configuration was changed, and new configurations could be pushed
                firstDifferentIndex == oldConfigurationStack.lastIndex -> {
                    // Replace the current page with a new one
                    window.history.replaceState(newConfigurationStack[firstDifferentIndex])

                    // Push the rest of the pages to the history
                    for (i in (firstDifferentIndex + 1)..newConfigurationStack.lastIndex) {
                        window.history.pushState(newConfigurationStack[i])
                    }
                }

                // Some configurations were popped, and one or more configurations were pushed
                firstDifferentIndex > 0 -> {
                    window.onPopState = {
                        window.onPopState = ::onPopState

                        // Push new pages to the history
                        for (i in firstDifferentIndex..newConfigurationStack.lastIndex) {
                            window.history.pushState(newConfigurationStack[i])
                        }
                    }

                    // Pop removed pages from the history
                    window.history.go(delta = firstDifferentIndex - oldConfigurationStack.size)
                }

                // All configurations were popped, and one or more configurations were pushed
                else -> {
                    window.onPopState = {
                        window.onPopState = ::onPopState

                        // Replace the current page with a new one
                        window.history.replaceState(newConfigurationStack[firstDifferentIndex])

                        // Push the rest of the pages to the history
                        // Corner case: if there is nothing to push, old pages will remain in the history
                        for (i in (firstDifferentIndex + 1)..newConfigurationStack.lastIndex) {
                            window.history.pushState(newConfigurationStack[i])
                        }
                    }

                    // Pop removed pages from the history, except the first one
                    window.history.go(delta = -oldConfigurationStack.lastIndex)
                }
            }
        }

        fun onPopState(event: PopStateEvent) {
            val newData = event.getData() ?: return
            val newConfigurationKey = newData.last().configurationKey

            isStateObserverEnabled = false

            router.navigate { stack ->
                val indexInStack = stack.indexOfLast { it.hashCode() == newConfigurationKey }
                if (indexInStack >= 0) {
                    // History popped, pop from the Router
                    stack.take(indexInStack + 1)
                } else {
                    // History pushed, push to the Router
                    stack + newData.drop(stack.size).map { getConfiguration(it.path) }
                }
            }

            isStateObserverEnabled = true
        }

        private fun History.pushState(configuration: C) {
            val nextItem = PageItem(configurationKey = configuration.hashCode(), path = getPath(configuration))
            val newData = getCurrentData() + nextItem
            pushState(data = newData, url = nextItem.path)
        }

        private fun History.replaceState(configuration: C) {
            val newItem = PageItem(configurationKey = configuration.hashCode(), path = getPath(configuration))
            val newData = getCurrentData().dropLast(1).toTypedArray() + newItem
            replaceState(data = newData, url = newItem.path)
        }

        private fun getCurrentData(): Array<PageItem> = window.history.state?.unsafeCast<Array<PageItem>>() ?: emptyArray()

        private fun PopStateEvent.getData(): Array<PageItem>? = state?.unsafeCast<Array<PageItem>>()
    }

    private data class PageItem(
        val configurationKey: Int,
        val path: String,
    )

    internal interface Window {
        val history: History
        var onPopState: ((PopStateEvent) -> Unit)?
    }

    internal interface History {
        val state: Any?

        fun go(delta: Int)
        fun pushState(data: Any?, url: String?)
        fun replaceState(data: Any?, url: String?)
    }

    private class WindowImpl : Window {
        override val history: History = HistoryImpl()
        override var onPopState: ((PopStateEvent) -> Unit)? by kotlinx.browser.window::onpopstate
    }

    private class HistoryImpl : History {
        override val state: Any? by kotlinx.browser.window.history::state

        override fun go(delta: Int) {
            kotlinx.browser.window.history.go(delta = delta)
        }

        override fun pushState(data: Any?, url: String?) {
            kotlinx.browser.window.history.pushState(data = data, title = "", url = url)
        }

        override fun replaceState(data: Any?, url: String?) {
            kotlinx.browser.window.history.replaceState(data = data, title = "", url = url)
        }
    }
}
