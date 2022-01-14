package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.Router
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.router.configurations
import com.arkivanov.decompose.router.findFirstDifferentIndex
import com.arkivanov.decompose.router.startsWith
import com.arkivanov.decompose.router.subscribe
import org.w3c.dom.PopStateEvent

@ExperimentalDecomposeApi
class DefaultWebHistoryController(
    private val window: Window,
) : WebHistoryController {

    constructor() : this(WindowImpl())

    override fun <C : Any> attach(
        router: Router<C, *>,
        getPath: (configuration: C) -> String,
        getConfiguration: (path: String) -> C
    ) {
        val impl = Impl(router, window, getPath, getConfiguration)
        router.state.subscribe(impl::onStateChanged)
        window.onPopState = impl::onPopState
    }

    private class Impl<in C : Any>(
        private val router: Router<C, *>,
        private val window: Window,
        private val getPath: (C) -> String,
        private val getConfiguration: (String) -> C,
    ) {
        private var isStateObserverFirstPass = true
        private var isStateObserverEnabled = true

        fun onStateChanged(newState: RouterState<C, *>, oldState: RouterState<C, *>) {
            if (!isStateObserverEnabled) {
                return
            }

            val newStack = newState.configurations()
            val oldStack = oldState.configurations()
            val firstDifferentIndex = oldStack.findFirstDifferentIndex(newStack)

            when {
                // Initialize the history
                isStateObserverFirstPass -> {
                    isStateObserverFirstPass = false
                    window.history.replaceState(newStack[0])
                    for (i in 1..newStack.lastIndex) {
                        window.history.pushState(newStack[i])
                    }
                }

                newStack == oldStack -> return

                // One or more configurations were popped from the stack
                oldStack.startsWith(newStack) -> { // Pop removed pages from the history
                    window.history.go(delta = newStack.size - oldStack.size)
                }

                // One or more configurations were pushed to the history
                newStack.startsWith(oldStack) -> { // Push new pages to the history
                    for (i in oldStack.size..newStack.lastIndex) {
                        window.history.pushState(newStack[i])
                    }
                }

                // The active configuration was changed, and new configurations could be pushed
                firstDifferentIndex == oldStack.lastIndex -> {
                    // Replace the current page with a new one
                    window.history.replaceState(newStack[firstDifferentIndex])

                    // Push the rest of the pages to the history
                    for (i in (firstDifferentIndex + 1)..newStack.lastIndex) {
                        window.history.pushState(newStack[i])
                    }
                }

                // Some configurations were popped, and one or more configurations were pushed
                firstDifferentIndex > 0 -> {
                    window.onPopState = {
                        window.onPopState = ::onPopState

                        // Push new pages to the history
                        for (i in firstDifferentIndex..newStack.lastIndex) {
                            window.history.pushState(newStack[i])
                        }
                    }

                    // Pop removed pages from the history
                    window.history.go(delta = firstDifferentIndex - oldStack.size)
                }

                // All configurations were popped, and one or more configurations were pushed
                else -> {
                    window.onPopState = {
                        window.onPopState = ::onPopState

                        // Replace the current page with a new one
                        window.history.replaceState(newStack[firstDifferentIndex])

                        // Push the rest of the pages to the history
                        // Corner case: if there is nothing to push, old pages will remain in the history
                        for (i in (firstDifferentIndex + 1)..newStack.lastIndex) {
                            window.history.pushState(newStack[i])
                        }
                    }

                    // Pop removed pages from the history, except the first one
                    window.history.go(delta = -oldStack.lastIndex)
                }
            }
        }

        fun onPopState(event: PopStateEvent) {
            val newData = event.getData() ?: return
            val stack = router.state.value.configurations()
            val newConfigurationKey = newData.configurationKey

            val indexInStack = stack.indexOfLast { it.hashCode() == newConfigurationKey }
            if (indexInStack >= 0) {
                if (indexInStack < stack.lastIndex) { // History popped, pop from the Router
                    isStateObserverEnabled = false
                    router.navigate { stack.take(indexInStack + 1) }
                    isStateObserverEnabled = true
                }
            } else { // History pushed, push to the Router
                val nextPaths = getNextPaths(currentConfiguration = stack.last(), nextData = newData)
                val nextConfigurations = nextPaths.map(getConfiguration)
                isStateObserverEnabled = false
                router.navigate { stack + nextConfigurations }
                isStateObserverEnabled = true
            }
        }

        private fun getNextPaths(currentConfiguration: C, nextData: PageData): List<String> {
            val paths = ArrayList<String>()
            val currentConfigurationKey = currentConfiguration.hashCode()
            var data: PageData? = nextData

            while ((data != null) && (data.configurationKey != currentConfigurationKey)) {
                paths += data.path
                data = data.prev
            }

            return paths.asReversed()
        }

        private fun History.pushState(configuration: C) {
            val currentData: PageData? = window.history.getData()

            val nextData =
                PageData(
                    configurationKey = configuration.hashCode(),
                    path = getPath(configuration),
                    prev = currentData,
                )

            currentData?.next = nextData

            pushState(data = nextData, url = nextData.path)
        }

        private fun History.replaceState(configuration: C) {
            val currentData: PageData? = window.history.getData()
            val prevData: PageData? = currentData?.prev
            val nextData: PageData? = currentData?.next

            val newData =
                PageData(
                    configurationKey = configuration.hashCode(),
                    path = getPath(configuration),
                    prev = prevData,
                    next = nextData,
                )

            prevData?.next = nextData
            nextData?.prev = newData

            replaceState(data = newData, url = newData.path)
        }

        private fun History.getData(): PageData? = state?.unsafeCast<PageData>()

        private fun PopStateEvent.getData(): PageData? = state?.unsafeCast<PageData>()
    }

    private data class PageData(
        val configurationKey: Int,
        val path: String,
        var prev: PageData? = null,
        var next: PageData? = null,
    )

    interface Window {
        val history: History
        var onPopState: ((PopStateEvent) -> Unit)?
    }

    interface History {
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
