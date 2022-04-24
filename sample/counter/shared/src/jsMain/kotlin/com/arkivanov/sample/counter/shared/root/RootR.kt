package com.arkivanov.sample.counter.shared.root

import com.arkivanov.sample.counter.shared.RProps
import com.arkivanov.sample.counter.shared.counter.CounterR
import com.arkivanov.sample.counter.shared.inner.InnerR
import com.arkivanov.sample.counter.shared.uniqueKey
import com.arkivanov.sample.counter.shared.useAsState
import csstype.AlignItems
import csstype.BoxSizing
import csstype.JustifyContent
import csstype.pct
import csstype.px
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Paper
import mui.material.PaperVariant
import mui.material.Stack
import mui.material.StackDirection
import mui.system.ResponsiveStyleValue
import mui.system.sx
import react.FC
import react.key

var RootR: FC<RProps<CounterRoot>> = FC { props ->
    val routerState by props.component.routerState.useAsState()

    Paper {
        variant = PaperVariant.outlined

        Stack {
            direction = ResponsiveStyleValue(StackDirection.column)
            spacing = ResponsiveStyleValue(2)

            sx {
                alignItems = AlignItems.center
                justifyContent = JustifyContent.center
                boxSizing = BoxSizing.borderBox
                width = 100.pct
                padding = 16.px
            }

            CounterR {
                component = props.component.counter
                key = component.uniqueKey()

                sx {
                    width = 100.pct
                }
            }

            Button {
                variant = ButtonVariant.contained
                color = ButtonColor.primary
                onClick = { props.component.onNextChild() }

                +"Next child"
            }

            Button {
                variant = ButtonVariant.contained
                color = ButtonColor.primary
                disabled = !routerState.activeChild.instance.isBackEnabled
                onClick = { props.component.onPrevChild() }

                +"Prev child"
            }

            InnerR {
                component = routerState.activeChild.instance.inner
                key = component.uniqueKey()

                sx {
                    width = 100.pct
                }
            }
        }
    }
}
