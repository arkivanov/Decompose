package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.Relay
import com.arkivanov.decompose.router.children.ChildController
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.lazyitems.ChildLazyItemsNavigation.Event
import com.arkivanov.essenty.lifecycle.doOnDestroy
import kotlinx.serialization.KSerializer

internal inline fun <T : Any, R : Any> NavigationSource<T>.map(crossinline mapper: (T) -> R): NavigationSource<R> =
    NavigationSource { observer ->
        this@map.subscribe { observer(mapper(it)) }
    }

internal fun <T : Any> merge(vararg sources: NavigationSource<T>): NavigationSource<T> =
    MergedNavigationSource(sources)

private class MergedNavigationSource<out T : Any>(
    private val sources: Array<out NavigationSource<T>>,
) : NavigationSource<T> {

    override fun subscribe(observer: (T) -> Unit): Cancellation {
        val relay = Relay<T>()
        val cancellations = sources.map { it.subscribe(relay::accept) } + relay.subscribe(observer)

        return Cancellation {
            cancellations.forEach(Cancellation::cancel)
        }
    }
}

fun <Ctx : GenericComponentContext<Ctx>, C : Any, T : Any> Ctx.childLazyItems(
    source: NavigationSource<Event<C>>,
    serializer: KSerializer<C>?,
    initialItems: () -> LazyItems<C>,
    key: String = "DefaultChildLazyItems",
    childFactory: (configuration: C, Ctx) -> T,
): ChildLazyItems<C, T> =
    childLazyItems(
        source = source,
        initialItems = initialItems,
        stateSaver = serializer?.let { NavStateSaver(LazyItems.serializer(it)) },
        key = key,
        childFactory = childFactory,
    )

fun <Ctx : GenericComponentContext<Ctx>, C : Any, T : Any> Ctx.childLazyItems(
    source: NavigationSource<Event<C>>,
    stateSaver: NavStateSaver<LazyItems<C>>?,
    initialItems: () -> LazyItems<C>,
    key: String = "DefaultChildLazyItems",
    childFactory: (configuration: C, Ctx) -> T,
): ChildLazyItems<C, T> {
    val childLazyItems =
        DefaultChildLazyItems<C, T>(
            controller = ChildController(
                componentContext = this,
                key = key,
                childFactory = childFactory,
            ),
        )

    val cancellation =
        childLazyItems.init(
            source = source,
            initialState = initialItems,
            key = key,
            stateKeeper = stateKeeper,
            stateSaver = stateSaver,
        )

    lifecycle.doOnDestroy(cancellation::cancel)

    return childLazyItems
}
