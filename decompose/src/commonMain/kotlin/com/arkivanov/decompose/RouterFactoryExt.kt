package com.arkivanov.decompose

import com.arkivanov.decompose.router.RouterEntryFactoryImpl
import com.arkivanov.decompose.router.RouterImpl
import com.arkivanov.decompose.router.StackHolderImpl
import com.arkivanov.decompose.router.StackNavigatorImpl
import com.arkivanov.decompose.router.StackSaverImpl
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import kotlin.reflect.KClass

/**
 * Creates a new [Router].
 *
 * @param initialConfiguration a configuration of a component that should be displayed if there is no saved state
 * @param initialBackStack a stack of component configurations that should be set as back stack if there is no saved state
 * @param configurationClass a [KClass] of the component configurations
 * @param key a key of the [Router], should be unique if there are multiple [Router]s in the same component
 * @param handleBackButton determines whether the [Router] should handle back button clicks or not
 * @param childFactory a factory function that creates new child instances
 * @return a new instance of [Router]
 */
fun <C : Parcelable, T : Any> ComponentContext.router(
    initialConfiguration: () -> C,
    initialBackStack: () -> List<C> = ::emptyList,
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
            initialConfiguration = initialConfiguration,
            initialBackStack = initialBackStack,
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
