package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.activeChild
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.push
import com.arkivanov.decompose.router.stack.stackRouter
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.multipane.MultiPane.ListChild
import com.arkivanov.sample.shared.multipane.database.ArticleDatabase
import com.arkivanov.sample.shared.multipane.list.ArticleList
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent
import com.badoo.reaktive.observable.Observable

internal class ListRouter(
    componentContext: ComponentContext,
    private val database: ArticleDatabase,
    private val selectedArticleId: Observable<Long?>,
    private val onArticleSelected: (id: Long) -> Unit
) {

    private val router =
        componentContext.stackRouter<Config, ListChild>(
            initialConfiguration = Config.List,
            key = "MainRouter",
            childFactory = ::createChild,
        )

    val stack: Value<ChildStack<Config, ListChild>> = router.stack

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
        if (router.activeChild.configuration !is Config.None) {
            router.push(Config.None)
        }
    }

    fun show() {
        if (router.activeChild.configuration !is Config.List) {
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
