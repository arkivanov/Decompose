package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.decompose.JetpackComponentContext

internal expect fun Feature1(
    componentContext: JetpackComponentContext,
    onFeature2: () -> Unit,
): Feature1
