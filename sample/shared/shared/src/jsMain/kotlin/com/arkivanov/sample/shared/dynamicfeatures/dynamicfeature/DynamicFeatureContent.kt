package com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.useAsState
import mui.material.Typography
import react.ChildrenBuilder
import react.FC

@Suppress("FunctionName") // Factory function
fun <T : Any> DynamicFeatureContent(
    content: ChildrenBuilder.(T) -> Unit,
): FC<RProps<DynamicFeature<T>>> = FC { props ->
    val childStack by props.component.childStack.useAsState()

    when (val child = childStack.active.instance) {
        is DynamicFeature.Child.Loading -> Typography { +"Loading ${child.name}" }
        is DynamicFeature.Child.Feature -> content(child.feature)
        is DynamicFeature.Child.Error -> Typography { +"Error loading ${child.name}" }
    }
}
