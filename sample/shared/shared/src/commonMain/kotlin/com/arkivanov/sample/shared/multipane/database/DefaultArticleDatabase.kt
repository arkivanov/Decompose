package com.arkivanov.sample.shared.multipane.database

import com.arkivanov.sample.shared.multipane.database.LorenIpsumGenerator.generate
import com.arkivanov.sample.shared.multipane.database.LorenIpsumGenerator.generateSentence
import com.arkivanov.sample.shared.multipane.database.LorenIpsumGenerator.randomWord
import kotlin.random.Random

internal class DefaultArticleDatabase : ArticleDatabase {

    private val authors =
        List(10) { index ->
            AuthorEntity(
                id = index.toLong() + 1L,
                name = "${randomWord(capitalize = true)} ${randomWord(capitalize = true)}",
                bio = List(50) { generateSentence() }.joinToString(separator = " "),
            )
        }

    private val articles =
        List(50) { index ->
            ArticleEntity(
                id = index.toLong() + 1L,
                author = authors[index % authors.size],
                title = generate(count = Random.nextInt(3, 5), minWordLength = 3)
                    .joinToString(separator = " ") { it.replaceFirstChar(Char::uppercase) },
                text = List(50) { generateSentence() }
                    .joinToString(separator = " ")
            )
        }

    private val articleMap = articles.associateBy(ArticleEntity::id)

    override fun getArticles(): List<ArticleEntity> = articles

    override fun getArticle(id: Long): ArticleEntity =
        articleMap.getValue(id)
}
