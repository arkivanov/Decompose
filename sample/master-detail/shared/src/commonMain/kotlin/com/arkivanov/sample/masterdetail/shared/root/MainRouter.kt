package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.RouterFactory
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.pop
import com.arkivanov.decompose.popWhile
import com.arkivanov.decompose.push
import com.arkivanov.decompose.router
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.shared.database.ArticleDatabase
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetailsComponent
import com.arkivanov.sample.masterdetail.shared.list.ArticleList
import com.arkivanov.sample.masterdetail.shared.list.ArticleListComponent
import com.arkivanov.sample.masterdetail.shared.root.Root.MainChild
import com.badoo.reaktive.observable.Observable

internal class MainRouter(
    routerFactory: RouterFactory,
    private val database: ArticleDatabase,
    private val selectedArticleId: Observable<Long?>,
    private val onArticleSelected: (id: Long) -> Unit
) {

    private val router =
        routerFactory.router<Config, MainChild>(
            initialConfiguration = Config.List,
            key = "MainRouter",
            handleBackButton = true,
            childFactory = ::createChild
        )

    val state: Value<RouterState<Config, MainChild>> = router.state

    private fun createChild(config: Config, componentContext: ComponentContext): MainChild =
        when (config) {
            is Config.List -> MainChild.List(articleList(componentContext))
            is Config.Details -> MainChild.Details(articleDetails(articleId = config.articleId, isToolbarVisible = true))
        }

    private fun articleList(componentContext: ComponentContext): ArticleList =
        ArticleListComponent(
            componentContext = componentContext,
            database = database,
            selectedArticleId = selectedArticleId,
            onArticleSelected = onArticleSelected
        )

    private fun articleDetails(articleId: Long, isToolbarVisible: Boolean): ArticleDetails =
        ArticleDetailsComponent(
            database = database,
            articleId = articleId,
            isToolbarVisible = isToolbarVisible,
            onFinished = router::pop
        )

    fun getSelectedArticleId(): Long? =
        when (val config = router.state.value.activeChild.configuration) {
            is Config.List -> null
            is Config.Details -> config.articleId
        }

    fun pushDetails(id: Long) {
        router.push(Config.Details(articleId = id))
    }

    fun popToList() {
        router.popWhile { it !is Config.List }
    }

    sealed class Config : Parcelable {
        @Parcelize
        object List : Config()

        @Parcelize
        data class Details(val articleId: Long) : Config()
    }
}
