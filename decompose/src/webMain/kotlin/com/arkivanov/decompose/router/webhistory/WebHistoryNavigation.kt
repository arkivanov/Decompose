package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Json
import com.arkivanov.decompose.doOnCancel
import com.arkivanov.decompose.encodeURIComponent
import com.arkivanov.decompose.router.stack.startsWith
import com.arkivanov.decompose.router.stack.subscribe
import com.arkivanov.decompose.router.webhistory.WebNavigation.HistoryItem
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.consumeRequired
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer

internal fun <T : Any> enableWebHistory(navigation: WebNavigation<T>, browserHistory: BrowserHistory) {
    if (browserHistory.state == null) {
        browserHistory.replaceState(navigation.nodeHistory())
    }

    var isEnabled = true

    fun onPopState(state: String?) {
        val deserializedState = state?.deserializeState() ?: return

        if (navigation.onBeforeNavigateRecursive()) {
            isEnabled = false
            navigation.navigate(deserializedState.nodesContainer.consumeNodes())
            isEnabled = true
        } else {
            val delta = navigation.history().lastIndex - deserializedState.index
            if (delta != 0) {
                browserHistory.setOnPopStateListener { browserHistory.setOnPopStateListener(::onPopState) }
                browserHistory.go(delta)
            }
        }
    }

    browserHistory.setOnPopStateListener(::onPopState)

    navigation.subscribe(
        isEnabled = { isEnabled },
        onPush = { history ->
            history.forEach(browserHistory::pushState)
        },
        onPop = { count, nodes ->
            val popCount = count.coerceAtMost(browserHistory.currentIndex())

            if (popCount > 0) {
                browserHistory.setOnPopStateListener {
                    browserHistory.setOnPopStateListener(::onPopState)

                    if (popCount < count) {
                        browserHistory.replaceState(nodes)
                    }
                }

                browserHistory.go(-popCount)
            } else {
                browserHistory.replaceState(nodes)
            }
        },
        onRewrite = { newHistory ->
            val currentIndex = browserHistory.currentIndex()
            if (currentIndex > 0) {
                browserHistory.setOnPopStateListener {
                    browserHistory.setOnPopStateListener(::onPopState)
                    browserHistory.replaceState(newHistory.first())
                    newHistory.drop(1).forEach(browserHistory::pushState)
                }
                browserHistory.go(-currentIndex)
            } else {
                browserHistory.replaceState(newHistory.first())
                newHistory.drop(1).forEach(browserHistory::pushState)
            }
        },
        onUpdateUrl = browserHistory::replaceState
    )
}

private fun <T : Any> WebNavigation<T>.onBeforeNavigateRecursive(): Boolean {
    val isChildAllowed = history.value.lastOrNull()?.child?.webNavigation?.onBeforeNavigateRecursive() ?: true

    return if (isChildAllowed) onBeforeNavigate() else false
}

private fun <T : Any> WebNavigation<T>.navigate(nodes: List<SerializableNode>) {
    val items: List<T> = nodes.map { it.data.consumeRequired(serializer) }
    navigate(items)

    history.value.forEachIndexed { index, item ->
        item.child?.webNavigation?.navigate(nodes[index].children)
    }
}

private fun BrowserHistory.replaceState(nodes: NodeHistory<*>) {
    replaceState(
        data = serializeState(index = currentIndex(), nodes = nodes),
        url = nodes.last().url(),
    )
}

private fun BrowserHistory.pushState(nodes: NodeHistory<*>) {
    pushState(
        data = serializeState(index = currentIndex() + 1, nodes = nodes),
        url = nodes.last().url()
    )
}

private fun BrowserHistory.currentIndex(): Int =
    state?.deserializeState()?.index ?: 0

private fun <T> Node<T>.toSerializableNode(): SerializableNode =
    SerializableNode(
        data = SerializableContainer(value = key, strategy = serializer),
        children = children.map { it.toSerializableNode() },
    )

