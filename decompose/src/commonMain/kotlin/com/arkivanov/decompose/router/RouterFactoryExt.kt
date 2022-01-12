package com.arkivanov.decompose.router

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import kotlin.reflect.KClass

/**
 * Creates a new [Router].
 *
 * @param initialStack a stack of component configurations (from tail to head) that should be set if there is
 * no saved state, must be not empty and unique
 * @param configurationClass a [KClass] of the component configurations
 * @param key a key of the [Router], should be unique if there are multiple [Router]s in the same component
 * @param handleBackButton determines whether the [Router] should handle back button clicks or not
 * @param childFactory a factory function that creates new child instances
 * @return a new instance of [Router]
 */
fun <C : Parcelable, T : Any> ComponentContext.router(
    initialStack: () -> List<C>,
    configurationClass: KClass<out C>,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> {
    val routerEntryFactory = RouterEntryFactoryImpl(lifecycle = lifecycle, childFactory = childFactory)

    return RouterImpl(
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
        navigator = StackNavigatorImpl(routerEntryFactory = routerEntryFactory)
    )
}

/**
 * A convenience extension function for [ComponentContext.router].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.router(
    noinline initialStack: () -> List<C>,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> =
    router(
        initialStack = initialStack,
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory
    )

/**
 * A convenience extension function for [ComponentContext.router].
 */
inline fun <reified C : Parcelable, T : Any> ComponentContext.router(
    initialConfiguration: C,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> =
    router(
        initialStack = { listOf(initialConfiguration) },
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory
    )

/**
 * A convenience extension function for [ComponentContext.router].
 */
@Suppress("DeprecatedCallableAddReplaceWith")
@Deprecated(message = "Please use ComponentContext.router extension function with initialStack argument")
fun <C : Parcelable, T : Any> ComponentContext.router(
    initialConfiguration: () -> C,
    initialBackStack: () -> List<C> = ::emptyList,
    configurationClass: KClass<out C>,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> =
    router(
        initialStack = { initialBackStack() + initialConfiguration() },
        configurationClass = configurationClass,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

/**
 * A convenience extension function for [ComponentContext.router].
 */
@Suppress("DeprecatedCallableAddReplaceWith")
@Deprecated(message = "Please use ComponentContext.router extension function with initialStack argument")
inline fun <reified C : Parcelable, T : Any> ComponentContext.router(
    initialConfiguration: C,
    initialBackStack: List<C> = emptyList(),
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> =
    router(
        initialConfiguration = { initialConfiguration },
        initialBackStack = { initialBackStack },
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory
    )

/**
 * A convenience extension function for [ComponentContext.router].
 */
@Suppress("DeprecatedCallableAddReplaceWith")
@Deprecated(message = "Please use ComponentContext.router extension function with initialStack argument")
inline fun <reified C : Parcelable, T : Any> ComponentContext.router(
    noinline initialConfiguration: () -> C,
    noinline initialBackStack: () -> List<C> = ::emptyList,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> =
    router(
        initialConfiguration = initialConfiguration,
        initialBackStack = initialBackStack,
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory
    )
