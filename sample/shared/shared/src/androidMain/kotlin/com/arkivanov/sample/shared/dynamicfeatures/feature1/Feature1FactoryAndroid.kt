package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.sample.shared.dynamicfeatures.feature

internal actual fun Feature1(
    componentContext: ComponentContext,
    onFeature2: () -> Unit,
): Feature1 =
    feature(componentContext, onFeature2)
