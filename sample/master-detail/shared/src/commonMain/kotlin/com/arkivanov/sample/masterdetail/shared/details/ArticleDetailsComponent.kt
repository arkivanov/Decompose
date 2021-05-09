package com.arkivanov.sample.masterdetail.shared.details

import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.shared.database.ArticleDatabase
import com.arkivanov.sample.masterdetail.shared.database.ArticleEntity
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails.Article
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails.Model

internal class ArticleDetailsComponent(
    database: ArticleDatabase,
    articleId: Long,
    isToolbarVisible: Boolean,
    private val onFinished: () -> Unit
) : ArticleDetails {

    override val article: Value<Model> =
        MutableValue(
            Model(
                isToolbarVisible = isToolbarVisible,
                article = database.getById(id = articleId).toArticle()
            )
        )

    private fun ArticleEntity.toArticle(): Article =
        Article(
            title = title,
            text = text
        )

    override fun onCloseClicked() {
        onFinished()
    }
}
