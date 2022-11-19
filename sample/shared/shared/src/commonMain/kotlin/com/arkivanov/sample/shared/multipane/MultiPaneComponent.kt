package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent

interface MultiPaneComponent {

    val models: Value<Model>
    val listChildStack: Value<ChildStack<*, ListChild>>
    val detailsChildStack: Value<ChildStack<*, DetailsChild>>

    fun setMultiPane(isMultiPane: Boolean)

    data class Model(
        val isMultiPane: Boolean = false
    )

    sealed class ListChild {
        class List(val component: ArticleListComponent) : ListChild()
        object None : ListChild()
    }

    sealed class DetailsChild {
        object None : DetailsChild()
        data class Details(val component: ArticleDetailsComponent) : DetailsChild()
    }
}
