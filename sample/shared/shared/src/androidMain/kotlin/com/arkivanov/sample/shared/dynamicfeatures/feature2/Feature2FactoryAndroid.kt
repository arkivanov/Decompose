package com.arkivanov.sample.shared.dynamicfeatures.feature2

import com.arkivanov.decompose.JetpackComponentContext
import com.arkivanov.sample.shared.dynamicfeatures.feature

internal actual fun Feature2(
    componentContext: JetpackComponentContext,
    magicNumber: Int,
    onFinished: () -> Unit,
): Feature2 =
    feature(componentContext, magicNumber, onFinished)
