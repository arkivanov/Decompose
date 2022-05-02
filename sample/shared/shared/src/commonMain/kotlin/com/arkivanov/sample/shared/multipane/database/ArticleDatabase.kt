package com.arkivanov.sample.shared.multipane.database

internal interface ArticleDatabase {

    fun getAll(): List<ArticleEntity>

    fun getById(id: Long): ArticleEntity
}
