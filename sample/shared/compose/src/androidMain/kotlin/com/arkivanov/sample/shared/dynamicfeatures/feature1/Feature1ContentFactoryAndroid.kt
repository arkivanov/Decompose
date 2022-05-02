package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatureContent
import com.arkivanov.sample.shared.dynamicfeatures.featureContent

internal actual fun feature1Content(): DynamicFeatureContent<Feature1> = featureContent()
