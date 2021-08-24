package com.arkivanov.sample.dynamicfeatures.shared.feature1

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1.Model

class Feature1Component(
    componentContext: ComponentContext,
    magicNumber: Int,
    private val onFeature2: () -> Unit,
    private val onFinished: () -> Unit,
) : Feature1, ComponentContext by componentContext {

    override val models: Value<Model> =
        MutableValue(
            Model(
                title = "Hello from Feature1!",
                text = "Magic number: $magicNumber"
            )
        )

    override fun onFeature2Clicked() {
        onFeature2()
    }

    override fun onCloseClicked() {
        onFinished()
    }
}
