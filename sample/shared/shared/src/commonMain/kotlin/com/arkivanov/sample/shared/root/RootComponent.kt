package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.router.overlay.ChildOverlay
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.CountersComponent
import com.arkivanov.sample.shared.customnavigation.CustomNavigationComponent
import com.arkivanov.sample.shared.dialog.DialogComponent
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent
import com.arkivanov.sample.shared.multipane.MultiPaneComponent

interface RootComponent {

    val childStack: Value<ChildStack<*, Child>>
    val dialog: Value<ChildOverlay<*, DialogComponent>>

    fun onCountersTabClicked()
    fun onMultiPaneTabClicked()
    fun onDynamicFeaturesTabClicked()
    fun onCustomNavigationTabClicked()
    fun onInfoActionClicked()

    sealed class Child {
        class CountersChild(val component: CountersComponent) : Child()
        class MultiPaneChild(val component: MultiPaneComponent) : Child()
        class DynamicFeaturesChild(val component: DynamicFeaturesComponent) : Child()
        class CustomNavigationChild(val component: CustomNavigationComponent) : Child()
    }
}
