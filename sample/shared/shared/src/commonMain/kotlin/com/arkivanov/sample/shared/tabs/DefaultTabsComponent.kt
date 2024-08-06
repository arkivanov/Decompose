package com.arkivanov.sample.shared.tabs

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.bringToFront
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.cards.DefaultCardsComponent
import com.arkivanov.sample.shared.counters.DefaultCountersComponent
import com.arkivanov.sample.shared.menu.DefaultMenuComponent
import com.arkivanov.sample.shared.multipane.DefaultMultiPaneComponent
import com.arkivanov.sample.shared.tabs.TabsComponent.Child
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CardsChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CountersChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MenuChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MultiPaneChild
import kotlinx.serialization.Serializable

internal class DefaultTabsComponent(
    componentContext: ComponentContext,
    private val onDynamicFeaturesItemSelected: () -> Unit,
    private val onCustomNavigationItemSelected: () -> Unit,
    private val onPagesItemSelected: () -> Unit,
    private val onSharedTransitionsItemSelected: () -> Unit,
) : TabsComponent, ComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    override val stack: Value<ChildStack<*, Child>> =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialConfiguration = Config.Menu,
            childFactory = ::child,
        )

    private fun child(config: Config, componentContext: ComponentContext): Child =
        when (config) {
            is Config.Menu ->
                MenuChild(
                    DefaultMenuComponent(
                        onDynamicFeaturesItemSelected = onDynamicFeaturesItemSelected,
                        onCustomNavigationItemSelected = onCustomNavigationItemSelected,
                        onPagesItemSelected = onPagesItemSelected,
                        onSharedTransitionsItemSelected = onSharedTransitionsItemSelected,
                    )
                )

            is Config.Counters -> CountersChild(DefaultCountersComponent(componentContext))
            is Config.MultiPane -> MultiPaneChild(DefaultMultiPaneComponent(componentContext))
            is Config.Cards -> CardsChild(DefaultCardsComponent(componentContext))
        }

    override fun onMenuTabClicked() {
        nav.bringToFront(Config.Menu)
    }

    override fun onCountersTabClicked() {
        nav.bringToFront(Config.Counters)
    }

    override fun onCardsTabClicked() {
        nav.bringToFront(Config.Cards)
    }

    override fun onMultiPaneTabClicked() {
        nav.bringToFront(Config.MultiPane)
    }

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Menu : Config

        @Serializable
        data object Counters : Config

        @Serializable
        data object Cards : Config

        @Serializable
        data object MultiPane : Config
    }
}
