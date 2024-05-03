package com.arkivanov.sample.shared.tabs

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.cards.CardsComponent
import com.arkivanov.sample.shared.counters.CountersComponent
import com.arkivanov.sample.shared.menu.MenuComponent
import com.arkivanov.sample.shared.multipane.MultiPaneComponent

interface TabsComponent {

    val stack: Value<ChildStack<*, Child>>

    fun onMenuTabClicked()
    fun onCountersTabClicked()
    fun onCardsTabClicked()
    fun onMultiPaneTabClicked()

    sealed class Child {
        class MenuChild(val component: MenuComponent) : Child()
        class CountersChild(val component: CountersComponent) : Child()
        class CardsChild(val component: CardsComponent) : Child()
        class MultiPaneChild(val component: MultiPaneComponent) : Child()
    }
}
