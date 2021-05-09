package com.arkivanov.sample.masterdetail.shared.database

internal interface ArticleDatabase {

    fun getAll(): List<ArticleEntity>

    fun getById(id: Long): ArticleEntity
}
