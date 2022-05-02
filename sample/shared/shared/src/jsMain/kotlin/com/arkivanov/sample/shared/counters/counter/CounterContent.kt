package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.useAsState
import csstype.AlignItems
import csstype.BoxSizing
import csstype.px
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Paper
import mui.material.PaperVariant
import mui.material.Stack
import mui.material.Typography
import mui.system.ResponsiveStyleValue
import mui.system.sx
import react.FC

internal val CounterContent: FC<RProps<Counter>> = FC { props ->
    val model by props.component.model.useAsState()

    Paper {
        variant = PaperVariant.outlined

        Stack {
            spacing = ResponsiveStyleValue(2)

            sx {
                alignItems = AlignItems.center
                padding = 16.px
                boxSizing = BoxSizing.borderBox
            }

            Typography {
                variant = "h6"
                +model.title
            }

            Typography { +model.text }

            Button {
                variant = ButtonVariant.contained
                color = ButtonColor.primary
                onClick = { props.component.onNextClicked() }

                +"Next"
            }

            Button {
                variant = ButtonVariant.contained
                disabled = !model.isBackEnabled
                onClick = { props.component.onPrevClicked() }

                +"Prev"
            }
        }
    }
}
