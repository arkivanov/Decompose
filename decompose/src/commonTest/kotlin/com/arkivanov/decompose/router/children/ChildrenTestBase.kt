package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.consumeRequired
import kotlinx.serialization.Serializable
import kotlin.test.BeforeTest
import kotlin.test.assertContentEquals

open class ChildrenTestBase {

    private val navigation = SimpleNavigation<(TestNavState) -> TestNavState>()
    protected val lifecycle = LifecycleRegistry()
    protected val backDispatcher = BackDispatcher()

    protected val context =
        DefaultComponentContext(
            lifecycle = lifecycle,
            stateKeeper = TestStateKeeperDispatcher(),
            instanceKeeper = InstanceKeeperDispatcher(),
            backHandler = backDispatcher,
        )

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    protected fun ComponentContext.children(
        initialState: TestNavState = TestNavState(),
        saveState: (state: TestNavState) -> SerializableContainer? = { state ->
            SerializableContainer(
                value = SavedNavState(
                    configurations = state.children.map { it.configuration },
                    statuses = state.children.map { it.status },
                ),
                strategy = SavedNavState.serializer(),
            )
        },
        restoreState: (container: SerializableContainer) -> TestNavState? = { container ->
            val savedState = container.consumeRequired(SavedNavState.serializer())
            TestNavState(
                children = savedState.configurations.zip(savedState.statuses).map { (configuration, status) ->
                    SimpleChildNavState(
                        configuration = configuration,
                        status = status,
                    )
                },
            )
        },
        onStateChanged: (newState: TestNavState, oldState: TestNavState?) -> Unit = { _, _ -> },
        onEventComplete: (
            event: (TestNavState) -> TestNavState,
            newState: TestNavState,
            oldState: TestNavState,
        ) -> Unit = { _, _, _ -> },
        backTransformer: (state: TestNavState) -> (() -> TestNavState)? = { null },
        childFactory: (Int, ComponentContext) -> Component = ::Component,
    ): Value<List<Child<Int, Component>>> =
        children(
            source = navigation,
            key = "Key",
            initialState = { initialState },
            saveState = saveState,
            restoreState = restoreState,
            navTransformer = { state, event -> event(state) },
            onStateChanged = onStateChanged,
            onEventComplete = onEventComplete,
            backTransformer = backTransformer,
            stateMapper = { _, children -> children },
            childFactory = childFactory,
        )

    protected fun navigate(transformer: (List<SimpleChildNavState<Int>>) -> List<SimpleChildNavState<Int>>) {
        navigation.navigate { it.copy(children = transformer(it.children)) }
    }

    protected infix fun Int.by(status: ChildNavState.Status): SimpleChildNavState<Int> =
        SimpleChildNavState(configuration = this, status = status)

    protected fun stateOf(vararg children: SimpleChildNavState<Int>): TestNavState =
        TestNavState(children = children.asList())

    protected fun List<Child<Int, Component>>.assertChildren(vararg children: Pair<Int, Int?>) {
        assertContentEquals(
            children.toList(),
            map { child ->
                when (child) {
                    is Child.Created -> child.configuration to child.instance.config
                    is Child.Destroyed -> child.configuration to null
                }
            }
        )
    }

    protected fun List<Child<Int, Component>>.getByConfig(config: Int): Child<Int, Component> =
        first { it.configuration == config }

    protected fun Child<*, Component>.requireInstance(): Component =
        requireNotNull(instance)

    protected fun List<Child<Int, Component>>.instances(): List<Component?> =
        map { it.instance }

    protected data class TestNavState(
        override val children: List<SimpleChildNavState<Int>> = emptyList(),
    ) : NavState<Int>

    protected class Component(
        val config: Int,
        componentContext: ComponentContext,
    ) : ComponentContext by componentContext

    @Serializable
    protected class SavedNavState(
        val configurations: List<Int>,
        val statuses: List<ChildNavState.Status>,
    )
}
