package com.arkivanov.sample.shared.multipane.database

internal data class ArticleEntity(
    val id: Long,
    val author: AuthorEntity,
    val title: String,
    val text: String,
)
