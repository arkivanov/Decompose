package com.arkivanov.sample.shared.dynamicfeatures.feature2

import com.arkivanov.decompose.ComponentContext

internal expect fun Feature2(
    componentContext: ComponentContext,
    magicNumber: Int,
    onFinished: () -> Unit,
): Feature2
