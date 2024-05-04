package com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureComponent.Child.ErrorChild
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureComponent.Child.FeatureChild
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureComponent.Child.LoadingChild
import com.arkivanov.sample.shared.useAsState
import mui.material.Typography
import react.ChildrenBuilder
import react.FC

@Suppress("FunctionName") // Factory function
fun <T : Any> DynamicFeatureContent(
    content: ChildrenBuilder.(T) -> Unit,
): FC<RProps<DynamicFeatureComponent<T>>> = FC { props ->
    val stack by props.component.childStack.useAsState()

    when (val child = stack.active.instance) {
        is LoadingChild -> Typography { +"Loading ${child.name}" }
        is FeatureChild -> content(child.feature)
        is ErrorChild -> Typography { +"Error loading ${child.name}" }
    }
}
