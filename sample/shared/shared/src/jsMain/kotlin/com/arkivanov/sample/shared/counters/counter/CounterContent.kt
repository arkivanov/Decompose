package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.dialog.DialogComponentContent
import com.arkivanov.sample.shared.useAsState
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Stack
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.responsive
import mui.system.sx
import react.FC
import web.cssom.AlignItems
import web.cssom.BoxSizing

internal val CounterContent: FC<RProps<CounterComponent>> = FC { props ->
    val model by props.component.model.useAsState()

    Stack {
        spacing = responsive(2)

        sx {
            alignItems = AlignItems.center
            boxSizing = BoxSizing.borderBox
        }

        Typography {
            variant = TypographyVariant.h6
            +model.title
        }

        Typography {
            variant = TypographyVariant.body1
            +model.text
        }

        Button {
            variant = ButtonVariant.contained
            color = ButtonColor.primary
            onClick = { props.component.onInfoClicked() }

            +"Info"
        }

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

    val dialogSlot by props.component.dialogSlot.useAsState()
    dialogSlot.child?.instance?.also { dialog ->
        componentContent(component = dialog, content = DialogComponentContent)
    }
}
