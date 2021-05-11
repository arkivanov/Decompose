package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails
import com.arkivanov.sample.masterdetail.shared.list.ArticleList

interface Root {

    val mainRouterState: Value<RouterState<*, MainChild>>
    val detailsRouterState: Value<RouterState<*, DetailsChild>>

    fun setMultiPane(isMultiPane: Boolean)

    sealed class MainChild {
        class List(val component: ArticleList) : MainChild()
        class Details(val component: ArticleDetails) : MainChild()
    }

    sealed class DetailsChild {
        object None : DetailsChild()
        object NotSelected : DetailsChild()
        data class Selected(val component: ArticleDetails) : DetailsChild()
    }
}
