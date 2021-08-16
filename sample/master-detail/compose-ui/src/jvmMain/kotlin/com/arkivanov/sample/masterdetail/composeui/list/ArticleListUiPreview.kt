package com.arkivanov.sample.masterdetail.composeui.list

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.shared.list.ArticleList
import com.arkivanov.sample.masterdetail.shared.list.ArticleList.Article
import com.arkivanov.sample.masterdetail.shared.list.ArticleList.Model

@Preview
@Composable
fun ArticleListUiPreview() {
    ArticleListUi(ArticleListPreview())
}

class ArticleListPreview : ArticleList {
    override val models: Value<Model> =
        MutableValue(
            Model(
                articles = List(10) { index ->
                    Article(
                        id = index.toLong(),
                        title = "Article $index"
                    )
                },
                selectedArticleId = 5L
            )
        )

    override fun onArticleClicked(id: Long) {}
}
