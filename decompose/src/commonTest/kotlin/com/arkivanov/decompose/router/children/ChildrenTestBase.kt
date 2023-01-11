package com.arkivanov.decompose.router.children

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.Relay
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

    private val navigation = TestNavigation()
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
        initialNavState: List<SimpleChildNavState<Config>> = emptyList(),
        saveNavState: (navState: List<SimpleChildNavState<Config>>) -> ParcelableContainer? = { navState ->
            ParcelableContainer(
                SavedNavState(
                    configurations = navState.map { it.configuration },
                    statuses = navState.map { it.status },
                )
            )
        },
        restoreNavState: (container: ParcelableContainer) -> List<SimpleChildNavState<Config>>? = { container ->
            val savedState = container.consumeRequired<SavedNavState>()
            savedState.configurations.zip(savedState.statuses).map { (configuration, status) ->
                SimpleChildNavState(
                    configuration = configuration,
                    status = status,
                )
            }
        },
        backTransformer: (navState: List<SimpleChildNavState<Config>>) -> (() -> List<SimpleChildNavState<Config>>)? = { null },
        childFactory: (Config, ComponentContext) -> Component = ::Component,
    ): Value<List<Child<Config, Component>>> =
        children(
            source = navigation,
            key = "Key",
            initialNavState = { TestNavState(children = initialNavState) },
            saveNavState = { navState -> saveNavState(navState.children) },
            restoreNavState = { container -> restoreNavState(container)?.let(::TestNavState) },
            navTransformer = { navState, event -> event.transformer(navState) },
            onEventComplete = { event, newNavState, oldNavState -> event.onComplete(newNavState, oldNavState) },
            backTransformer = {
                backTransformer(it.children)?.let { transformer ->
                    { TestNavState(children = transformer()) }
                }
            },
            stateMapper = { _, children -> children },
            childFactory = childFactory,
        )

    protected fun navigate(transformer: (List<SimpleChildNavState<Config>>) -> List<SimpleChildNavState<Config>>) {
        navigate(transformer = transformer, onComplete = null)
    }

    protected fun navigate(
        transformer: (List<SimpleChildNavState<Config>>) -> List<SimpleChildNavState<Config>>,
        onComplete: ((newNavState: List<SimpleChildNavState<Config>>, oldNavState: List<SimpleChildNavState<Config>>) -> Unit)?,
    ) {
        navigation.navigate(
            Event(
                transformer = { TestNavState(children = transformer(it.children)) },
                onComplete = { newNavState, oldNavState -> onComplete?.invoke(newNavState.children, oldNavState.children) },
            )
        )
    }

    protected infix fun Int.by(status: ChildNavState.Status): SimpleChildNavState<Config> =
        SimpleChildNavState(configuration = Config(id = this), status = status)

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

    protected class Event(
        val transformer: (TestNavState) -> TestNavState,
        val onComplete: (newNavState: TestNavState, oldNavState: TestNavState) -> Unit,
    )

    protected class TestNavigation : NavigationSource<Event> {
        private val relay = Relay<Event>()

        override fun subscribe(observer: (Event) -> Unit) {
            relay.subscribe(observer)
        }

        override fun unsubscribe(observer: (Event) -> Unit) {
            relay.unsubscribe(observer)
        }

        fun navigate(event: Event) {
            relay.accept(event)
        }
    }
}
