package com.arkivanov.sample.masterdetail.shared.details

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.reduce
import com.arkivanov.sample.masterdetail.shared.database.ArticleDatabase
import com.arkivanov.sample.masterdetail.shared.database.ArticleEntity
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails.Article
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails.Model
import com.arkivanov.sample.masterdetail.shared.utils.disposableScope
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.Observable

internal class ArticleDetailsComponent(
    componentContext: ComponentContext,
    database: ArticleDatabase,
    articleId: Long,
    isToolbarVisible: Observable<Boolean>,
    private val onFinished: () -> Unit
) : ArticleDetails, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val _models =
        MutableValue(
            Model(
                isToolbarVisible = false,
                article = database.getById(id = articleId).toArticle()
            )
        )

    override val models: Value<Model> = _models

    init {
        isToolbarVisible.subscribeScoped { isVisible ->
            _models.reduce { it.copy(isToolbarVisible = isVisible) }
        }
    }

    private fun ArticleEntity.toArticle(): Article =
        Article(
            title = title,
            text = text
        )

    override fun onCloseClicked() {
        onFinished()
    }
}
