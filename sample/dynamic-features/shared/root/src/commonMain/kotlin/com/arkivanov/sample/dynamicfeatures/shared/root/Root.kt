package com.arkivanov.sample.dynamicfeatures.shared.root

import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2
import com.arkivanov.sample.dynamicfeatures.shared.main.Main
import com.arkivanov.sample.dynamicfeatures.shared.root.dynamicfeature.DynamicFeature

interface Root {

    val routerState: Value<RouterState<*, Child>>

    sealed interface Child {
        class MainChild(val main: Main) : Child
        class Feature1Child(val feature1: DynamicFeature<Feature1>) : Child
        class Feature2Child(val feature2: DynamicFeature<Feature2>) : Child
    }
}
