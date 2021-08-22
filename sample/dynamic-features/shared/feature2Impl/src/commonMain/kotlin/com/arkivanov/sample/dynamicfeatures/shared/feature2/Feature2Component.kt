package com.arkivanov.sample.dynamicfeatures.shared.feature2

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2.Model

class Feature2Component(
    componentContext: ComponentContext,
    private val onFinished: () -> Unit,
) : Feature2, ComponentContext by componentContext {

    override val models: Value<Model> =
        MutableValue(
            Model(
                text = "Hello from Feature2!",
            )
        )

    override fun onCloseClicked() {
        onFinished()
    }
}
