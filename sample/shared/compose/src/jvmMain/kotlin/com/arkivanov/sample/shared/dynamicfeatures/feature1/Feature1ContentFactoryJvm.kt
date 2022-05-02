package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatureContent

internal actual fun feature1Content(): DynamicFeatureContent<Feature1> = Feature1Content()
