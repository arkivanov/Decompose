package com.arkivanov.sample.shared.root

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackHandlerOwner
import com.arkivanov.sample.shared.customnavigation.CustomNavigationComponent
import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeaturesComponent
import com.arkivanov.sample.shared.pages.PagesComponent
import com.arkivanov.sample.shared.tabs.TabsComponent

interface RootComponent : BackHandlerOwner {

    val stack: Value<ChildStack<*, Child>>

    fun onBackClicked()
    fun onBackClicked(toIndex: Int)

    sealed class Child {
        class TabsChild(val component: TabsComponent) : Child()
        class DynamicFeaturesChild(val component: DynamicFeaturesComponent) : Child()
        class CustomNavigationChild(val component: CustomNavigationComponent) : Child()
        class PagesChild(val component: PagesComponent) : Child()
    }
}
