package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.GettingList
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
 * @param handleBackButton determines whether the overlay should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildStack].
 */
@OptIn(ExperimentalDecomposeApi::class)
fun <C : Parcelable, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    initialStack: () -> List<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultChildStack",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildStack<C, T>> =
    children(
        source = source,
        key = key,
        initialNavState = {
            val stack = initialStack()
            check(stack.isNotEmpty()) { "Configuration stack must not be empty" }

            StackNavState(
                active = stack.last(),
                backStack = stack.dropLast(1).map { configuration ->
                    SimpleChildNavState(configuration = configuration, status = Status.DESTROYED)
                },
            )
        },
        saveNavState = { navState ->
            ParcelableContainer(
                StackSavedNavState(
                    activeConfiguration = ParcelableContainer(navState.active),
                    backStackConfigurations = navState.backStack.map { ParcelableContainer(it.configuration) },
                )
            )
        },
        restoreNavState = { container ->
            val state = container.consumeRequired<StackSavedNavState>()

            StackNavState(
                active = state.activeConfiguration.consumeRequired(configurationClass),
                backStack = state.backStackConfigurations.map {
                    SimpleChildNavState(
                        configuration = it.consumeRequired(configurationClass),
                        status = Status.DESTROYED,
                    )
                }
            )
        },
        navTransformer = { navState, event ->
            val newStack = event.transformer(navState.configurations)
            check(newStack.isNotEmpty()) { "Configuration stack must not be empty" }

            val oldStatuses = navState.children.associateBy(keySelector = { it.configuration }, valueTransform = { it.status })

            StackNavState(
                active = newStack.last(),
                backStack = newStack
                    .dropLast(1)
                    .map { configuration ->
                        SimpleChildNavState(
                            configuration = configuration,
                            status = when (oldStatuses[configuration]) {
                                Status.DESTROYED -> Status.DESTROYED
                                Status.INACTIVE -> Status.INACTIVE
                                Status.ACTIVE -> Status.INACTIVE
                                null -> Status.DESTROYED
                            },
                        )
                    },
            )
        },
        onEventComplete = { event, newNavState, oldNavState ->
            event.onComplete(newNavState.configurations, oldNavState.configurations)
        },
        backTransformer = { navState ->
            if (handleBackButton && navState.backStack.isNotEmpty()) {
                {
                    StackNavState(
                        active = navState.backStack.last().configuration,
                        backStack = navState.backStack.dropLast(1),
                    )
                }
            } else {
                null
            }
        },
        stateMapper = { _, children ->
            ChildStack(
                active = children.last() as Child.Created,
                backStack = children.dropLast(1),
            )
        },
        childFactory = childFactory,
    )

private data class StackNavState<out C : Any>(
    val active: C,
    val backStack: List<SimpleChildNavState<C>>,
) : NavState<C> {

    private val activeChildNavState = SimpleChildNavState(configuration = active, status = Status.ACTIVE)

    override val children: List<SimpleChildNavState<C>> =
        GettingList(size = backStack.size + 1) { index ->
            backStack.getOrNull(index) ?: activeChildNavState
        }

    val configurations: List<C> =
        GettingList(size = children.size) { index ->
            children[index].configuration
        }
}

@Parcelize
private class StackSavedNavState(
    val activeConfiguration: ParcelableContainer,
    val backStackConfigurations: List<ParcelableContainer>,
) : Parcelable

/**
 * A convenience extension function for [ComponentContext.childStack].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    noinline initialStack: () -> List<C>,
    key: String = "DefaultChildStack",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Value<ChildStack<C, T>> =
    childStack(
        source = source,
        initialStack = initialStack,
        configurationClass = C::class,
        key = key,
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
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Value<ChildStack<C, T>> =
    childStack(
        source = source,
        initialStack = { listOf(initialConfiguration) },
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )
