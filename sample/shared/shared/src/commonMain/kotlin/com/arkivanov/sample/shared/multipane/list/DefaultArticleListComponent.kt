package com.arkivanov.sample.shared.multipane.list

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.update
import com.arkivanov.sample.shared.multipane.database.ArticleDatabase
import com.arkivanov.sample.shared.multipane.database.ArticleEntity
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent.Article
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent.Model
import com.arkivanov.sample.shared.multipane.utils.disposableScope
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.Observable

internal class DefaultArticleListComponent(
    componentContext: ComponentContext,
    database: ArticleDatabase,
    isToolbarVisible: Observable<Boolean>,
    selectedArticleId: Observable<Long?>,
    private val onArticleSelected: (id: Long) -> Unit,
) : ArticleListComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val _models =
        MutableValue(
            Model(
                articles = database.getAll().map { it.toArticle() },
                isToolbarVisible = false,
                selectedArticleId = null
            )
        )

    override val models: Value<Model> = _models

    init {
        isToolbarVisible.subscribeScoped { isVisible ->
            _models.update { it.copy(isToolbarVisible = isVisible) }
        }

        selectedArticleId.subscribeScoped { id ->
            _models.update { it.copy(selectedArticleId = id) }
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
