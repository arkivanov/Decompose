package com.arkivanov.sample.shared.multipane.author

import com.arkivanov.decompose.value.Value

interface ArticleAuthorComponent {

    val models: Value<Model>

    fun onCloseClicked()

    data class Model(
        val isToolbarVisible: Boolean,
        val isCloseButtonVisible: Boolean,
        val author: Author,
    )

    data class Author(
        val name: String,
        val bio: String,
    )
}
