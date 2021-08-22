package com.arkivanov.sample.dynamicfeatures.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1Component
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1Content
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1ContentImpl
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2Component
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2Content
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2ContentImpl

internal actual fun Feature1(
    componentContext: ComponentContext,
    magicNumber: Int,
    onFeature2: () -> Unit,
    onFinished: () -> Unit,
): Feature1 =
    Feature1Component(
        componentContext = componentContext,
        magicNumber = magicNumber,
        onFeature2 = onFeature2,
        onFinished = onFinished
    )

internal actual fun Feature1Content(): Feature1Content = Feature1ContentImpl()

internal actual fun Feature2(
    componentContext: ComponentContext,
    onFinished: () -> Unit
): Feature2 =
    Feature2Component(
        componentContext = componentContext,
        onFinished = onFinished
    )

internal actual fun Feature2Content(): Feature2Content = Feature2ContentImpl()
