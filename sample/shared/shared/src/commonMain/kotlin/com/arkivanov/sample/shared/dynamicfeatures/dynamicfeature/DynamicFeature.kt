package com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.ReqValue

interface DynamicFeature<out T : Any> {

    val childStack: ReqValue<ChildStack<*, Child<T>>>

    sealed interface Child<out T : Any> {
        class Loading(val name: String) : Child<Nothing>
        class Feature<out T : Any>(val feature: T) : Child<T>
        class Error(val name: String) : Child<Nothing>
    }
}
