package com.arkivanov.decompose.router

import com.arkivanov.decompose.Router
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.backpressed.BackPressedDispatcher
import com.arkivanov.decompose.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.router.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.Parcelize
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class RouterTest {

    private val navigator = TestStackNavigator()

    @Test
    fun WHEN_navigate_THEN_new_stack_applied() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()
        val config4 = Config()

        val router = router(initialStack = listOf(config1, config2, config3))

        navigator.add(
            configs = listOf(config1, config3, config4),
            stack = { routerStack(listOf(config1, config3, config4)) }
        )

        router.navigate { listOf(config1, config3, config4) }

        assertEquals(listOf(config1, config3, config4), router.configurations)
    }

    @Test
    fun WHEN_navigate_recursively_THEN_last_stack_applied() {
        val config1 = Config()
        val config2 = Config()
        val config3 = Config()

        val router = router(initialStack = listOf(config1))

        navigator.add(
            configs = listOf(config2),
            stack = {
                router.navigate { listOf(config3) }
                routerStack(listOf(config2))
            }
        )

        navigator.add(
            configs = listOf(config3),
            stack = { routerStack(listOf(config3)) }
        )

        router.navigate { listOf(config2) }

        assertEquals(listOf(config3), router.configurations)
    }

    private fun router(initialStack: List<Config>): Router<Config, Config> =
        RouterImpl(
            lifecycle = LifecycleRegistry(),
            backPressedRegistry = BackPressedDispatcher(),
            popOnBackPressed = false,
            stackHolder = TestStackHolder(routerStack(initialStack)),
            navigator = navigator
        )

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

    @Parcelize
    private class Config : Parcelable

    private class TestStackHolder(
        override var stack: RouterStack<Config, Config>
    ) : StackHolder<Config, Config>

    private class TestStackNavigator : StackNavigator<Config, Config> {
        private val map = HashMap<List<Config>, () -> RouterStack<Config, Config>>()

        override fun navigate(
            oldStack: RouterStack<Config, Config>,
            transformer: (stack: List<Config>) -> List<Config>
        ): RouterStack<Config, Config> {
            val oldConfigs = (oldStack.backStack + oldStack.active).map { it.configuration }
            val newConfigs = transformer(oldConfigs)

            return map.getValue(newConfigs).invoke()
        }

        fun add(configs: List<Config>, stack: () -> RouterStack<Config, Config>) {
            map[configs] = stack
        }
    }
}
