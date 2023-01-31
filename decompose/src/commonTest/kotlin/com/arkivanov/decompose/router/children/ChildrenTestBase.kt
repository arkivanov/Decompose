package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.instancekeeper.InstanceKeeperDispatcher
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.parcelable.consumeRequired
import kotlin.test.BeforeTest
import kotlin.test.assertContentEquals

@OptIn(ExperimentalDecomposeApi::class)
internal open class ChildrenTestBase {

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
        initialNavState: TestNavState = TestNavState(),
        saveNavState: (navState: TestNavState) -> ParcelableContainer? = { navState ->
            ParcelableContainer(
                SavedNavState(
                    configurations = navState.children.map { it.configuration },
                    statuses = navState.children.map { it.status },
                )
            )
        },
        restoreNavState: (container: ParcelableContainer) -> TestNavState? = { container ->
            val savedState = container.consumeRequired<SavedNavState>()
            TestNavState(
                children = savedState.configurations.zip(savedState.statuses).map { (configuration, status) ->
                    SimpleChildNavState(
                        configuration = configuration,
                        status = status,
                    )
                },
            )
        },
        onNavStateChanged: (newNavState: TestNavState, oldNavState: TestNavState?) -> Unit = { _, _ -> },
        onEventComplete: (
            event: (TestNavState) -> TestNavState,
            newNavState: TestNavState,
            oldNavState: TestNavState,
        ) -> Unit = { _, _, _ -> },
        backTransformer: (navState: TestNavState) -> (() -> TestNavState)? = { null },
        childFactory: (Config, ComponentContext) -> Component = ::Component,
    ): Value<List<Child<Config, Component>>> =
        children(
            source = navigation,
            key = "Key",
            initialNavState = { initialNavState },
            saveNavState = saveNavState,
            restoreNavState = restoreNavState,
            navTransformer = { navState, event -> event(navState) },
            onNavStateChanged = onNavStateChanged,
            onEventComplete = onEventComplete,
            backTransformer = backTransformer,
            stateMapper = { _, children -> children },
            childFactory = childFactory,
        )

    protected fun navigate(transformer: (List<SimpleChildNavState<Config>>) -> List<SimpleChildNavState<Config>>) {
        navigation.navigate { it.copy(children = transformer(it.children)) }
    }

    protected infix fun Int.by(status: ChildNavState.Status): SimpleChildNavState<Config> =
        SimpleChildNavState(configuration = Config(id = this), status = status)

    protected fun stateOf(vararg children: SimpleChildNavState<Config>): TestNavState =
        TestNavState(children = children.asList())

    protected fun List<Child<Config, Component>>.assertChildren(vararg children: Pair<Int, Int?>) {
        assertContentEquals(
            children.toList(),
            map { child ->
                when (child) {
                    is Child.Created -> child.configuration.id to child.instance.id
                    is Child.Destroyed -> child.configuration.id to null
                }
            }
        )
    }

    protected fun List<Child<Config, Component>>.getById(id: Int): Child<Config, Component> =
        first { it.configuration.id == id }

    protected fun Child<*, Component>.requireInstance(): Component =
        requireNotNull(instance)

    protected data class TestNavState(
        override val children: List<SimpleChildNavState<Config>> = emptyList(),
    ) : NavState<Config>

    @Parcelize
    protected data class Config(
        val id: Int,
    ) : Parcelable

    protected class Component(
        config: Config,
        componentContext: ComponentContext,
    ) : ComponentContext by componentContext {
        val id: Int = config.id
    }

    @Parcelize
    protected class SavedNavState(
        val configurations: List<Config>,
        val statuses: List<ChildNavState.Status>,
    ) : Parcelable
}
