package com.arkivanov.sample.shared.dynamicfeatures.feature2

import com.arkivanov.decompose.JetpackComponentContext

internal expect fun Feature2(
    componentContext: JetpackComponentContext,
    magicNumber: Int,
    onFinished: () -> Unit,
): Feature2
