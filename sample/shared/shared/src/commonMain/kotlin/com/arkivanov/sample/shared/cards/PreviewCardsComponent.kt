package com.arkivanov.sample.shared.cards

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.cards.card.CardComponent
import com.arkivanov.sample.shared.cards.card.PreviewCardComponent

class PreviewCardsComponent : CardsComponent {

    override val stack: Value<ChildStack<*, CardComponent>> =
        MutableValue(
            ChildStack(
                active = Child.Created(
                    configuration = 1,
                    instance = PreviewCardComponent(color = 0xFFFF0000),
                ),
                backStack = listOf(
                    Child.Created(
                        configuration = 2,
                        instance = PreviewCardComponent(color = 0xFF0000FF),
                    )
                ),
            )
        )

    override fun onCardSwiped(index: Int) {}
    override fun onAddClicked() {}
    override fun onRemoveClicked() {}
}
