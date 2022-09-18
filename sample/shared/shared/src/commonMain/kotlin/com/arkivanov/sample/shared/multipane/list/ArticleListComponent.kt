package com.arkivanov.sample.shared.multipane.list

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.decompose.value.asRequired
import com.arkivanov.decompose.value.reduce
import com.arkivanov.sample.shared.multipane.database.ArticleDatabase
import com.arkivanov.sample.shared.multipane.database.ArticleEntity
import com.arkivanov.sample.shared.multipane.list.ArticleList.Article
import com.arkivanov.sample.shared.multipane.list.ArticleList.Model
import com.arkivanov.sample.shared.multipane.utils.disposableScope
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.Observable

internal class ArticleListComponent(
    componentContext: ComponentContext,
    database: ArticleDatabase,
    selectedArticleId: Observable<Long?>,
    private val onArticleSelected: (id: Long) -> Unit
) : ArticleList, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val _models =
        MutableValue(
            Model(
                articles = database.getAll().map { it.toArticle() },
                selectedArticleId = null
            )
        )

    override val models: ReqValue<Model> = _models.asRequired()

    init {
        selectedArticleId.subscribeScoped { id ->
            _models.reduce { it.copy(selectedArticleId = id) }
        }
    }

    private fun ArticleEntity.toArticle(): Article =
        Article(
            id = id,
            title = title
        )

    override fun onArticleClicked(id: Long) {
        onArticleSelected(id)
    }
}
