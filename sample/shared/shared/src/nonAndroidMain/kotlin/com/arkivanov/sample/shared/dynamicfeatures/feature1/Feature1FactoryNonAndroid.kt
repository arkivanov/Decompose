package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.decompose.JetpackComponentContext

internal actual fun Feature1(
    componentContext: JetpackComponentContext,
    onFeature2: () -> Unit,
): Feature1 =
    Feature1Component(
        componentContext = componentContext,
        onFeature2 = onFeature2,
    )
