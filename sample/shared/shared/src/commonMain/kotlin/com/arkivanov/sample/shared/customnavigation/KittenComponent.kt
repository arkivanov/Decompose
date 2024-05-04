package com.arkivanov.sample.shared.customnavigation

import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.ImageResourceId

interface KittenComponent {

    val model: Value<Model>

    data class Model(
        val imageResourceId: ImageResourceId,
        val text: String,
    )
}
