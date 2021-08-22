package com.arkivanov.sample.dynamicfeatures.shared.feature2

import com.arkivanov.decompose.value.Value

interface Feature2 {

    val models: Value<Model>

    fun onCloseClicked()

    data class Model(
        val text: String,
    )
}
