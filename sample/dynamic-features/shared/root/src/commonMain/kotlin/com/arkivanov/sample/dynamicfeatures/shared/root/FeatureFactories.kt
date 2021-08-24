package com.arkivanov.sample.dynamicfeatures.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1
import com.arkivanov.sample.dynamicfeatures.shared.feature1.Feature1Content
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2
import com.arkivanov.sample.dynamicfeatures.shared.feature2.Feature2Content

internal expect fun Feature1(
    componentContext: ComponentContext,
    magicNumber: Int,
    onFeature2: () -> Unit,
    onFinished: () -> Unit,
): Feature1

internal expect fun Feature1Content(): Feature1Content

internal expect fun Feature2(
    componentContext: ComponentContext,
    onFinished: () -> Unit
): Feature2

internal expect fun Feature2Content(): Feature2Content
