package com.arkivanov.sample.shared.dynamicfeatures

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DynamicFeature
import com.arkivanov.sample.shared.dynamicfeatures.feature1.Feature1
import com.arkivanov.sample.shared.dynamicfeatures.feature2.Feature2

interface DynamicFeatures {

    val childStack: ReqValue<ChildStack<*, Child>>

    sealed class Child {
        class Feature1Child(val feature1: DynamicFeature<Feature1>) : Child()
        class Feature2Child(val feature2: DynamicFeature<Feature2>) : Child()
    }
}
