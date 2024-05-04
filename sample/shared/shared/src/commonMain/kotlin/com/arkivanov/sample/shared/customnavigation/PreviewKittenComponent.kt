package com.arkivanov.sample.shared.customnavigation

import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.ImageResourceId
import com.arkivanov.sample.shared.customnavigation.KittenComponent.Model

class PreviewKittenComponent : KittenComponent {

    override val model: Value<Model> = MutableValue(Model(imageResourceId = ImageResourceId.CAT_1, text = "Kitten"))
}
