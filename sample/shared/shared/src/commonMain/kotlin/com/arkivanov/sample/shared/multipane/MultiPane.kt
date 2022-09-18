package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.sample.shared.multipane.details.ArticleDetails
import com.arkivanov.sample.shared.multipane.list.ArticleList

interface MultiPane {

    val models: ReqValue<Model>
    val listChildStack: ReqValue<ChildStack<*, ListChild>>
    val detailsChildStack: ReqValue<ChildStack<*, DetailsChild>>

    fun setMultiPane(isMultiPane: Boolean)

    data class Model(
        val isMultiPane: Boolean = false
    )

    sealed class ListChild {
        class List(val component: ArticleList) : ListChild()
        object None : ListChild()
    }

    sealed class DetailsChild {
        object None : DetailsChild()
        data class Details(val component: ArticleDetails) : DetailsChild()
    }
}
