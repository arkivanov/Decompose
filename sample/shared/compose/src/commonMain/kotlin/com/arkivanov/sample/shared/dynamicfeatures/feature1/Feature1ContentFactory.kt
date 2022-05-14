package com.arkivanov.sample.shared.dynamicfeatures.feature1

import com.arkivanov.sample.shared.dynamicfeatures.DynamicFeatureContent

internal expect fun feature1Content(): DynamicFeatureContent<Feature1>
