package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.parcelable.consumeRequired
import kotlin.reflect.KClass

/**
 * Initializes and manages a stack of components.
 *
 * @param source a source of navigation events.
 * @param initialStack a stack of component configurations (ordered from tail to head) that should be set
 * if there is no saved state, must be not empty and unique.
 * @param configurationClass a [KClass] of the component configurations.
 * @param key a key of the stack, must be unique if there are multiple stacks in the same component.
 * @param persistent determines whether the navigation state should pre preserved or not,
 * default is `true`.
 * @param handleBackButton determines whether the overlay should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildStack].
 */
fun <C : Parcelable, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    initialStack: () -> List<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultChildStack",
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildStack<C, T>> =
    childStack(
        source = source,
        initialStack = initialStack,
        saveStack = { stack ->
            if (persistent) {
                ParcelableContainer(
                    StackSavedNavState(
                        configurations = stack.map { ParcelableContainer(it) },
                    )
                )
            } else {
                null
            }
        },
        restoreStack = { container ->
            container
                .consumeRequired<StackSavedNavState>()
                .configurations
                .map { it.consumeRequired(configurationClass) }
        },
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

/**
 * Initializes and manages a stack of components.
 *
 * @param source a source of navigation events.
 * @param initialStack a stack of component configurations (ordered from tail to head) that should be set
 * if there is no saved state, must be not empty and unique.
 * @param saveStack a function that saves the provided stack of configurations into [ParcelableContainer].
 * The navigation state is not saved if `null` is returned.
 * @param restoreStack a function that restores the stack of configuration from the provided [ParcelableContainer].
 * If `null` is returned then [initialStack] is used instead.
 * The restored stack must have the same amount of configurations and in the same order.
 * @param key a key of the stack, must be unique if there are multiple stacks in the same component.
 * @param handleBackButton determines whether the overlay should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildStack].
 */
fun <C : Any, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    initialStack: () -> List<C>,
    saveStack: (List<C>) -> ParcelableContainer?,
    restoreStack: (ParcelableContainer) -> List<C>?,
    key: String = "DefaultChildStack",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildStack<C, T>> =
    children(
        source = source,
        key = key,
        initialState = { StackNavState(configurations = initialStack()) },
        saveState = { saveStack(it.configurations) },
        restoreState = { container -> StackNavState(configurations = restoreStack(container) ?: initialStack()) },
        navTransformer = { state, event -> StackNavState(configurations = event.transformer(state.configurations)) },
        stateMapper = { _, children ->
            @Suppress("UNCHECKED_CAST")
            val createdChildren = children as List<Child.Created<C, T>>

            ChildStack(
                active = createdChildren.last(),
                backStack = createdChildren.dropLast(1),
            )
        },
        onEventComplete = { event, newState, oldState ->
            event.onComplete(newState.configurations, oldState.configurations)
        },
        backTransformer = { state ->
            if (handleBackButton && (state.configurations.size > 1)) {
                { StackNavState(configurations = state.configurations.dropLast(1)) }
            } else {
                null
            }
        },
        childFactory = childFactory,
    )

/**
 * A convenience extension function for [ComponentContext.childStack].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    noinline initialStack: () -> List<C>,
    key: String = "DefaultChildStack",
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Value<ChildStack<C, T>> =
    childStack(
        source = source,
        initialStack = initialStack,
        configurationClass = C::class,
        key = key,
        persistent = persistent,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

/**
 * A convenience extension function for [ComponentContext.childStack].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    initialConfiguration: C,
    key: String = "DefaultChildStack",
    persistent: Boolean = true,
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Value<ChildStack<C, T>> =
    childStack(
        source = source,
        initialStack = { listOf(initialConfiguration) },
        configurationClass = C::class,
        key = key,
        persistent = persistent,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

private data class StackNavState<out C : Any>(
    val configurations: List<C>,
) : NavState<C> {

    init {
        require(configurations.isNotEmpty()) { "Configuration stack must not be empty" }
    }

    override val children: List<SimpleChildNavState<C>> =
        configurations.mapIndexed { index, configuration ->
            SimpleChildNavState(
                configuration = configuration,
                status = if (index == configurations.lastIndex) Status.ACTIVE else Status.INACTIVE,
            )
        }
}

@Parcelize
private class StackSavedNavState(
    val configurations: List<ParcelableContainer>,
) : Parcelable
