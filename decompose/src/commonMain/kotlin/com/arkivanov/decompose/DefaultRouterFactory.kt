package com.arkivanov.decompose

import com.arkivanov.decompose.router.RouterEntryFactoryImpl
import com.arkivanov.decompose.router.RouterImpl
import com.arkivanov.decompose.router.StackHolderImpl
import com.arkivanov.decompose.router.StackNavigatorImpl
import com.arkivanov.decompose.router.StackSaverImpl
import com.arkivanov.essenty.backpressed.BackPressedRegistry
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.ParcelableContainer
import com.arkivanov.essenty.statekeeper.StateKeeper
import kotlin.reflect.KClass

internal class DefaultRouterFactory(
    private val lifecycle: Lifecycle,
    private val stateKeeper: StateKeeper,
    private val instanceKeeper: InstanceKeeper,
    private val backPressedRegistry: BackPressedRegistry
) : RouterFactory {

    override fun <C : Parcelable, T : Any> router(
        initialConfiguration: () -> C,
        initialBackStack: () -> List<C>,
        configurationClass: KClass<out C>,
        key: String,
        handleBackButton: Boolean,
        childFactory: (configuration: C, ComponentContext) -> T
    ): Router<C, T> {
        val routerEntryFactory = RouterEntryFactoryImpl(lifecycle = lifecycle, childFactory = childFactory)

        return RouterImpl(
            lifecycle = lifecycle,
            backPressedRegistry = backPressedRegistry,
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
}
