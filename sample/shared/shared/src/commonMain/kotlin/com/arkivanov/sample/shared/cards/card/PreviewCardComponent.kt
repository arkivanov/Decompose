package com.arkivanov.sample.shared.cards.card

import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.cards.card.CardComponent.Model

class PreviewCardComponent(
    color: Long = 0xFFFF0000,
) : CardComponent {

    override val model: Value<Model> =
        MutableValue(
            Model(
                color = color,
                title = "1",
                status = "Status: Resumed",
                text = "Count: 10",
            )
        )
}
