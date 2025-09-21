package com.arkivanov.decompose.router.items

import com.arkivanov.decompose.Cancellation
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.Component
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.items.Items.ActiveLifecycleState
import com.arkivanov.decompose.router.items.LazyComponentState.CREATED
import com.arkivanov.decompose.router.items.LazyComponentState.DESTROYED
import com.arkivanov.decompose.router.items.LazyComponentState.PENDING
import com.arkivanov.decompose.router.items.LazyComponentState.REMOVED
import com.arkivanov.decompose.router.items.LazyComponentState.RESUMED
import com.arkivanov.decompose.router.items.LazyComponentState.STARTED
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.serializer
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

class TestLazyChildItems<C : ChildConfiguration>(
    private val delegate: LazyChildItems<C, Component<C>>,
    val destroyedComponents: Map<C, Component<C>>,
    val removedComponents: Map<C, Component<C>>,
) : LazyChildItems<C, Component<C>>(), ItemsNavigator<C> by delegate {

    val components: Map<C, Component<C>> get() = value.activeItems.mapValues { it.value.first }

    override val value: ChildItems<C, Component<C>> by delegate::value

    override fun subscribe(observer: (ChildItems<C, Component<C>>) -> Unit): Cancellation =
        delegate.subscribe(observer)

    override fun get(configuration: C): Component<C> =
        delegate[configuration]
}

fun <C : Any> Value<ChildItems<C, Component<C>>>.require(cfg: C): Component<C> =
    value.activeItems.getValue(cfg).first

inline fun <reified C : ChildConfiguration> ComponentContext.childLazyItems(
    source: NavigationSource<ItemsNavigation.Event<C>> = ItemsNavigation(),
    initialItems: List<C> = emptyList(),
    activeItems: Map<C, ActiveLifecycleState> = emptyMap(),
    stateSaver: NavStateSaver<Items<C>>? = NavStateSaver(Items.serializer(serializer<C>())),
): TestLazyChildItems<C> {
    val components = HashMap<C, Component<C>>()
    val destroyedComponents = HashMap<C, Component<C>>()
    val removedComponents = HashMap<C, Component<C>>()

    val items =
        childItems(
            source = source,
            stateSaver = stateSaver,
            initialItems = { Items(items = initialItems, activeItems = activeItems) },
            childFactory = { cfg, ctx ->
                val component = Component(cfg, ctx)
                components[cfg] = component
                removedComponents -= cfg
                destroyedComponents -= cfg

                var isStateSaved = false
                ctx.stateKeeper.register("saved_state_marker", Boolean.serializer()) {
                    isStateSaved = true
                    true
                }

                ctx.doOnDestroy {
                    components -= cfg

                    if (isStateSaved) {
                        destroyedComponents[cfg] = component
                    } else {
                        removedComponents[cfg] = component
                    }
                }

                component
            },
        )

    return TestLazyChildItems(
        delegate = items,
        destroyedComponents = destroyedComponents,
        removedComponents = removedComponents,
    )
}

fun <C : ChildConfiguration> TestLazyChildItems<C>.assertItems(
    vararg items: Pair<C, LazyComponentState>,
) {

    val expectedItems = items.filterNot { (_, state) -> state == REMOVED }.map { (cfg) -> cfg }

    val expectedActiveItems =
        items
            .mapNotNull { (cfg, state) ->
                when (state) {
                    CREATED -> cfg to ActiveLifecycleState.CREATED
                    STARTED -> cfg to ActiveLifecycleState.STARTED
                    RESUMED -> cfg to ActiveLifecycleState.RESUMED
                    else -> null
                }
            }
            .toMap()

    assertEquals(expectedItems, value.items)
    assertEquals(expectedActiveItems, value.activeItems.mapValues { it.value.second })
    assertEquals(expectedActiveItems.keys.toList(), value.activeItems.values.map { it.first.config })

    val destroyedComponentCount = items.count { (_, state) -> state == DESTROYED }
    assertEquals(destroyedComponentCount, destroyedComponents.size)

    val removedComponentCount = items.count { (_, state) -> state == REMOVED }
    assertEquals(removedComponentCount, removedComponents.size)

    items.filterNot { (_, state) -> state == PENDING }.forEach { (cfg, state) ->
        val component =
            when (state) {
                REMOVED -> removedComponents[cfg]
                DESTROYED -> destroyedComponents[cfg]
                else -> components[cfg]
            }

        assertNotNull(actual = component, message = "Component not found: $cfg, $state")
        assertEquals(state.toLifecycleState(), component.lifecycle.state)
    }
}

private fun LazyComponentState.toLifecycleState(): Lifecycle.State =
    when (this) {
        PENDING -> error("Invalid component state: $this")
        REMOVED -> Lifecycle.State.DESTROYED
        DESTROYED -> Lifecycle.State.DESTROYED
        CREATED -> Lifecycle.State.CREATED
        STARTED -> Lifecycle.State.STARTED
        RESUMED -> Lifecycle.State.RESUMED
    }
