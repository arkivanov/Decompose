package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.decompose.value.Value

interface Feature1 {

    val models: Value<Model>

    fun onFeature2Clicked()

    data class Model(
        val title: String,
    )
}
