package com.arkivanov.decompose.router.stack.webhistory

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.Json
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigator
import com.arkivanov.decompose.router.stack.findFirstDifferentIndex
import com.arkivanov.decompose.router.stack.navigate
import com.arkivanov.decompose.router.stack.startsWith
import com.arkivanov.decompose.router.stack.subscribe
import com.arkivanov.decompose.router.webhistory.BrowserHistory
import com.arkivanov.decompose.router.webhistory.DefaultBrowserHistory
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer

@ExperimentalDecomposeApi
class DefaultWebHistoryController internal constructor(
    private val browserHistory: BrowserHistory,
) : WebHistoryController {

    @Suppress("unused") // Public API
    constructor() : this(DefaultBrowserHistory)

    override val historyPaths: List<String>
        get() = browserHistory.getItems().map(PageItem::path)

    private fun BrowserHistory.getItems(): List<PageItem> =
        state?.let(::deserializeItems) ?: emptyList()

    private fun BrowserHistory.pushState(items: List<PageItem>) {
        pushState(data = serializeItems(items), url = items.last().path)
    }

    private fun BrowserHistory.replaceState(items: List<PageItem>) {
        replaceState(data = serializeItems(items), url = items.last().path)
    }

    private fun serializeItems(items: List<PageItem>): String =
        Json.encodeToString(serializer = PageItem.listSerializer, value = items)

    private fun deserializeItems(json: String): List<PageItem> =
        Json.decodeFromString(deserializer = PageItem.listSerializer, string = json)

    override fun <C : Any> attach(
        navigator: StackNavigator<C>,
        stack: Value<ChildStack<C, *>>,
        serializer: KSerializer<C>,
        getPath: (configuration: C) -> String,
        getConfiguration: (path: String) -> C,
        onWebNavigation: (newStack: List<C>, oldStack: List<C>) -> Boolean,
    ) {
        val impl = Impl(navigator, stack, serializer, getPath, getConfiguration, onWebNavigation)
        impl.init()
        browserHistory.setOnPopStateListener(impl::onPopState)
    }

    private inner class Impl<in C : Any>(
        private val navigator: StackNavigator<C>,
        private val stack: Value<ChildStack<C, *>>,
        private val serializer: KSerializer<C>,
        private val getPath: (C) -> String,
        private val getConfiguration: (String) -> C,
        private val onWebNavigation: (newStack: List<C>, oldStack: List<C>) -> Boolean,
    ) {
        private var isStateObserverFirstPass = true
        private var isStateObserverEnabled = true

        fun init() {
            // Initialise the history if it's empty
            if (browserHistory.getItems().isEmpty()) {
                val configurations = stack.value.configurations()
                browserHistory.replaceState(configurations[0])
                for (i in 1..configurations.lastIndex) {
                    browserHistory.pushState(configurations[i])
                }
            }

            stack.subscribe(observer = ::onStackChanged)
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
                    browserHistory.go(delta = newConfigurationStack.size - oldConfigurationStack.size)
                }

                // One or more configurations were pushed to the history
                newConfigurationStack.startsWith(oldConfigurationStack) -> { // Push new pages to the history
                    for (i in oldConfigurationStack.size..newConfigurationStack.lastIndex) {
                        browserHistory.pushState(newConfigurationStack[i])
                    }
                }

                // The active configuration was changed, and new configurations could be pushed
                firstDifferentIndex == oldConfigurationStack.lastIndex -> {
                    // Replace the current page with a new one
                    browserHistory.replaceState(newConfigurationStack[firstDifferentIndex])

                    // Push the rest of the pages to the history
                    for (i in (firstDifferentIndex + 1)..newConfigurationStack.lastIndex) {
                        browserHistory.pushState(newConfigurationStack[i])
                    }
                }

                // Some configurations were popped, and one or more configurations were pushed
                firstDifferentIndex > 0 -> {
                    browserHistory.setOnPopStateListener {
                        browserHistory.setOnPopStateListener(::onPopState)

                        // Push new pages to the history
                        for (i in firstDifferentIndex..newConfigurationStack.lastIndex) {
                            browserHistory.pushState(newConfigurationStack[i])
                        }
                    }

                    // Pop removed pages from the history
                    browserHistory.go(delta = firstDifferentIndex - oldConfigurationStack.size)
                }

                // All configurations were popped, and one or more configurations were pushed
                else -> {
                    browserHistory.setOnPopStateListener {
                        browserHistory.setOnPopStateListener(::onPopState)

                        // Replace the current page with a new one
                        browserHistory.replaceState(newConfigurationStack[firstDifferentIndex])

                        // Push the rest of the pages to the history
                        // Corner case: if there is nothing to push, old pages will remain in the history
                        for (i in (firstDifferentIndex + 1)..newConfigurationStack.lastIndex) {
                            browserHistory.pushState(newConfigurationStack[i])
                        }
                    }

                    // Pop removed pages from the history, except the first one
                    browserHistory.go(delta = -oldConfigurationStack.lastIndex)
                }
            }
        }

        fun onPopState(state: String?) {
            val newData = state?.let(::deserializeItems) ?: return
            val newConfigurations = newData.map { deserializeConfiguration(json = it.configurationJson) }
            val oldConfigurations = stack.value.configurations()

            if (!onWebNavigation(newConfigurations, oldConfigurations)) {
                browserHistory.setOnPopStateListener { browserHistory.setOnPopStateListener(::onPopState) }
                browserHistory.go(stack.value.items.size - newConfigurations.size)
                return
            }

            isStateObserverEnabled = false

            navigator.navigate { stack ->
                val indexInStack = stack.indexOfLast { it == newConfigurations.last() }
                if (indexInStack == stack.lastIndex) {
                    // Current history and stack aligned, do nothing
                    stack
                } else if (indexInStack >= 0) {
                    // History popped, pop from the Router
                    stack.take(indexInStack + 1)
                } else {
                    // History pushed, push to the Router
                    stack + newData.drop(stack.size).map { getConfiguration(it.path) }
                }
            }

            browserHistory.replaceState(stack.value.configurations())

            isStateObserverEnabled = true
        }

        private fun BrowserHistory.pushState(configuration: C) {
            pushState(items = browserHistory.getItems() + PageItem(configuration = configuration))
        }

        private fun BrowserHistory.replaceState(configuration: C) {
            replaceState(items = browserHistory.getItems().dropLast(1) + PageItem(configuration = configuration))
        }

        private fun BrowserHistory.replaceState(configurations: List<C>) {
            replaceState(items = configurations.map(::PageItem))
        }

        private fun PageItem(configuration: C): PageItem =
            PageItem(
                configurationJson = serializeConfiguration(configuration),
                path = getPath(configuration),
            )

        private fun serializeConfiguration(configuration: C): String =
            Json.encodeToString(serializer = serializer, value = configuration)

        private fun deserializeConfiguration(json: String): C =
            Json.decodeFromString(deserializer = serializer, string = json)
    }

    @Serializable
    private data class PageItem(
        val configurationJson: String,
        val path: String,
    ) {
        companion object {
            val listSerializer: KSerializer<List<PageItem>> =
                ListSerializer(serializer())
        }
    }
}
