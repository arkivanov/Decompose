package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.Counters
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatures
import com.arkivanov.sample.shared.multipane.MultiPane

interface Root {

    val routerState: Value<RouterState<*, Child>>

    fun onCountersTabClicked()
    fun onMultiPaneTabClicked()
    fun onDynamicFeaturesTabClicked()

    sealed class Child {
        class CountersChild(val component: Counters) : Child()
        class MultiPaneChild(val component: MultiPane) : Child()
        class DynamicFeaturesChild(val component: DynamicFeatures) : Child()
    }
}
