package com.arkivanov.sample.shared.counters

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.counters.counter.CounterContent
import com.arkivanov.sample.shared.useAsState
import csstype.AlignItems
import csstype.BoxSizing
import csstype.Display
import csstype.FlexDirection
import csstype.pct
import csstype.px
import mui.material.Box
import mui.material.Paper
import mui.material.PaperVariant
import mui.material.Stack
import mui.material.StackDirection
import mui.system.ResponsiveStyleValue
import mui.system.sx
import react.FC

val CountersContent: FC<RProps<CountersComponent>> = FC { props ->
    val firstChildStack by props.component.firstChildStack.useAsState()
    val secondChildStack by props.component.secondChildStack.useAsState()

    Box {
        sx {
            width = 100.pct
            padding = 16.px
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
        }

        Paper {
            variant = PaperVariant.outlined

            sx {
                display = Display.inlineBlock
            }

            Stack {
                direction = ResponsiveStyleValue(StackDirection.row)
                spacing = ResponsiveStyleValue(2)

                sx {
                    boxSizing = BoxSizing.borderBox
                    padding = 16.px
                }

                componentContent(component = firstChildStack.active.instance, content = CounterContent)
                componentContent(component = secondChildStack.active.instance, content = CounterContent)
            }
        }
    }
}
