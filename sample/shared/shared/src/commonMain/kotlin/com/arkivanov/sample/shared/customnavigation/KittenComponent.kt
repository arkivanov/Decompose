package com.arkivanov.sample.shared.customnavigation

import com.arkivanov.decompose.value.Value
import kotlinx.serialization.Serializable

interface KittenComponent {

    val model: Value<Model>

    data class Model(
        val imageType: ImageType,
        val text: String,
    )

    @Serializable
    enum class ImageType {
        CAT_1,
        CAT_2,
        CAT_3,
        CAT_4,
        CAT_5,
    }
}
