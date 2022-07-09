package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.activeChild
import com.arkivanov.decompose.router.stack.navigate
import com.arkivanov.decompose.router.stack.popWhile
import com.arkivanov.decompose.router.stack.stackRouter
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.multipane.MultiPane.DetailsChild
import com.arkivanov.sample.shared.multipane.database.ArticleDatabase
import com.arkivanov.sample.shared.multipane.details.ArticleDetails
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.badoo.reaktive.observable.Observable

internal class DetailsRouter(
    componentContext: ComponentContext,
    private val database: ArticleDatabase,
    private val isToolbarVisible: Observable<Boolean>,
    private val onFinished: () -> Unit
) {

    private val router =
        componentContext.stackRouter<Config, DetailsChild>(
            initialConfiguration = Config.None,
            key = "DetailsRouter",
            childFactory = ::createChild,
        )

    val stack: Value<ChildStack<Config, DetailsChild>> = router.stack

    private fun createChild(config: Config, componentContext: ComponentContext): DetailsChild =
        when (config) {
            is Config.None -> DetailsChild.None
            is Config.Details -> DetailsChild.Details(articleDetails(componentContext = componentContext, articleId = config.articleId))
        }

    private fun articleDetails(componentContext: ComponentContext, articleId: Long): ArticleDetails =
        ArticleDetailsComponent(
            componentContext = componentContext,
            database = database,
            articleId = articleId,
            isToolbarVisible = isToolbarVisible,
            onFinished = onFinished
        )

    fun showArticle(id: Long) {
        router.navigate { stack ->
            stack
                .dropLastWhile { it is Config.Details }
                .plus(Config.Details(articleId = id))
        }
    }

    fun closeArticle() {
        router.popWhile { it !is Config.None }
    }

    fun isShown(): Boolean =
        when (router.activeChild.configuration) {
            is Config.None -> false
            is Config.Details -> true
        }

    sealed class Config : Parcelable {
        @Parcelize
        object None : Config()

        @Parcelize
        data class Details(val articleId: Long) : Config()
    }
}
