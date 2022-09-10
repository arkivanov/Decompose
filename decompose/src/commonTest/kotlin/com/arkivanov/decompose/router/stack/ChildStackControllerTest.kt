package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.backhandler.TestChildBackHandler
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.backhandler.BackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

@Suppress("TestFunctionName")
class ChildStackControllerTest {

    @Test
    fun GIVEN_initial_back_stack_empty_WHEN_created_THEN_back_handler_disabled() {
        val backDispatcher = BackDispatcher()

        controller(initialStack = listOf(Config()), backHandler = backDispatcher)

        assertFalse(backDispatcher.isEnabled)
    }

    @Test
    fun GIVEN_initial_back_stack_not_empty_WHEN_created_THEN_back_handler_enabled() {
        val backDispatcher = BackDispatcher()

        controller(initialStack = listOf(Config(), Config()), backHandler = backDispatcher)

        assertTrue(backDispatcher.isEnabled)
    }

    @Test
    fun WHEN_navigate_THEN_new_stack_applied() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val config4 = Config()
        val navigation = StackNavigation<Config>()
        val controller = controller(source = navigation, initialStack = listOf(config1, config2, config3))

        navigation.navigate { listOf(config1, config3, config4) }

        assertEquals(listOf(config1, config3, config4), controller.configurations)
    }

    @Test
    fun WHEN_navigate_THEN_onComplete_called_synchronously() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val config4 = Config()
        val navigation = StackNavigation<Config>()
        controller(source = navigation, initialStack = listOf(config1, config2, config3))

        var resultNewStack: List<Config>? = null
        var resultOldStack: List<Config>? = null
        navigation.navigate(transformer = { listOf(config1, config3, config4) }) { newStack, oldStack ->
            resultNewStack = newStack
            resultOldStack = oldStack
        }

        assertEquals(listOf(config1, config3, config4), resultNewStack)
        assertEquals(listOf(config1, config2, config3), resultOldStack)
    }

    @Test
    fun WHEN_navigate_recursively_THEN_last_stack_applied() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val navigation = StackNavigation<Config>()
        val stackController = TestStackController()
        val controller = controller(source = navigation, initialStack = listOf(config1), controller = stackController)

        stackController.onNavigate =
            { newConfigs ->
                if (newConfigs == listOf(config2)) {
                    navigation.navigate { listOf(config3) }
                }
            }

        navigation.navigate { listOf(config2) }

        assertEquals(listOf(config3), controller.configurations)
    }


    @Test
    fun WHEN_navigate_recursively_THEN_onComplete_not_called_synchronously() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val navigation = StackNavigation<Config>()
        val stackController = TestStackController()
        controller(source = navigation, initialStack = listOf(config1), controller = stackController)

        var isCalledSynchronously = false
        stackController.onNavigate =
            { newConfigs ->
                if (newConfigs == listOf(config2)) {
                    var isCalled = false
                    navigation.navigate(transformer = { listOf(config3) }) { _, _ ->
                        isCalled = true
                    }
                    isCalledSynchronously = isCalled
                }
            }

        navigation.navigate { listOf(config2) }

        assertFalse(isCalledSynchronously)
    }

    @Test
    fun WHEN_navigate_recursively_THEN_onComplete_called() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val navigation = StackNavigation<Config>()
        val stackController = TestStackController()
        controller(source = navigation, initialStack = listOf(config1), controller = stackController)

        var resultNewStack: List<Config>? = null
        var resultOldStack: List<Config>? = null
        stackController.onNavigate =
            { newConfigs ->
                if (newConfigs == listOf(config2)) {
                    navigation.navigate(transformer = { listOf(config3) }) { newStack, oldStack ->
                        resultNewStack = newStack
                        resultOldStack = oldStack
                    }
                }
            }

        navigation.navigate { listOf(config2) }

        assertEquals(listOf(config3), resultNewStack)
        assertEquals(listOf(config2), resultOldStack)
    }

    private fun controller(
        source: StackNavigationSource<Config> = StackNavigation(),
        initialStack: List<Config>,
        backHandler: BackHandler = BackDispatcher(),
        controller: TestStackController = TestStackController(),
    ): ChildStackController<Config, Config> =
        ChildStackController(
            source = source,
            lifecycle = LifecycleRegistry(),
            backHandler = backHandler,
            stackHolder = TestStackHolder(routerStack(initialStack)),
            controller = controller,
        )

    private companion object {
        private fun routerStack(stack: List<Config>): RouterStack<Config, Config> =
            RouterStack(
                active = RouterEntry.Created(
                    configuration = stack.last(),
                    instance = stack.last(),
                    lifecycleRegistry = LifecycleRegistry(),
                    stateKeeperDispatcher = TestStateKeeperDispatcher(),
                    instanceKeeperDispatcher = InstanceKeeperDispatcher(),
                    backHandler = TestChildBackHandler(isEnabled = true),
                ),
                backStack = stack.dropLast(1).map {
                    RouterEntry.Destroyed(configuration = it)
                }
            )

        private val ChildStackController<Config, *>.configurations: List<Config>
            get() = stack.value.configurations

        private val ChildStack<Config, *>.configurations: List<Config>
            get() = items.map { it.configuration }
    }

    @Parcelize
    private class Config : Parcelable

    private class TestStackHolder(
        override var stack: RouterStack<Config, Config>
    ) : StackHolder<Config, Config>

    private class TestStackController : StackController<Config, Config> {
        var onNavigate: (newConfigs: List<Config>) -> Unit = {}

        override fun navigate(
            oldStack: RouterStack<Config, Config>,
            transformer: (stack: List<Config>) -> List<Config>
        ): RouterStack<Config, Config> {
            val oldConfigs = oldStack.configurationStack
            val newConfigs = transformer(oldConfigs)
            onNavigate(newConfigs)

            return routerStack(newConfigs)
        }
    }
}
