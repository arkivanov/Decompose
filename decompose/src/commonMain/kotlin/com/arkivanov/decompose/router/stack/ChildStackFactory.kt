package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import kotlin.reflect.KClass

/**
 * Initializes and manages a stack of components.
 *
 * @param source a source of navigation events
 * @param initialStack a stack of component configurations (from tail to head) that should be set if there is
 * no saved state, must be not empty and unique
 * @param configurationClass a [KClass] of the component configurations
 * @param key a key of the stack, should be unique if there are multiple stacks in the same component
 * @param handleBackButton determines whether the stack should be automatically popped on back button press or not
 * @param childFactory a factory function that creates new child instances
 * @return an observable [Value] of [ChildStack]
 */
fun <C : Parcelable, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    initialStack: () -> List<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultChildStack",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildStack<C, T>> {
    val routerEntryFactory = RouterEntryFactoryImpl(lifecycle = lifecycle, childFactory = childFactory)

    val controller =
        ChildStackController(
            lifecycle = lifecycle,
            backPressedHandler = backPressedHandler,
            popOnBackPressed = handleBackButton,
            stackHolder = StackHolderImpl(
                initialStack = initialStack,
                lifecycle = lifecycle,
                key = key,
                stackSaver = StackSaverImpl(
                    configurationClass = configurationClass,
                    stateKeeper = stateKeeper,
                    parcelableContainerFactory = ::ParcelableContainer
                ),
                instanceKeeper = instanceKeeper,
                routerEntryFactory = routerEntryFactory
            ),
            controller = StackControllerImpl(routerEntryFactory = routerEntryFactory),
            source = source,
        )

    return controller.stack
}

/**
 * A convenience extension function for [ComponentContext.childStack].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.childStack(
    source: StackNavigationSource<C>,
    noinline initialStack: () -> List<C>,
    key: String = "DefaultRouter",
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
    key: String = "DefaultRouter",
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
