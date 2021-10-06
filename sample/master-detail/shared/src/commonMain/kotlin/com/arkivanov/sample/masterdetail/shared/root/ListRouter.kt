package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.pop
import com.arkivanov.decompose.push
import com.arkivanov.decompose.router
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.masterdetail.shared.database.ArticleDatabase
import com.arkivanov.sample.masterdetail.shared.list.ArticleList
import com.arkivanov.sample.masterdetail.shared.list.ArticleListComponent
import com.arkivanov.sample.masterdetail.shared.root.Root.ListChild
import com.badoo.reaktive.observable.Observable

internal class ListRouter(
    componentContext: ComponentContext,
    private val database: ArticleDatabase,
    private val selectedArticleId: Observable<Long?>,
    private val onArticleSelected: (id: Long) -> Unit
) {

    private val router =
        componentContext.router<Config, ListChild>(
            initialConfiguration = Config.List,
            key = "MainRouter",
            childFactory = ::createChild
        )

    val state: Value<RouterState<Config, ListChild>> = router.state

    private fun createChild(config: Config, componentContext: ComponentContext): ListChild =
        when (config) {
            is Config.List -> ListChild.List(articleList(componentContext))
            is Config.None -> ListChild.None
        }

    private fun articleList(componentContext: ComponentContext): ArticleList =
        ArticleListComponent(
            componentContext = componentContext,
            database = database,
            selectedArticleId = selectedArticleId,
            onArticleSelected = onArticleSelected
        )

    fun moveToBackStack() {
        if (router.state.value.activeChild.configuration !is Config.None) {
            router.push(Config.None)
        }
    }

    fun show() {
        if (router.state.value.activeChild.configuration !is Config.List) {
            router.pop()
        }
    }

    sealed class Config : Parcelable {
        @Parcelize
        object List : Config()

        @Parcelize
        object None : Config()
    }
}
