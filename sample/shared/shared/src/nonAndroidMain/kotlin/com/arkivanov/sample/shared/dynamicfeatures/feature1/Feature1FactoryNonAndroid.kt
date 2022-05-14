package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.decompose.ComponentContext

internal actual fun Feature1(
    componentContext: ComponentContext,
    onFeature2: () -> Unit,
): Feature1 =
    Feature1Component(
        componentContext = componentContext,
        onFeature2 = onFeature2,
    )
