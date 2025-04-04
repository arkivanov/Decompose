package com.arkivanov.sample.shared.tabs

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.counters.PreviewCountersComponent
import com.arkivanov.sample.shared.tabs.TabsComponent.Child.CountersChild

@OptIn(ExperimentalDecomposeApi::class)
class PreviewTabsComponent : TabsComponent, WebNavigationOwner.NoOp {

    override val stack: Value<ChildStack<*, TabsComponent.Child>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = CountersChild(PreviewCountersComponent()),
            )
        )

    override fun onMenuTabClicked() {}
    override fun onCountersTabClicked() {}
    override fun onCardsTabClicked() {}
    override fun onMultiPaneTabClicked() {}
}
