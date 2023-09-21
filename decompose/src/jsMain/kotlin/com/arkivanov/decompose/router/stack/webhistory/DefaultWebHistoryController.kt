package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.findFirstDifferentIndex
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigator
import com.arkivanov.decompose.router.stack.navigate
import com.arkivanov.decompose.router.startsWith
import com.arkivanov.decompose.router.subscribe
import com.arkivanov.decompose.value.Value
import org.w3c.dom.PopStateEvent

@ExperimentalDecomposeApi
class DefaultWebHistoryController internal constructor(
    private val window: Window,
) : WebHistoryController {

    @Suppress("unused") // Public API
    constructor() : this(WindowImpl())

    override val historyPaths: List<String>
        get() = window.history.getItems().map(PageItem::path)

    private fun History.getItems(): List<PageItem> =
        state?.unsafeCast<Array<PageItem>>()?.asList() ?: emptyList()

    private fun History.pushState(items: List<PageItem>) {
        pushState(data = items.toTypedArray(), url = items.last().path)
    }

    private fun History.replaceState(items: List<PageItem>) {
        replaceState(data = items.toTypedArray(), url = items.last().path)
    }

    override fun <C : Any> attach(
        navigator: StackNavigator<C>,
        stack: Value<ChildStack<C, *>>,
        getPath: (configuration: C) -> String,
        getConfiguration: (path: String) -> C,
    ) {
        val impl = Impl(navigator, stack, getPath, getConfiguration)
        impl.init()
        window.onPopState = impl::onPopState
    }

    private inner class Impl<in C : Any>(
        private val navigator: StackNavigator<C>,
        private val stack: Value<ChildStack<C, *>>,
        private val getPath: (C) -> String,
        private val getConfiguration: (String) -> C,
    ) {
        private var isStateObserverFirstPass = true
        private var isStateObserverEnabled = true

        fun init() {
            // Initialise the history if it's empty
            if (window.history.getItems().isEmpty()) {
                val configurations = stack.value.configurations()
                window.history.replaceState(configurations[0])
                for (i in 1..configurations.lastIndex) {
                    window.history.pushState(configurations[i])
                }
            }

            stack.subscribe(::onStackChanged)
        }

        private fun onStackChanged(newStack: ChildStack<C, *>, oldStack: ChildStack<C, *>) {
            if (!isStateObserverEnabled) {
                return
            }

            val newConfigurationStack = newStack.configurations()
            val oldConfigurationStack = oldStack.configurations()
            val firstDifferentIndex = oldConfigurationStack.findFirstDifferentIndex(newConfigurationStack)

            when {
                // Skip the first emission
                isStateObserverFirstPass -> isStateObserverFirstPass = false

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

            navigator.navigate { stack ->
                val indexInStack = stack.indexOfLast { it.key() == newConfigurationKey }
                if (indexInStack >= 0) {
                    // History popped, pop from the Router
                    stack.take(indexInStack + 1)
                } else {
                    // History pushed, push to the Router
                    stack + newData.drop(stack.size).map { getConfiguration(it.path) }
                }
            }

            window.history.replaceState(stack.value.configurations())

            isStateObserverEnabled = true
        }

        private fun History.pushState(configuration: C) {
            pushState(items = window.history.getItems() + PageItem(configuration = configuration))
        }

        private fun History.replaceState(configuration: C) {
            replaceState(items = window.history.getItems().dropLast(1) + PageItem(configuration = configuration))
        }

        private fun History.replaceState(configurations: List<C>) {
            replaceState(items = configurations.map(::PageItem))
        }

        private fun PageItem(configuration: C): PageItem =
            PageItem(
                configurationKey = configuration.key(),
                path = getPath(configuration),
            )

        private fun PopStateEvent.getData(): Array<PageItem>? = state?.unsafeCast<Array<PageItem>>()
    }

    private data class PageItem(
        val configurationKey: String,
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
