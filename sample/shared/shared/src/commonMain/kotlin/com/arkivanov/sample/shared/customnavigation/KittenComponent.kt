package com.arkivanov.sample.shared.customnavigation

import com.arkivanov.decompose.value.Value

interface KittenComponent {

    val model: Value<Model>

    data class Model(
        val imageType: ImageType,
        val text: String,
    )

    enum class ImageType {
        CAT_1,
        CAT_2,
        CAT_3,
        CAT_4,
        CAT_5,
    }
}
