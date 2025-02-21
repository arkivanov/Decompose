package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.router.lazyitems.ChildLazyItemsNavigation.Event
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import kotlinx.serialization.KSerializer

//internal inline fun <T : Any, R : Any> NavigationSource<T>.map(crossinline mapper: (T) -> R): NavigationSource<R> =
//    NavigationSource { observer ->
//        this@map.subscribe { observer(mapper(it)) }
//    }

internal fun <T : Any> merge(source1: NavigationSource<T>, source2: NavigationSource<T>): NavigationSource<T> =
    MergedNavigationSource(source1, source2)

private class MergedNavigationSource<out T : Any>(
    private val source1: NavigationSource<T>,
    private val source2: NavigationSource<T>,
) : NavigationSource<T> {

    override fun subscribe(observer: (T) -> Unit): Cancellation {
        val cancellation1 = source1.subscribe(observer)
        val cancellation2 = source2.subscribe(observer)

        return Cancellation {
            cancellation1.cancel()
            cancellation2.cancel()
        }
    }
}

fun <Ctx : GenericComponentContext<Ctx>, C : Any, T : Any> Ctx.childLazyItems(
    source: NavigationSource<Event<C>>,
    serializer: KSerializer<C>?,
    initialState: () -> LazyItems<C>,
    key: String = "DefaultChildLazyItems",
    childFactory: (configuration: C, Ctx) -> T,
): ChildLazyItems<C, T> =
    childLazyItems(
        source = source,
        initialState = initialState,
        stateSaver = serializer?.let { NavStateSaver(LazyItems.serializer(it)) },
        key = key,
        childFactory = childFactory,
    )

fun <Ctx : GenericComponentContext<Ctx>, C : Any, T : Any> Ctx.childLazyItems(
    source: NavigationSource<Event<C>>,
    initialState: () -> LazyItems<C>,
    stateSaver: NavStateSaver<LazyItems<C>>?,
    key: String = "DefaultChildLazyItems",
    childFactory: (configuration: C, Ctx) -> T,
): ChildLazyItems<C, T> {
    val nav = ChildLazyItemsNavigation<C>()

    val navState: Value<Pair<LazyItemsNavState<C>, Map<C, Child<C, T>>>> =
        children(
            source = merge(source1 = source, source2 = nav),
            key = key,
            initialState = { LazyItemsNavState(initialState()) },
            saveState = { state -> stateSaver?.saveState(state.state) },
            restoreState = { container -> LazyItemsNavState(stateSaver?.restoreState(container) ?: initialState()) },
            navTransformer = { state, event -> LazyItemsNavState(event.transformer(state.state)) },
            stateMapper = { state, children -> state to children.associateBy(Child<C, *>::configuration) },
            childFactory = childFactory,
        )

    return object : ChildLazyItems<C, T>() {
        override val state: Value<LazyItems<C>> =
            navState.map { it.first.state }

        override fun get(configuration: C): Child.Created<C, T> =
            when (val child = navState.value.second.getValue(configuration)) {
                is Child.Created -> child

                is Child.Destroyed -> { // TODO: Simplify
                    nav.navigate(
                        transformer = { it.copy(activeItems = it.activeItems + (configuration to Status.CREATED)) },
                        onComplete = { _, _ -> },
                    )

                    get(configuration)
                }
            }

        // TODO: Simplify
        override fun setActiveItems(items: Map<C, Status>) {
            nav.navigate(
                transformer = { it.copy(activeItems = items) },
                onComplete = { _, _ -> },
            )
        }
    }
}

private data class LazyItemsNavState<C : Any>(
    val state: LazyItems<C>,
) : NavState<C> {

    override val children: List<ChildNavState<C>> =
        state.items.map { config ->
            SimpleChildNavState(
                configuration = config,
                status = state.activeItems[config] ?: Status.DESTROYED,
            )
        }
}
