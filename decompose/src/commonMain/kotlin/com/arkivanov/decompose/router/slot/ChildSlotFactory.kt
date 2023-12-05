package com.arkivanov.decompose.router.slot

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.statekeeper.SerializableContainer
import com.arkivanov.essenty.statekeeper.consumeRequired
import kotlinx.serialization.KSerializer

/**
 * Initializes and manages a slot for one child component.
 * The child component can be either active or dismissed (destroyed).
 *
 * @param source a source of navigation events.
 * @param serializer an optional [KSerializer] to be used for serializing and deserializing configurations.
 * If `null` then the navigation state will not be preserved.
 * @param key a key of the slot, must be unique within the parent (hosting) component.
 * @param initialConfiguration a component configuration that should be shown if there is
 * no saved state, return `null` to show nothing.
 * @param handleBackButton determines whether the child component should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildSlot].
 */
fun <C : Any, T : Any> ComponentContext.childSlot(
    source: SlotNavigationSource<C>,
    serializer: KSerializer<C>?,
    initialConfiguration: () -> C? = { null },
    key: String = "DefaultChildSlot",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildSlot<C, T>> =
    childSlot(
        source = source,
        saveConfiguration = { configuration ->
            if ((serializer != null) && (configuration != null)) {
                SerializableContainer(value = configuration, strategy = serializer)
            } else {
                null
            }
        },
        restoreConfiguration = { container ->
            if (serializer != null) {
                container.consumeRequired(strategy = serializer)
            } else {
                null
            }
        },
        key = key,
        initialConfiguration = initialConfiguration,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

/**
 * Initializes and manages a slot for one child component.
 * The child component can be either active or dismissed (destroyed).
 *
 * @param source a source of navigation events.
 * @param key a key of the slot, must be unique within the parent (hosting) component.
 * @param saveConfiguration a function that saves the provided configuration into [SerializableContainer].
 * @param restoreConfiguration a function that restores the configuration from the provided [SerializableContainer].
 * @param initialConfiguration a component configuration that should be shown if there is
 * no saved state, return `null` to show nothing.
 * @param handleBackButton determines whether the child component should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildSlot].
 */
fun <C : Any, T : Any> ComponentContext.childSlot(
    source: SlotNavigationSource<C>,
    saveConfiguration: (C?) -> SerializableContainer?,
    restoreConfiguration: (SerializableContainer) -> C?,
    key: String = "DefaultChildSlot",
    initialConfiguration: () -> C? = { null },
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildSlot<C, T>> =
    children(
        source = source,
        key = key,
        initialState = { SlotNavState(configuration = initialConfiguration()) },
        saveState = { saveConfiguration(it.configuration) },
        restoreState = { SlotNavState(restoreConfiguration(it)) },
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
