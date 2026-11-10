package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.PreviewComponentContext
import com.arkivanov.sample.shared.root.RootComponent.Child
import com.arkivanov.sample.shared.root.RootComponent.Child.TabsChild
import com.arkivanov.sample.shared.tabs.PreviewTabsComponent

@OptIn(ExperimentalDecomposeApi::class)
class PreviewRootComponent :
    RootComponent,
    ComponentContext by PreviewComponentContext,
    WebNavigationOwner.NoOp {

    override val stack: Value<ChildStack<*, Child>> =
        MutableValue(
            ChildStack(
                configuration = Unit,
                instance = TabsChild(component = PreviewTabsComponent()),
            )
        )

    override fun onBackClicked() {}
    override fun onBackClicked(toIndex: Int) {}
}
