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
import kotlin.math.max
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
 * @param backStackCreateDepth automatically creates the specified amount of components
 * in the back stack, e.g. when initialized, during navigation or after process death.
 * Default value is `0`, which means that a component is only created when it becomes active.
 * Use `1` to always create the previous component in the stack. Use [Int.MAX_VALUE] to
 * create all components in the stack.
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
    backStackCreateDepth: Int = 0,
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
        backStackCreateDepth = backStackCreateDepth,
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
 * @param backStackCreateDepth automatically creates the specified amount of components
 * in the back stack, e.g. when initialized, during navigation or after process death.
 * Default value is `0`, which means that a component is only created when it becomes active.
 * Use `1` to always create the previous component in the stack. Use [Int.MAX_VALUE] to
 * create all components in the stack.
 * @param handleBackButton determines whether the overlay should be automatically dismissed
 * on back button press or not, default is `false`.
 * @param childFactory a factory function that creates new child instances.
 * @return an observable [Value] of [ChildStack].
 */
@OptIn(ExperimentalDecomposeApi::class)
fun <C : Any, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    initialStack: () -> List<C>,
    saveStack: (List<C>) -> ParcelableContainer?,
    restoreStack: (ParcelableContainer) -> List<C>?,
    key: String = "DefaultChildStack",
    backStackCreateDepth: Int = 0,
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildStack<C, T>> =
    children(
        source = source,
        key = key,
        initialState = {
            StackNavState(
                configurations = initialStack(),
                backStackCreateDepth = backStackCreateDepth,
            )
        },
        saveState = { saveStack(it.configurations) },
        restoreState = { container ->
            StackNavState(
                configurations = restoreStack(container) ?: initialStack(),
                backStackCreateDepth = backStackCreateDepth,
            )
        },
        navTransformer = { state, event ->
            val newStack = event.transformer(state.configurations)
            check(newStack.isNotEmpty()) { "Configuration stack must not be empty" }

            val oldStatuses = state.children.associateBy(keySelector = { it.configuration }, valueTransform = { it.status })

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
                    }
                    .withCreateDepth(createDepth = backStackCreateDepth),
            )
        },
        stateMapper = { _, children ->
            ChildStack(
                active = children.last() as Child.Created,
                backStack = children.dropLast(1),
            )
        },
        onEventComplete = { event, newState, oldState ->
            event.onComplete(newState.configurations, oldState.configurations)
        },
        backTransformer = { state ->
            if (handleBackButton && state.backStack.isNotEmpty()) {
                {
                    StackNavState(
                        active = state.backStack.last().configuration,
                        backStack = state.backStack.dropLast(1).withCreateDepth(createDepth = backStackCreateDepth),
                    )
                }
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
    backStackCreateDepth: Int = 0,
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
        backStackCreateDepth = backStackCreateDepth,
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
    backStackCreateDepth: Int = 0,
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
        backStackCreateDepth = backStackCreateDepth,
        childFactory = childFactory,
    )

@ExperimentalDecomposeApi
private fun <C : Any> List<SimpleChildNavState<C>>.withCreateDepth(createDepth: Int): List<SimpleChildNavState<C>> =
    if (isCreateRequired(createDepth = createDepth)) {
        mapIndexed { index, item ->
            when (item.status) {
                Status.DESTROYED -> if (lastIndex - index < createDepth) item.copy(status = Status.INACTIVE) else item
                Status.INACTIVE,
                Status.ACTIVE -> item
            }
        }
    } else {
        this
    }

@ExperimentalDecomposeApi
private fun List<SimpleChildNavState<*>>.isCreateRequired(createDepth: Int): Boolean {
    for (i in lastIndex downTo max(lastIndex - createDepth + 1, 0)) {
        if (get(i).status == Status.DESTROYED) {
            return true
        }
    }

    return false
}

@OptIn(ExperimentalDecomposeApi::class)
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

@ExperimentalDecomposeApi
private fun <C : Any> StackNavState(configurations: List<C>, backStackCreateDepth: Int): StackNavState<C> {
    require(configurations.isNotEmpty()) { "Configuration stack must not be empty" }

    return StackNavState(
        active = configurations.last(),
        backStack = configurations
            .dropLast(1)
            .map { SimpleChildNavState(configuration = it, status = Status.DESTROYED) }
            .withCreateDepth(createDepth = backStackCreateDepth),
    )
}

@Parcelize
private class StackSavedNavState(
    val configurations: List<ParcelableContainer>,
) : Parcelable