private fun HistoryState.serialize(): String =
    Json.encodeToString(serializer = HistoryState.serializer(), value = this)

private fun String.deserializeState(): HistoryState =
    Json.decodeFromString(deserializer = HistoryState.serializer(), string = this)

private fun SerializableContainer.consumeNodes(): List<SerializableNode> =
    consumeRequired(SerializableNode.listSerializer)

private fun serializeState(
    index: Int,
    nodes: NodeHistory<*>,
): String =
    HistoryState(index = index, nodes = nodes.map { it.toSerializableNode() }).serialize()

private fun <T : Any> WebNavigation<T>.subscribe(
    isEnabled: () -> Boolean,
    onPush: (List<NodeHistory<T>>) -> Unit,
    onPop: (count: Int, NodeHistory<T>) -> Unit,
    onRewrite: (newHistory: List<NodeHistory<T>>) -> Unit,
    onUpdateUrl: (NodeHistory<T>) -> Unit,
): Cancellation {
    var activeChildCancellation: Cancellation? = null
    var isInitial = true

    return history.subscribe { newHistory, oldHistory ->
        activeChildCancellation?.cancel()

        check(newHistory.isNotEmpty())

        if (!isInitial && isEnabled()) {
            onHistoryChanged(newHistory, oldHistory, onPush, onPop, onRewrite, onUpdateUrl)
        }

        isInitial = false

        val activeItem = newHistory.last()
        val inactiveNodes = newHistory.dropLast(1).map(::nodeTreeOf)

        activeChildCancellation =
            activeItem.child?.webNavigation?.subscribe(
                isEnabled = isEnabled,
                onPush = { childHistory ->
                    onPush(childHistory.map { childNodes -> inactiveNodes + nodeOf(item = activeItem, children = childNodes) })
                },
                onPop = { count, childNodes ->
                    onPop(count, inactiveNodes + nodeOf(item = activeItem, children = childNodes))
                },
                onRewrite = { childHistory ->
                    onRewrite(childHistory.map { childNodes -> inactiveNodes + nodeOf(item = activeItem, children = childNodes) })
                },
                onUpdateUrl = { childNodes ->
                    onUpdateUrl(inactiveNodes + nodeOf(item = activeItem, children = childNodes))
                },
            )
    }.doOnCancel { activeChildCancellation?.cancel() }
}

private fun <T : Any> WebNavigation<T>.onHistoryChanged(
    newHistory: List<HistoryItem<T>>,
    oldHistory: List<HistoryItem<T>>,
    onPush: (List<NodeHistory<T>>) -> Unit,
    onPop: (count: Int, NodeHistory<T>) -> Unit,
    onRewrite: (newHistory: List<NodeHistory<T>>) -> Unit,
    onUpdateUrl: (NodeHistory<T>) -> Unit,
) {
    val newKeys = newHistory.map { it.key }
    val oldKeys = oldHistory.map { it.key }

    when {
        newKeys == oldKeys -> { // History is not changed, but path or parameters might be
            onUpdateUrl(newHistory.map(::nodeTreeOf))
        }

        newKeys.startsWith(oldKeys) -> { // Items pushed
            val newItems = newHistory.takeLast(newHistory.size - oldHistory.size)
            val historyChange = ArrayList<NodeHistory<T>>()
            val previousNodes = oldHistory.mapTo(ArrayList(), ::nodeTreeOf)

            newItems.forEach { item ->
                val itemHistory = historyOf(item)
                itemHistory.forEach {
                    historyChange += previousNodes + it
                }
                previousNodes += itemHistory.last()
            }

            onPush(historyChange)
        }

        oldKeys.startsWith(newKeys) -> { // Items popped
            val oldPaths = oldHistory.takeLast(oldHistory.size - newHistory.size).flatMap(::historyOf)
            onPop(oldPaths.size, newHistory.map(::nodeTreeOf))
        }

        else -> { // Rewriting the history
            val historyChange = ArrayList<NodeHistory<T>>()
            val previousNodes = ArrayList<Node<T>>()

            newHistory.forEach { item ->
                val itemHistory = historyOf(item)
                itemHistory.forEach {
                    historyChange += previousNodes + it
                }
                previousNodes += itemHistory.last()
            }

            onRewrite(historyChange)
        }
    }
}

