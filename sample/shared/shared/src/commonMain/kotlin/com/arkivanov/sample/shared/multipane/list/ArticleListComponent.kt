package com.arkivanov.sample.shared.multipane.list

import com.arkivanov.decompose.value.Value

interface ArticleListComponent {

    val models: Value<Model>

    fun onArticleClicked(article: Article)

    data class Model(
        val articles: List<Article>,
        val isToolbarVisible: Boolean,
        val selectedArticleId: Long?
    )

    data class Article(
        val id: Long,
        val authorId: Long,
        val title: String
    )
}
