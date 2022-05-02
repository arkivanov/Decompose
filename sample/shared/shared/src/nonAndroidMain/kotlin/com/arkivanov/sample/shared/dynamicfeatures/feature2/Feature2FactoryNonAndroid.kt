package com.arkivanov.sample.shared.dynamicfeatures.feature2

import com.arkivanov.decompose.ComponentContext

internal actual fun Feature2(
    componentContext: ComponentContext,
    magicNumber: Int,
    onFinished: () -> Unit,
): Feature2 =
    Feature2Component(
        componentContext = componentContext,
        magicNumber = magicNumber,
        onFinished = onFinished,
    )
