package com.arkivanov.sample.shared.cards.card

import com.arkivanov.decompose.value.Value

interface CardComponent {

    val model: Value<Model>

    data class Model(
        val color: Long,
        val title: String,
        val status: String = "",
        val text: String = "",
    )
}
