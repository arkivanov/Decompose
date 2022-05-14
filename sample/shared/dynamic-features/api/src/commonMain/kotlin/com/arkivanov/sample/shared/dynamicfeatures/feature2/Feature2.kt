package com.arkivanov.sample.shared.dynamicfeatures.feature2

import com.arkivanov.decompose.value.Value

interface Feature2 {

    val models: Value<Model>

    fun onCloseClicked()

    data class Model(
        val title: String,
        val text: String,
    )
}