private fun Node<*>.url(): String {
    val path = path()
    val parameters = parameters()

    return when {
        path.isNotEmpty() && parameters.isNotEmpty() -> "$path?$parameters"
        path.isNotEmpty() -> path
        parameters.isNotEmpty() -> parameters
        else -> ""
    }
}

private fun Node<*>.path(): String {
    val segments = ArrayList<String>()
    collectPath(segments)

    return segments.joinToString(prefix = "/", separator = "/")
}

private fun Node<*>.collectPath(segments: MutableList<String>) {
    if (path.isNotEmpty()) {
        segments += path.trim('/')
    }

    children.lastOrNull()?.collectPath(segments)
}

private fun Node<*>.parameters(): String {
    val parameters = LinkedHashMap<String, String>()
    collectParameters(parameters)

    return parameters.entries.joinToString(separator = "&") { (name, value) ->
        "${encodeURIComponent(name)}=${encodeURIComponent(value)}"
    }
}

private fun Node<*>.collectParameters(parameters: MutableMap<String, String>) {
    parameters += this.parameters
    children.lastOrNull()?.collectParameters(parameters)
}

private fun <T : Any> WebNavigation<T>.nodeTreeOf(item: HistoryItem<T>): Node<T> =
    Node(
        item = item,
        serializer = serializer,
        children = item.child?.webNavigation?.nodeHistory() ?: emptyList(),
    )

private fun <T : Any> WebNavigation<T>.nodeHistory(): NodeHistory<T> {
    val items = history.value
    check(items.isNotEmpty())

    return items.map(::nodeTreeOf)
}

private fun <T : Any> WebNavigation<T>.nodeOf(
    item: HistoryItem<T>,
    children: NodeHistory<*> = emptyList(),
): Node<T> =
    Node(
        item = item,
        serializer = serializer,
        children = children,
    )

private fun <T : Any> WebNavigation<T>.historyOf(item: HistoryItem<T>): NodeHistory<T> =
    item.child
        ?.webNavigation
        ?.history()
        ?.map { Node(item = item, serializer = serializer, children = it) }
        ?: listOf(Node(item = item, serializer = serializer))

private fun <T : Any> WebNavigation<T>.history(): List<NodeHistory<T>> {
    val nodes = ArrayList<NodeHistory<T>>()
    val historyNodes = ArrayList<Node<T>>()
    history.value.forEach { item ->
        historyOf(item).forEach { node ->
            historyNodes += node
            nodes += historyNodes.toList()
        }
    }

    return nodes
}

@Serializable
private data class SerializableNode(
    val data: SerializableContainer,
    val children: List<SerializableNode>,
) {
    companion object {
        val listSerializer: KSerializer<List<SerializableNode>> by lazy { ListSerializer(serializer()) }
    }
}

private data class Node<T>(
    val path: String,
    val parameters: Map<String, String>,
    val key: T,
    val serializer: KSerializer<T>,
    val children: NodeHistory<*>,
)

private fun <T> Node(
    item: HistoryItem<T>,
    serializer: KSerializer<T>,
    children: NodeHistory<*> = emptyList(),
): Node<T> =
    Node(
        path = item.path,
        parameters = item.parameters,
        key = item.key,
        serializer = serializer,
        children = children,
    )

private typealias NodeHistory<T> = List<Node<T>>

@Serializable
private class HistoryState(
    val index: Int,
    val nodesContainer: SerializableContainer,
)

private fun HistoryState(index: Int, nodes: List<SerializableNode>): HistoryState =
    HistoryState(
        index = index,
        nodesContainer = SerializableContainer(value = nodes, strategy = SerializableNode.listSerializer),
    )
