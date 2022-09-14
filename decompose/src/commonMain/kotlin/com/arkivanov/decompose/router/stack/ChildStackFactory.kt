package com.arkivanov.decompose.router.stack

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.backhandler.child
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackHandler
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.parcelable.consumeRequired
import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlin.reflect.KClass

/**
 * Initializes and manages a stack of components.
 *
 * @param source a source of navigation events
 * @param initialStack a stack of component configurations (ordered from tail to head) that should be set
 * if there is no saved state, must be not empty and unique
 * @param configurationClass a [KClass] of the component configurations
 * @param key a key of the stack, must be unique if there are multiple stacks in the same component
 * @param handleBackButton determines whether the overlay should be automatically dismissed
 * on back button press or not, default is `false`.
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
): Value<ChildStack<C, T>> =
    childStack(
        lifecycle = lifecycle,
        stateKeeper = stateKeeper,
        instanceKeeper = instanceKeeper,
        backHandler = backHandler,
        source = source,
        initialStack = initialStack,
        saveConfiguration = { ParcelableContainer(it) },
        restoreConfiguration = { it.consumeRequired(configurationClass) },
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory,
    )

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

internal fun <C : Any, T : Any> childStack(
    lifecycle: Lifecycle,
    stateKeeper: StateKeeper,
    instanceKeeper: InstanceKeeper,
    backHandler: BackHandler,
    source: StackNavigationSource<C>,
    initialStack: () -> List<C>,
    saveConfiguration: (C) -> ParcelableContainer,
    restoreConfiguration: (ParcelableContainer) -> C,
    key: String,
    handleBackButton: Boolean = false,
    childFactory: (configuration: C, ComponentContext) -> T,
): Value<ChildStack<C, T>> {
    val routerBackHandler = backHandler.takeIf { handleBackButton }?.child()

    val routerEntryFactory =
        RouterEntryFactoryImpl(
            lifecycle = lifecycle,
            backHandler = backHandler.child(),
            childFactory = childFactory,
        )

    val controller =
        ChildStackController(
            lifecycle = lifecycle,
            backHandler = routerBackHandler,
            stackHolder = StackHolderImpl(
                initialStack = initialStack,
                lifecycle = lifecycle,
                key = key,
                stackSaver = StackSaverImpl(
                    stateKeeper = stateKeeper,
                    saveConfiguration = saveConfiguration,
                    restoreConfiguration = restoreConfiguration,
                ),
                instanceKeeper = instanceKeeper,
                routerEntryFactory = routerEntryFactory
            ),
            controller = StackControllerImpl(routerEntryFactory = routerEntryFactory),
            source = source,
        )

    return controller.stack
}
