package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.RouterFactory
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.replaceCurrent
import com.arkivanov.decompose.router
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.shared.database.ArticleDatabase
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetailsComponent
import com.arkivanov.sample.masterdetail.shared.root.Root.DetailsChild

internal class DetailsPaneRouter(
    routerFactory: RouterFactory,
    private val database: ArticleDatabase
) {

    private val router =
        routerFactory.router<Config, DetailsChild>(
            initialConfiguration = Config.None,
            key = "DetailsRouter",
            childFactory = ::createChild
        )

    val state: Value<RouterState<Config, DetailsChild>> = router.state

    private fun createChild(config: Config, componentContext: ComponentContext): DetailsChild =
        when (config) {
            is Config.None -> DetailsChild.None
            is Config.NotSelected -> DetailsChild.NotSelected
            is Config.Selected -> DetailsChild.Selected(articleDetails(articleId = config.articleId, isToolbarVisible = false))
        }

    private fun articleDetails(articleId: Long, isToolbarVisible: Boolean): ArticleDetails =
        ArticleDetailsComponent(
            database = database,
            articleId = articleId,
            isToolbarVisible = isToolbarVisible,
            onFinished = { /* no-op */ }
        )

    fun selectArticle(id: Long?) {
        router.replaceCurrent(if (id == null) Config.NotSelected else Config.Selected(articleId = id))
    }

    fun closeArticle() {
        router.replaceCurrent(Config.None)
    }

    fun isMultiPaneMode(): Boolean =
        when (router.state.value.activeChild.configuration) {
            is Config.None -> false
            is Config.NotSelected,
            is Config.Selected -> true
        }

    fun getSelectedArticleId(): Long? =
        when (val config = router.state.value.activeChild.configuration) {
            is Config.None,
            is Config.NotSelected -> null
            is Config.Selected -> config.articleId
        }

    sealed class Config : Parcelable {
        @Parcelize
        object None : Config()

        @Parcelize
        object NotSelected : Config()

        @Parcelize
        data class Selected(val articleId: Long) : Config()
    }
}
