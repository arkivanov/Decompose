package com.arkivanov.decompose.router.webhistory

import com.arkivanov.decompose.router.webhistory.WebNavigation.HistoryItem
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.serializer
import kotlin.test.assertContentEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull

class TestWebNavigation(
    initialHistory: List<Int>,
    private val onBeforeNavigate: () -> Boolean = { true },
    private val childFactory: (Int) -> TestWebNavigation? = { null },
) : WebNavigation<Int> {

    override val serializer: KSerializer<Int> = Int.serializer()

    private val _history = MutableValue<List<HistoryItem<Int>>>(emptyList())
    override val history: Value<List<HistoryItem<Int>>> = _history

    private var children = HashMap<Int, TestWebNavigation>()

    init {
        navigate(initialHistory)
    }

    fun requireChild(config: Int): TestWebNavigation =
        requireNotNull(children[config])

    override fun onBeforeNavigate(): Boolean =
        onBeforeNavigate.invoke()

    override fun navigate(history: List<Int>) {
        children.keys.removeAll { it !in history }

        history.forEach { config ->
            if (config !in children) {
                val child = childFactory(config)
                if (child != null) {
                    children[config] = child
                }
            }
        }

        _history.value =
            history.map { config ->
                HistoryItem(
                    key = config,
                    path = config.toString(),
                    parameters = emptyMap(),
                    child = children[config]?.let(TestWebNavigation::Owner),
                )
            }
    }

    fun assertHistory(configs: Iterable<Int>) {
        assertContentEquals(configs, _history.value.map { it.key })
    }

    fun assertHistory(urls: List<String>) {
        val configToChildUrlsMap =
            urls
                .map { it.removePrefix("/") }
                .groupBy(
                    keySelector = { it.substringBefore(delimiter = "/").toInt() },
                    valueTransform = { it.substringAfter(delimiter = "/", missingDelimiterValue = "") },
                )
                .mapValues { (_, childUrls) -> childUrls.filterNot(String::isEmpty) }

        assertHistory(configToChildUrlsMap.keys)

        configToChildUrlsMap.entries.forEachIndexed { index, (_, childUrls) ->
            val child = _history.value[index].child?.webNavigation as TestWebNavigation?
            if (childUrls.isEmpty()) {
                assertNull(child)
            } else {
                assertNotNull(child).assertHistory(childUrls)
            }
        }
    }

    private class Owner(override val webNavigation: TestWebNavigation) : WebNavigationOwner {
        override fun toString(): String {
            return webNavigation.toString()
        }
    }
}
