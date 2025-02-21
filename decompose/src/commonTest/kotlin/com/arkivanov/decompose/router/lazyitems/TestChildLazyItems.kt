package com.arkivanov.decompose.router.lazyitems

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.Component
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.lazyitems.LazyComponentState.CREATED
import com.arkivanov.decompose.router.lazyitems.LazyComponentState.DESTROYED
import com.arkivanov.decompose.router.lazyitems.LazyComponentState.PENDING
import com.arkivanov.decompose.router.lazyitems.LazyComponentState.REMOVED
import com.arkivanov.decompose.router.lazyitems.LazyComponentState.RESUMED
import com.arkivanov.decompose.router.lazyitems.LazyComponentState.STARTED
import com.arkivanov.decompose.router.lazyitems.LazyItems.ActiveLifecycleState
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.doOnDestroy
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.serializer
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

class TestChildLazyItems<C : Any>(
    private val delegate: ChildLazyItems<C, Component<C>>,
    val components: Map<C, Component<C>>,
    val destroyedComponents: Map<C, Component<C>>,
    val removedComponents: Map<C, Component<C>>,
) : ChildLazyItems<C, Component<C>>() {

    override val state: Value<LazyItems<C>> by delegate::state

    override fun get(configuration: C): Component<C> =
        delegate[configuration]

    override fun setActiveItems(items: Map<C, ActiveLifecycleState>) {
        delegate.setActiveItems(items)
    }
}

fun <C : Any> TestChildLazyItems<C>.require(cfg: C): Component<C> =
    components.getValue(cfg)

inline fun <reified C : Any> ComponentContext.childLazyItems(
    source: NavigationSource<ChildLazyItemsNavigation.Event<C>> = ChildLazyItemsNavigation(),
    initialItems: List<C> = emptyList(),
    activeItems: Map<C, ActiveLifecycleState> = emptyMap(),
    stateSaver: NavStateSaver<LazyItems<C>>? = NavStateSaver(LazyItems.serializer(serializer<C>())),
): TestChildLazyItems<C> {
    val components = HashMap<C, Component<C>>()
    val destroyedComponents = HashMap<C, Component<C>>()
    val removedComponents = HashMap<C, Component<C>>()

    val items =
        childLazyItems(
            source = source,
            stateSaver = stateSaver,
            initialItems = { LazyItems(items = initialItems, activeItems = activeItems) },
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

    return TestChildLazyItems(
        delegate = items,
        components = components,
        destroyedComponents = destroyedComponents,
        removedComponents = removedComponents,
    )
}

fun <C : Any> TestChildLazyItems<C>.assertItems(
    vararg items: Pair<C, LazyComponentState>,
) {
    val expectedLazyItems =
        LazyItems(
            items = items.filterNot { (_, state) -> state == REMOVED }.map { (cfg) -> cfg },
            activeItems = items
                .mapNotNull { (cfg, state) ->
                    when (state) {
                        CREATED -> cfg to ActiveLifecycleState.CREATED
                        STARTED -> cfg to ActiveLifecycleState.STARTED
                        RESUMED -> cfg to ActiveLifecycleState.RESUMED
                        else -> null
                    }
                }
                .toMap(),
        )

    assertEquals(expectedLazyItems, state.value)

    val createdComponentCount = items.count { (_, state) -> state >= CREATED }
    assertEquals(createdComponentCount, components.size)

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
