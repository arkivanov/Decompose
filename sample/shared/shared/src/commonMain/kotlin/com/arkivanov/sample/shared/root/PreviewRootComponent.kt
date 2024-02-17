package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.PreviewCountersComponent
import com.arkivanov.sample.shared.root.RootComponent.Child
import com.arkivanov.sample.shared.root.RootComponent.Child.CountersChild

class PreviewRootComponent : RootComponent {

    override val childStack: Value<ChildStack<*, Child>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = CountersChild(component = PreviewCountersComponent()),
            )
        )

    override fun onCountersTabClicked() {}
    override fun onCardsTabClicked() {}
    override fun onMultiPaneTabClicked() {}
    override fun onDynamicFeaturesTabClicked() {}
    override fun onCustomNavigationTabClicked() {}
    override fun onPagesTabClicked() {}
}
