package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import kotlin.reflect.KClass

/**
 * Creates a new [StackRouter].
 *
 * @param initialStack a stack of component configurations (from tail to head) that should be set if there is
 * no saved state, must be not empty and unique
 * @param configurationClass a [KClass] of the component configurations
 * @param key a key of the [StackRouter], should be unique if there are multiple [StackRouter]s in the same component
 * @param handleBackButton determines whether the [StackRouter] should handle back button clicks or not
 * @param childFactory a factory function that creates new child instances
 * @return a new instance of [StackRouter]
 */
fun <C : Parcelable, T : Any> ComponentContext.stackRouter(
    initialStack: () -> List<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): StackRouter<C, T> {
    val routerEntryFactory = RouterEntryFactoryImpl(lifecycle = lifecycle, childFactory = childFactory)

    return StackRouterImpl(
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
    )
}

/**
 * A convenience extension function for [ComponentContext.stackRouter].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.stackRouter(
    noinline initialStack: () -> List<C>,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): StackRouter<C, T> =
    stackRouter(
        initialStack = initialStack,
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

/**
 * A convenience extension function for [ComponentContext.stackRouter].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.stackRouter(
    initialConfiguration: C,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): StackRouter<C, T> =
    stackRouter(
        initialStack = { listOf(initialConfiguration) },
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )
