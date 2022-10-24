package com.arkivanov.decompose.router.overlay

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import kotlin.reflect.KClass

/**
 * Initializes and manages component overlay. An overlay component can be either active or dismissed (destroyed).
 *
 * @param source a source of navigation events.
 * @param configurationClass a [KClass] of the component configurations.
 * @param key a key of the overlay, must be unique within the parent (hosting) component.
 * @param initialConfiguration a component configuration that should be shown if there is
 * no saved state, return `null` to show nothing.
 * @param persistent determines whether the navigation state should pre preserved or not,
 * default is `true`.
 * @param handleBackButton determines whether the overlay should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildOverlay].
 */
@OptIn(ExperimentalDecomposeApi::class)
fun <C : Parcelable, T : Any> ComponentContext.childOverlay(
    source: OverlayNavigationSource<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultChildOverlay",
    initialConfiguration: () -> C? = { null },
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildOverlay<C, T>> =
    children(
        source = source,
        key = key,
        initialNavState = { OverlayNavState(configuration = initialConfiguration()) },
        saveNavState = { navState -> ParcelableContainer(navState.configuration?.takeIf { persistent }) },
        restoreNavState = { container -> OverlayNavState(container.consume(configurationClass)) },
        navTransformer = { navState, event -> OverlayNavState(configuration = event.transformer(navState.configuration)) },
        onEventComplete = { event, newNavState, oldNavState -> event.onComplete(newNavState.configuration, oldNavState.configuration) },
        backTransformer = { navState ->
            if (handleBackButton && (navState.configuration != null)) {
                { OverlayNavState(configuration = null) }
            } else {
                null
            }
        },
        stateMapper = { _, children -> ChildOverlay(overlay = children.firstOrNull() as? Child.Created?) },
        childFactory = childFactory,
    )

@OptIn(ExperimentalDecomposeApi::class)
private data class OverlayNavState<out C : Any>(
    val configuration: C?,
) : NavState<C> {

    override val children: List<SimpleChildNavState<C>> =
        if (configuration == null) {
            emptyList()
        } else {
            listOf(SimpleChildNavState(configuration = configuration, status = Status.ACTIVE))
        }
}

/**
 * A convenience extension function for [ComponentContext.childOverlay].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.childOverlay(
    source: OverlayNavigationSource<C>,
    key: String = "DefaultChildOverlay",
    noinline initialConfiguration: () -> C? = { null },
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildOverlay<C, T>> =
    childOverlay(
        source = source,
        key = key,
        configurationClass = C::class,
        initialConfiguration = initialConfiguration,
        persistent = persistent,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )
