package com.arkivanov.sample.shared.dynamicfeatures

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeatureComponent
import com.arkivanov.sample.shared.dynamicfeatures.feature1.Feature1
import com.arkivanov.sample.shared.dynamicfeatures.feature2.Feature2

interface DynamicFeaturesComponent {

    val stack: Value<ChildStack<*, Child>>

    fun onCloseClicked()

    sealed class Child {
        class Feature1Child(val feature1: DynamicFeatureComponent<Feature1>) : Child()
        class Feature2Child(val feature2: DynamicFeatureComponent<Feature2>) : Child()
    }
}
