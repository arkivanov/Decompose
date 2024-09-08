package com.arkivanov.sample.shared.multipane.details

import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent.Article
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent.Model

class PreviewArticleDetailsComponent(
    isToolbarVisible: Boolean = false,
) : ArticleDetailsComponent {

    override val models: Value<Model> =
        MutableValue(
            Model(
                isToolbarVisible = isToolbarVisible,
                article = Article(
                    title = "Article 1",
                    authorId = 1,
                    authorName = "John Smith",
                    text = "Article 1 ".repeat(50),
                ),
            )
        )

    override fun onAuthorClicked() {}
    override fun onCloseClicked() {}
}
