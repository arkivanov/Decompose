package com.arkivanov.sample.shared.multipane.database

internal interface ArticleDatabase {

    fun getArticles(): List<ArticleEntity>

    fun getArticle(id: Long): ArticleEntity

    fun getAuthor(id: Long): AuthorEntity
}
