package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState.RESUMED
import com.arkivanov.decompose.testutils.TestComponentContext
import com.arkivanov.essenty.lifecycle.Lifecycle
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.serializer
import kotlin.test.Test
import kotlin.test.assertEquals

class LazyItemsKeysTest {

    @Test
    fun f1() {
        val ctx = TestComponentContext()
        val cfg11 = Cfg(id = 1, data = "1")
        val items = ctx.childLazyItems<Cfg>(initialItems = listOf(cfg11))
        items.setActiveItems { mapOf(cfg11 to RESUMED) }
        val instance11 = items[cfg11]
        instance11.stateKeeper.register(key = "key", strategy = String.serializer()) { "saved_state" }
        val cfg12 = cfg11.copy(data = "2")
        items.setItems { listOf(cfg12) }
        val instance12 = items[cfg12]
        val restoredState = instance12.stateKeeper.consume(key = "key", strategy = String.serializer())
        assertEquals(Lifecycle.State.DESTROYED, instance11.lifecycle.state)
        assertEquals(Lifecycle.State.RESUMED, instance12.lifecycle.state)
        assertEquals("saved_state", restoredState)
    }

    @Serializable
    private data class Cfg(
        val id: Int,
        val data: String,
    ) : ChildConfiguration {
        override val childKey: Any get() = id
    }
}
