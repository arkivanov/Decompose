package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.useAsState
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Stack
import mui.material.Typography
import mui.system.responsive
import react.FC

val Feature1Content: FC<RProps<Feature1>> = FC { props ->
    val model by props.component.models.useAsState()

    Stack {
        spacing = responsive(2)

        Typography { +model.title }

        Button {
            variant = ButtonVariant.contained
            color = ButtonColor.primary
            onClick = { props.component.onFeature2Clicked() }

            +"Go to Feature2"
        }
    }
}
