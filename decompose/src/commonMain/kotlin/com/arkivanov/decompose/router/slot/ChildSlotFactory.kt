package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.GenericComponentContext
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.NavStateSaver
import com.arkivanov.decompose.router.children.NavigationSource
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.router.children.mapNullable
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.KSerializer

/**
 * Initializes and manages a slot for one child component.
 * The child component can be either active or dismissed (destroyed).
 *
 * **It is strongly recommended to call this method on the Main thread.**
 *
 * @param source a source of navigation events.
 * @param serializer an optional [KSerializer] to be used for serializing and deserializing configurations.
 * If `null` then the navigation state will not be preserved.
 * @param key a key of the navigation, must be unique within the parent (hosting) component.
 * @param initialConfiguration a component configuration that should be shown if there is
 * no saved state, return `null` to show nothing.
 * @param handleBackButton determines whether the child component should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildSlot].
 */
fun <Ctx : GenericComponentContext<Ctx>, C : Any, T : Any> Ctx.childSlot(
    source: NavigationSource<SlotNavigation.Event<C>>,
    serializer: KSerializer<C>?,
    initialConfiguration: () -> C? = { null },
    key: String = "DefaultChildSlot",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, Ctx) -> T,
): Value<ChildSlot<C, T>> =
    childSlot(
        source = source,
        stateSaver = serializer?.let(::NavStateSaver),
        key = key,
        initialConfiguration = initialConfiguration,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

/**
 * Initializes and manages a slot for one child component.
 * The child component can be either active or dismissed (destroyed).
 *
 * **It is strongly recommended to call this method on the Main thread.**
 *
 * @param source a source of navigation events.
 * @param key a key of the navigation, must be unique within the parent (hosting) component.
 * @param stateSaver an optional [NavStateSaver] for saving and restoring the navigation state.
 * If `null` then the navigation state will not be preserved.
 * Use [transientNavStateSaver][com.arkivanov.decompose.router.children.transientNavStateSaver]
 * to prevent the navigation state from being saved to disk and only keep it in memory (i.e., saved
 * only over configuration changes on Android).
 * @param initialConfiguration a component configuration that should be shown if there is
 * no saved state, return `null` to show nothing.
 * @param handleBackButton determines whether the child component should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildSlot].
 */
fun <Ctx : GenericComponentContext<Ctx>, C : Any, T : Any> Ctx.childSlot(
    source: NavigationSource<SlotNavigation.Event<C>>,
    stateSaver: NavStateSaver<C?>?,
    key: String = "DefaultChildSlot",
    initialConfiguration: () -> C? = { null },
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, Ctx) -> T,
): Value<ChildSlot<C, T>> =
    children(
        source = source,
        key = key,
        initialState = { SlotNavState(configuration = initialConfiguration()) },
        stateSaver = stateSaver?.mapNullable(saveMapper = SlotNavState<C>::configuration, restoreMapper = ::SlotNavState),
        navTransformer = { state, event -> SlotNavState(configuration = event.transformer(state.configuration)) },
        stateMapper = { _, children -> ChildSlot(child = children.firstOrNull() as? Child.Created?) },
        onEventComplete = { event, newState, oldState -> event.onComplete(newState.configuration, oldState.configuration) },
        backTransformer = { state ->
            if (handleBackButton && (state.configuration != null)) {
                { SlotNavState(configuration = null) }
            } else {
                null
            }
        },
        childFactory = childFactory,
    )

private data class SlotNavState<out C : Any>(
    val configuration: C?,
) : NavState<C> {

    override val children: List<SimpleChildNavState<C>> =
        if (configuration == null) {
            emptyList()
        } else {
            listOf(SimpleChildNavState(configuration = configuration, status = Status.RESUMED))
        }
}
