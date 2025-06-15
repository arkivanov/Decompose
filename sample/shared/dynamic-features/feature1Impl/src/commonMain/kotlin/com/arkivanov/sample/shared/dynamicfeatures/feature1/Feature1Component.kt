package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.decompose.JetpackComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.dynamicfeatures.feature1.Feature1.Model

class Feature1Component(
    componentContext: JetpackComponentContext,
    private val onFeature2: () -> Unit,
) : Feature1, JetpackComponentContext by componentContext {

    override val models: Value<Model> =
        MutableValue(
            Model(
                title = "Hello from Feature1!",
            )
        )

    override fun onFeature2Clicked() {
        onFeature2()
    }
}
