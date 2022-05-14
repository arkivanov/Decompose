package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.decompose.ComponentContext

internal expect fun Feature1(
    componentContext: ComponentContext,
    onFeature2: () -> Unit,
): Feature1
