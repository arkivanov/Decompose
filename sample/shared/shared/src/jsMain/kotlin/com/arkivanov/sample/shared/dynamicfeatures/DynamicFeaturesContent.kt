package com.arkivanov.sample.shared.dynamicfeatures

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child.Feature1Child
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent.Child.Feature2Child
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureContent
import com.arkivanov.sample.shared.dynamicfeatures.feature1.Feature1Content
import com.arkivanov.sample.shared.dynamicfeatures.feature2.Feature2Content
import com.arkivanov.sample.shared.useAsState
import mui.material.Box
import mui.material.Paper
import mui.material.PaperVariant
import mui.system.sx
import react.FC
import web.cssom.AlignItems
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.pct
import web.cssom.px

val DynamicFeaturesContent: FC<RProps<DynamicFeaturesComponent>> = FC { props ->
    val stack by props.component.stack.useAsState()

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
                padding = 16.px
            }

            when (val child = stack.active.instance) {
                is Feature1Child ->
                    componentContent(
                        component = child.feature1,
                        content = DynamicFeatureContent { feature ->
                            componentContent(component = feature, content = Feature1Content)
                        }
                    )

                is Feature2Child ->
                    componentContent(
                        component = child.feature2,
                        content = DynamicFeatureContent { feature ->
                            componentContent(component = feature, content = Feature2Content)
                        }
                    )
            }
        }
    }
}
