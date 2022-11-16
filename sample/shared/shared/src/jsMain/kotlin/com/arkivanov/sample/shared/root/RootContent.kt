package com.arkivanov.sample.shared.root

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.counters.CountersContent
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesContent
import com.arkivanov.sample.shared.multipane.MultiPaneContent
import com.arkivanov.sample.shared.root.RootComponent.Child.CountersChild
import com.arkivanov.sample.shared.root.RootComponent.Child.CustomNavigationChild
import com.arkivanov.sample.shared.root.RootComponent.Child.DynamicFeaturesChild
import com.arkivanov.sample.shared.root.RootComponent.Child.MultiPaneChild
import com.arkivanov.sample.shared.useAsState
import csstype.BoxSizing
import csstype.Display
import csstype.Flex
import csstype.FlexDirection
import csstype.Overflow
import csstype.Position
import csstype.number
import csstype.pct
import csstype.px
import mui.material.BottomNavigation
import mui.material.BottomNavigationAction
import mui.material.Box
import mui.material.Icon
import mui.system.sx
import react.FC
import react.ReactNode
import react.create

var RootContent: FC<RProps<RootComponent>> = FC { props ->
    val childStack by props.component.childStack.useAsState()

    Box {
        sx {
            display = Display.flex
            flexDirection = FlexDirection.column
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
                overflowY = Overflow.clip
            }

            when (val child = childStack.active.instance) {
                is CountersChild -> componentContent(component = child.component, content = CountersContent)
                is MultiPaneChild -> componentContent(component = child.component, content = MultiPaneContent)
                is DynamicFeaturesChild -> componentContent(component = child.component, content = DynamicFeaturesContent)
                is CustomNavigationChild -> NotImplementedContent()
            }.let {}
        }

        BottomNavigation {
            sx {
                width = 100.pct
                flex = Flex(grow = number(0.0), shrink = number(0.0), basis = 0.px)
            }

            showLabels = true

            value = when (childStack.active.instance) {
                is CountersChild -> TabItem.COUNTERS
                is MultiPaneChild -> TabItem.MULTI_PANE
                is DynamicFeaturesChild -> TabItem.DYNAMIC_FEATURES
                is CustomNavigationChild -> TabItem.CUSTOM_NAVIGATION
            }

            onChange = { _, newValue ->
                when (newValue.unsafeCast<TabItem>()) {
                    TabItem.COUNTERS -> props.component.onCountersTabClicked()
                    TabItem.MULTI_PANE -> props.component.onMultiPaneTabClicked()
                    TabItem.DYNAMIC_FEATURES -> props.component.onDynamicFeaturesTabClicked()
                    TabItem.CUSTOM_NAVIGATION -> props.component.onCustomNavigationTabClicked()
                }
            }

            BottomNavigationAction {
                value = TabItem.COUNTERS
                label = ReactNode("Counters")
                icon = Icon.create { +"pin" }
            }

            BottomNavigationAction {
                value = TabItem.MULTI_PANE
                label = ReactNode("Multi-Pane")
                icon = Icon.create { +"list" }
            }

            BottomNavigationAction {
                value = TabItem.DYNAMIC_FEATURES
                label = ReactNode("Dynamic Features")
                icon = Icon.create { +"downloading" }
            }

            BottomNavigationAction {
                value = TabItem.CUSTOM_NAVIGATION
                label = ReactNode("Custom Navigation")
                icon = Icon.create { +"location_on" }
            }
        }
    }
}

private enum class TabItem {
    COUNTERS, MULTI_PANE, DYNAMIC_FEATURES, CUSTOM_NAVIGATION
}
