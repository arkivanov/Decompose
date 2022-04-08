package com.arkivanov.decompose.router

import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.essenty.backpressed.BackPressedDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse

@Suppress("TestFunctionName")
class RouterTest {

    @Test
    fun WHEN_navigate_THEN_new_stack_applied() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val config4 = Config()
        val router = router(initialStack = listOf(config1, config2, config3))

        router.navigate { listOf(config1, config3, config4) }

        assertEquals(listOf(config1, config3, config4), router.configurations)
    }

    @Test
    fun WHEN_navigate_THEN_onComplete_called_synchronously() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val config4 = Config()
        val router = router(initialStack = listOf(config1, config2, config3))

        var resultNewStack: List<Config>? = null
        var resultOldStack: List<Config>? = null
        router.navigate(transformer = { listOf(config1, config3, config4) }) { newStack, oldStack ->
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
        val navigator = TestStackNavigator()
        val router = router(initialStack = listOf(config1), navigator = navigator)

        navigator.onNavigate =
            { newConfigs ->
                if (newConfigs == listOf(config2)) {
                    router.navigate { listOf(config3) }
                }
            }

        router.navigate { listOf(config2) }

        assertEquals(listOf(config3), router.configurations)
    }


    @Test
    fun WHEN_navigate_recursively_THEN_onComplete_not_called_synchronously() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val navigator = TestStackNavigator()
        val router = router(initialStack = listOf(config1), navigator = navigator)

        var isCalledSynchronously = false
        navigator.onNavigate =
            { newConfigs ->
                if (newConfigs == listOf(config2)) {
                    var isCalled = false
                    router.navigate(transformer = { listOf(config3) }) { _, _ ->
                        isCalled = true
                    }
                    isCalledSynchronously = isCalled
                }
            }

        router.navigate { listOf(config2) }

        assertFalse(isCalledSynchronously)
    }


    @Test
    fun WHEN_navigate_recursively_THEN_onComplete_called() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val navigator = TestStackNavigator()
        val router = router(initialStack = listOf(config1), navigator = navigator)

        var resultNewStack: List<Config>? = null
        var resultOldStack: List<Config>? = null
        navigator.onNavigate =
            { newConfigs ->
                if (newConfigs == listOf(config2)) {
                    router.navigate(transformer = { listOf(config3) }) { newStack, oldStack ->
                        resultNewStack = newStack
                        resultOldStack = oldStack
                    }
                }
            }

        router.navigate { listOf(config2) }

        assertEquals(listOf(config3), resultNewStack)
        assertEquals(listOf(config2), resultOldStack)
    }

    private fun router(initialStack: List<Config>, navigator: TestStackNavigator = TestStackNavigator()): Router<Config, Config> =
        RouterImpl(
            lifecycle = LifecycleRegistry(),
            backPressedHandler = BackPressedDispatcher(),
            popOnBackPressed = false,
            stackHolder = TestStackHolder(routerStack(initialStack)),
            navigator = navigator,
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
                    backPressedDispatcher = BackPressedDispatcher()
                ),
                backStack = stack.dropLast(1).map {
                    RouterEntry.Destroyed(configuration = it)
                }
            )

        private val Router<Config, *>.configurations: List<Config>
            get() = state.value.configurations

        private val RouterState<Config, *>.configurations: List<Config>
            get() = backStack.map { it.configuration } + activeChild.configuration
    }

    @Parcelize
    private class Config : Parcelable

    private class TestStackHolder(
        override var stack: RouterStack<Config, Config>
    ) : StackHolder<Config, Config>

    private class TestStackNavigator : StackNavigator<Config, Config> {
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
