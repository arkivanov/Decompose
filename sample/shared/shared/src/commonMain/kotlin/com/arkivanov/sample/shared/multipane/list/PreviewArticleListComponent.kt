package com.arkivanov.sample.shared.multipane.list

import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent.Article
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent.Model

class PreviewArticleListComponent(
    isToolbarVisible: Boolean = false,
) : ArticleListComponent {

    override val models: Value<Model> =
        MutableValue(
            Model(
                articles = List(10) { index ->
                    Article(id = index.toLong(), title = "Article $index")
                },
                isToolbarVisible = isToolbarVisible,
                selectedArticleId = null,
            )
        )

    override fun onArticleClicked(article: Article) {}
}
