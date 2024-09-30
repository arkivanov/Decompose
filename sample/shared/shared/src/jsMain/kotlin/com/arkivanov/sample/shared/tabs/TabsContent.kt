package com.arkivanov.sample.shared.tabs

import com.arkivanov.sample.shared.AppBar
import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.Scaffold
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.counters.CountersContent
import com.arkivanov.sample.shared.multipane.MultiPaneContent
import com.arkivanov.sample.shared.root.NotImplementedContent
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CardsChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CountersChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MenuChild
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.MultiPaneChild
import com.arkivanov.sample.shared.useAsState
import mui.material.BottomNavigation
import mui.material.BottomNavigationAction
import mui.material.Box
import mui.material.Icon
import mui.system.sx
import react.FC
import react.ReactNode
import react.create
import web.cssom.BoxSizing
import web.cssom.Display
import web.cssom.Flex
import web.cssom.FlexDirection
import web.cssom.Overflow
import web.cssom.Position
import web.cssom.number
import web.cssom.pct
import web.cssom.px

internal val TabsContent: FC<RProps<TabsComponent>> = FC { props ->
    val stack by props.component.stack.useAsState()

    Box {
        sx {
            display = Display.flex
            flexDirection = FlexDirection.column
            boxSizing = BoxSizing.borderBox
            position = Position.fixed
            padding = 0.px
            top = 0.px
            bottom = 0.px
            left = 0.px
            right = 0.px
        }

        Box {
            sx {
                width = 100.pct
                boxSizing = BoxSizing.borderBox
                flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
                display = Display.flex
                flexDirection = FlexDirection.column
                overflowY = Overflow.clip
            }

            when (val child = stack.active.instance) {
                is MenuChild ->
                    Scaffold {
                        appBar = AppBar(title = "Decompose Sample")
                        NotImplementedContent()
                    }

                is CountersChild -> componentContent(component = child.component, content = CountersContent)

                is CardsChild ->
                    Scaffold {
                        appBar = AppBar(title = "Cards")
                        NotImplementedContent()
                    }

                is MultiPaneChild -> componentContent(component = child.component, content = MultiPaneContent)
            }.let {}
        }

        BottomNavigation {
            sx {
                width = 100.pct
                flex = Flex(grow = number(0.0), shrink = number(0.0), basis = 0.px)
            }

            showLabels = true

            value = when (stack.active.instance) {
                is MenuChild -> TabItem.MENU
                is CountersChild -> TabItem.COUNTERS
                is CardsChild -> TabItem.CARDS
                is MultiPaneChild -> TabItem.MULTI_PANE
            }

            onChange = { _, newValue ->
                when (newValue.unsafeCast<TabItem>()) {
                    TabItem.MENU -> props.component.onMenuTabClicked()
                    TabItem.COUNTERS -> props.component.onCountersTabClicked()
                    TabItem.MULTI_PANE -> props.component.onMultiPaneTabClicked()
                    TabItem.CARDS -> props.component.onCardsTabClicked()
                }
            }

            BottomNavigationAction {
                value = TabItem.MENU
                label = ReactNode("Menu")
                icon = Icon.create { +"menu" }
            }

            BottomNavigationAction {
                value = TabItem.COUNTERS
                label = ReactNode("Counters")
                icon = Icon.create { +"pin" }
            }

            BottomNavigationAction {
                value = TabItem.CARDS
                label = ReactNode("Cards")
                icon = Icon.create { +"note_stack" }
            }

            BottomNavigationAction {
                value = TabItem.MULTI_PANE
                label = ReactNode("Multi-Pane")
                icon = Icon.create { +"list" }
            }
        }
    }
}

private enum class TabItem {
    MENU,
    COUNTERS,
    CARDS,
    MULTI_PANE,
}
