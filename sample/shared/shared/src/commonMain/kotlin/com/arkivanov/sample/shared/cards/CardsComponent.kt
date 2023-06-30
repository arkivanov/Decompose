package com.arkivanov.sample.shared.cards

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.cards.card.CardComponent

interface CardsComponent {

    val stack: Value<ChildStack<*, CardComponent>>

    fun onCardSwiped(index: Int)
    fun onAddClicked()
    fun onRemoveClicked()
}
