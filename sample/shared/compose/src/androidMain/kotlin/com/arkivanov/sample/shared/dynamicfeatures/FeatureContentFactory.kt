package com.arkivanov.sample.shared.dynamicfeatures

@Suppress("UNCHECKED_CAST")
internal inline fun <reified T : Any> featureContent(): DynamicFeatureContent<T> =
    Class.forName("${T::class.java.name}Content").newInstance() as DynamicFeatureContent<T>
