package com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value

interface DynamicFeatureComponent<out T : Any> {

    val childStack: Value<ChildStack<*, Child<T>>>

    sealed class Child<out T : Any> {
        class LoadingChild(val name: String) : Child<Nothing>()
        class FeatureChild<out T : Any>(val feature: T) : Child<T>()
        class ErrorChild(val name: String) : Child<Nothing>()
    }
}
