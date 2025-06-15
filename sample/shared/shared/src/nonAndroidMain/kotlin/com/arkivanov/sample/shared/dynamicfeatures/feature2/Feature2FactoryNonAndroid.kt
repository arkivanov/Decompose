package com.arkivanov.sample.shared.dynamicfeatures.feature2

import com.arkivanov.decompose.JetpackComponentContext

internal actual fun Feature2(
    componentContext: JetpackComponentContext,
    magicNumber: Int,
    onFinished: () -> Unit,
): Feature2 =
    Feature2Component(
        componentContext = componentContext,
        magicNumber = magicNumber,
        onFinished = onFinished,
    )
