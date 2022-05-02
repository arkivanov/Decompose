package com.arkivanov.sample.shared.dynamicfeatures.feature2

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.useAsState
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Stack
import mui.material.Typography
import mui.system.ResponsiveStyleValue
import react.FC

val Feature2Content: FC<RProps<Feature2>> = FC { props ->
    val model by props.component.models.useAsState()

    Stack {
        spacing = ResponsiveStyleValue(2)

        Typography { +model.title }

        Typography { +model.text }

        Button {
            variant = ButtonVariant.contained
            color = ButtonColor.primary
            onClick = { props.component.onCloseClicked() }

            +"Close"
        }
    }
}
