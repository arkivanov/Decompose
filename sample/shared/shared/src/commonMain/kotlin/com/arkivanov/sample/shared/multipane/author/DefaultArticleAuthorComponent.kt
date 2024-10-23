package com.arkivanov.sample.shared.multipane.author

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.update
import com.arkivanov.essenty.lifecycle.reaktive.disposableScope
import com.arkivanov.sample.shared.multipane.author.ArticleAuthorComponent.Author
import com.arkivanov.sample.shared.multipane.author.ArticleAuthorComponent.Model
import com.arkivanov.sample.shared.multipane.database.ArticleDatabase
import com.arkivanov.sample.shared.multipane.database.AuthorEntity
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.Observable

internal class DefaultArticleAuthorComponent(
    componentContext: ComponentContext,
    database: ArticleDatabase,
    authorId: Long,
    isToolbarVisible: Observable<Boolean>,
    isCloseButtonVisible: Observable<Boolean>,
    private val onFinished: () -> Unit,
) : ArticleAuthorComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val _models =
        MutableValue(
            Model(
                isToolbarVisible = false,
                isCloseButtonVisible = false,
                author = database.getAuthor(id = authorId).toAuthor(),
            )
        )

    override val models: Value<Model> = _models

    init {
        isToolbarVisible.subscribeScoped { isVisible ->
            _models.update { it.copy(isToolbarVisible = isVisible) }
        }

        isCloseButtonVisible.subscribeScoped { isVisible ->
            _models.update { it.copy(isCloseButtonVisible = isVisible) }
        }
    }

    private fun AuthorEntity.toAuthor(): Author =
        Author(
            name = name,
            bio = bio,
        )

    override fun onCloseClicked() {
        onFinished()
    }
}
