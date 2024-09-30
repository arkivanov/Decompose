package com.arkivanov.sample.shared.multipane.details

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.update
import com.arkivanov.sample.shared.multipane.database.ArticleDatabase
import com.arkivanov.sample.shared.multipane.database.ArticleEntity
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent.Article
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent.Model
import com.arkivanov.sample.shared.multipane.utils.disposableScope
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.Observable

internal class DefaultArticleDetailsComponent(
    componentContext: ComponentContext,
    database: ArticleDatabase,
    articleId: Long,
    isToolbarVisible: Observable<Boolean>,
    private val onAuthorRequested: () -> Unit,
    private val onFinished: () -> Unit,
) : ArticleDetailsComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val _models =
        MutableValue(
            Model(
                isToolbarVisible = false,
                article = database.getArticle(id = articleId).toArticle()
            )
        )

    override val models: Value<Model> = _models

    init {
        isToolbarVisible.subscribeScoped { isVisible ->
            _models.update { it.copy(isToolbarVisible = isVisible) }
        }
    }

    private fun ArticleEntity.toArticle(): Article =
        Article(
            title = title,
            authorId = author.id,
            authorName = author.name,
            text = text
        )

    override fun onAuthorClicked() {
        onAuthorRequested()
    }

    override fun onCloseClicked() {
        onFinished()
    }
}
