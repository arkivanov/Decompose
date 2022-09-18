package com.arkivanov.sample.shared.multipane.list

import com.arkivanov.decompose.value.ReqValue

interface ArticleList {

    val models: ReqValue<Model>

    fun onArticleClicked(id: Long)

    data class Model(
        val articles: List<Article>,
        val selectedArticleId: Long?,
    )

    data class Article(
        val id: Long,
        val title: String,
    )
}
