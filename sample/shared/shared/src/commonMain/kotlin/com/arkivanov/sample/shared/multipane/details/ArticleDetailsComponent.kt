package com.arkivanov.sample.shared.multipane.details

import com.arkivanov.decompose.value.Value

interface ArticleDetailsComponent {

    val models: Value<Model>

    fun onCloseClicked()

    data class Model(
        val isToolbarVisible: Boolean,
        val article: Article
    )

    data class Article(
        val title: String,
        val text: String
    )
}
