package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.TestComponentContext
import com.arkivanov.decompose.router.Component
import com.arkivanov.decompose.router.TestInstance
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.essenty.instancekeeper.retainedInstance
import com.arkivanov.essenty.lifecycle.Lifecycle
import kotlinx.serialization.builtins.serializer
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

class ChildControllerTest {

//    @Test
//    fun foo() {
//        val ctx = TestComponentContext()
//
//        val controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.destroy(configuration = 1)
//        controller.create(configuration = 2)
//        controller.start(configuration = 3)
//        controller.resume(configuration = 4)
//
//        controller.assertChildDestroyed(config = 1)
//        controller.assertChildCreated(config = 2)
//        controller.assertChildStarted(config = 3)
//        controller.assertChildResumed(config = 4)
//
//        controller.resume(configuration = 1)
//        controller.destroy(configuration = 2)
//        controller.create(configuration = 3)
//        controller.start(configuration = 4)
//
//        controller.assertChildResumed(config = 1)
//        controller.assertChildDestroyed(config = 2)
//        controller.assertChildCreated(config = 3)
//        controller.assertChildStarted(config = 4)
//    }
//
//    @Test
//    fun bar() {
//        var ctx = TestComponentContext()
//
//        var controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.destroy(configuration = 1)
//        controller.create(configuration = 2)
//        controller.start(configuration = 3)
//        controller.resume(configuration = 4)
//
//        controller.requireChild(config = 2).stateKeeper.register(key = "state", strategy = String.serializer()) { "state2" }
//        controller.requireChild(config = 3).stateKeeper.register(key = "state", strategy = String.serializer()) { "state3" }
//        controller.requireChild(config = 4).stateKeeper.register(key = "state", strategy = String.serializer()) { "state4" }
//
//        val savedState1 = controller.saveState(configuration = 1)
//        val savedState2 = controller.saveState(configuration = 2)
//        val savedState3 = controller.saveState(configuration = 3)
//        val savedState4 = controller.saveState(configuration = 4)
//        ctx = TestComponentContext()
//
//        controller =
//            ChildController(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.restore(
//            savedState = mapOf(
//                1 to (Status.DESTROYED to savedState1),
//                2 to (Status.CREATED to savedState2),
//                3 to (Status.STARTED to savedState3),
//                4 to (Status.RESUMED to savedState4),
//            ),
//        )
//
//        val restoredState2 = controller.requireChild(config = 2).stateKeeper.consume(key = "state", strategy = String.serializer())
//        val restoredState3 = controller.requireChild(config = 3).stateKeeper.consume(key = "state", strategy = String.serializer())
//        val restoredState4 = controller.requireChild(config = 4).stateKeeper.consume(key = "state", strategy = String.serializer())
//
//        controller.assertChildDestroyed(config = 1)
//        assertEquals("state2", restoredState2)
//        assertEquals("state3", restoredState3)
//        assertEquals("state4", restoredState4)
//    }
//
//    @Test
//    fun baz() {
//        var ctx = TestComponentContext()
//
//        var controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.create(configuration = 1)
//        controller.start(configuration = 2)
//        controller.resume(configuration = 3)
//        controller.requireChild(config = 1).stateKeeper.register(key = "state", strategy = String.serializer()) { "state1" }
//        controller.requireChild(config = 2).stateKeeper.register(key = "state", strategy = String.serializer()) { "state2" }
//        controller.requireChild(config = 3).stateKeeper.register(key = "state", strategy = String.serializer()) { "state3" }
//        controller.destroy(configuration = 1)
//        controller.destroy(configuration = 2)
//        controller.destroy(configuration = 3)
//
//        val savedState1 = controller.saveState(configuration = 1)
//        val savedState2 = controller.saveState(configuration = 2)
//        val savedState3 = controller.saveState(configuration = 3)
//
//        ctx = TestComponentContext()
//
//        controller =
//            ChildController(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.restore(
//            savedState = mapOf(
//                1 to (Status.CREATED to savedState1),
//                2 to (Status.STARTED to savedState2),
//                3 to (Status.RESUMED to savedState3),
//            ),
//        )
//
//        val restoredState1 = controller.requireChild(config = 1).stateKeeper.consume(key = "state", strategy = String.serializer())
//        val restoredState2 = controller.requireChild(config = 2).stateKeeper.consume(key = "state", strategy = String.serializer())
//        val restoredState3 = controller.requireChild(config = 3).stateKeeper.consume(key = "state", strategy = String.serializer())
//
//        assertEquals("state1", restoredState1)
//        assertEquals("state2", restoredState2)
//        assertEquals("state3", restoredState3)
//    }
//
//    @Test
//    fun baz2() {
//        val ctx = TestComponentContext()
//
//        val controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.restore(
//            savedState = mapOf(
//                1 to (Status.CREATED to null),
//                2 to (Status.STARTED to null),
//                3 to (Status.RESUMED to null),
//            ),
//        )
//
//        controller.assertChildCreated(config = 1)
//        controller.assertChildStarted(config = 2)
//        controller.assertChildResumed(config = 3)
//    }
//
//    @Test
//    fun aaa() {
//        var ctx = TestComponentContext()
//
//        var controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.create(configuration = 1)
//        controller.start(configuration = 2)
//        controller.resume(configuration = 3)
//
//        val instance1 = controller.requireChild(config = 1).retainedInstance(key = "key", factory = ::TestInstance)
//        val instance2 = controller.requireChild(config = 2).retainedInstance(key = "key", factory = ::TestInstance)
//        val instance3 = controller.requireChild(config = 3).retainedInstance(key = "key", factory = ::TestInstance)
//
//        ctx = TestComponentContext(instanceKeeper = ctx.instanceKeeper)
//
//        controller =
//            ChildController(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.restore(
//            savedState = mapOf(
//                1 to (Status.CREATED to null),
//                2 to (Status.STARTED to null),
//                3 to (Status.RESUMED to null),
//            ),
//        )
//
//        val newInstance1 = controller.requireChild(config = 1).retainedInstance(key = "key", factory = ::TestInstance)
//        val newInstance2 = controller.requireChild(config = 2).retainedInstance(key = "key", factory = ::TestInstance)
//        val newInstance3 = controller.requireChild(config = 3).retainedInstance(key = "key", factory = ::TestInstance)
//
//        assertSame(instance1, newInstance1)
//        assertSame(instance2, newInstance2)
//        assertSame(instance3, newInstance3)
//    }
//
//    @Test
//    fun bbb() {
//        var ctx = TestComponentContext()
//
//        var controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.create(configuration = 1)
//        controller.start(configuration = 2)
//        controller.resume(configuration = 3)
//
//        val instance1 = controller.requireChild(config = 1).retainedInstance(key = "key", factory = ::TestInstance)
//        val instance2 = controller.requireChild(config = 2).retainedInstance(key = "key", factory = ::TestInstance)
//        val instance3 = controller.requireChild(config = 3).retainedInstance(key = "key", factory = ::TestInstance)
//
//        ctx = TestComponentContext(instanceKeeper = ctx.instanceKeeper)
//
//        controller =
//            ChildController(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.restore(
//            savedState = mapOf(
//                2 to (Status.DESTROYED to null),
//                3 to (Status.RESUMED to null),
//            ),
//        )
//
//        val newInstance3 = controller.requireChild(config = 3).retainedInstance(key = "key", factory = ::TestInstance)
//
//        assertTrue(instance1.isDestroyed)
//        assertTrue(instance2.isDestroyed)
//        assertSame(instance3, newInstance3)
//    }
//
//    @Test
//    fun ccc() {
//        val ctx = TestComponentContext()
//
//        val controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.create(configuration = 1)
//        controller.resume(configuration = 2)
//
//        val instance1 = controller.requireChild(config = 1).retainedInstance(key = "key", factory = ::TestInstance)
//        val instance2 = controller.requireChild(config = 2).retainedInstance(key = "key", factory = ::TestInstance)
//
//        ctx.instanceKeeper.destroy()
//
//        assertTrue(instance1.isDestroyed)
//        assertTrue(instance2.isDestroyed)
//    }
//
//    @Test
//    fun ddd() {
//        val ctx = TestComponentContext()
//
//        val controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.create(configuration = 1)
//
//        controller.requireChild(config = 1).backHandler.register(BackCallback(isEnabled = false) {})
//
//        assertFalse(ctx.backHandler.isEnabled)
//    }
//
//    @Test
//    fun eee() {
//        val ctx = TestComponentContext()
//
//        val controller =
//            ChildController<Int, Component<Int>, ComponentContext>(
//                componentContext = ctx,
//                key = "key",
//                childFactory = ::Component,
//            )
//
//        controller.create(configuration = 1)
//
//        var isCalled = false
//        controller.requireChild(config = 1).backHandler.register(BackCallback(isEnabled = true) { isCalled = true })
//
//        assertTrue(ctx.backHandler.isEnabled)
//    }
//
//    private fun ChildController<Int, Component<Int>, *>.assertChildCreated(config: Int) {
//        assertChildCreated(config = config, lifecycleState = Lifecycle.State.CREATED)
//    }
//
//    private fun ChildController<Int, Component<Int>, *>.assertChildStarted(config: Int) {
//        assertChildCreated(config = config, lifecycleState = Lifecycle.State.STARTED)
//    }
//
//    private fun ChildController<Int, Component<Int>, *>.assertChildResumed(config: Int) {
//        assertChildCreated(config = config, lifecycleState = Lifecycle.State.RESUMED)
//    }
//
//    private fun ChildController<Int, Component<Int>, *>.assertChildCreated(
//        config: Int,
//        lifecycleState: Lifecycle.State,
//    ) {
//        val component = assertNotNull(get(config))
//        assertEquals(config, component.config)
//        assertEquals(lifecycleState, component.lifecycle.state)
//    }
//
//    private fun ChildController<Int, Component<Int>, *>.requireChild(config: Int): Component<Int> =
//        requireNotNull(get(config))
//
//    private fun ChildController<Int, Component<Int>, *>.assertChildDestroyed(config: Int) {
//        assertNull(get(config))
//    }
}
