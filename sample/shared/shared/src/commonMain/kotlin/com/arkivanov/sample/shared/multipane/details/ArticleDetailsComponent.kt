package com.arkivanov.sample.shared.multipane.details

import com.arkivanov.decompose.value.Value

interface ArticleDetailsComponent {

    val models: Value<Model>

    fun onAuthorClicked()
    fun onCloseClicked()

    data class Model(
        val isToolbarVisible: Boolean,
        val article: Article
    )

    data class Article(
        val title: String,
        val authorId: Long,
        val authorName: String,
        val text: String
    )
}
