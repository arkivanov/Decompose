package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.decompose.JetpackComponentContext
import com.arkivanov.sample.shared.dynamicfeatures.feature

internal actual fun Feature1(
    componentContext: JetpackComponentContext,
    onFeature2: () -> Unit,
): Feature1 =
    feature(componentContext, onFeature2)
