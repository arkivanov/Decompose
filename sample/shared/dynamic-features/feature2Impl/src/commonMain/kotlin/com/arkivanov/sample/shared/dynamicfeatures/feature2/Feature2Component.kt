package com.arkivanov.sample.shared.dynamicfeatures.feature2

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.dynamicfeatures.feature2.Feature2.Model

class Feature2Component(
    componentContext: ComponentContext,
    magicNumber: Int,
    private val onFinished: () -> Unit,
) : Feature2, ComponentContext by componentContext {

    override val models: Value<Model> =
        MutableValue(
            Model(
                title = "Hello from Feature2!",
                text = "Magic number: $magicNumber",
            )
        )

    override fun onCloseClicked() {
        onFinished()
    }
}
