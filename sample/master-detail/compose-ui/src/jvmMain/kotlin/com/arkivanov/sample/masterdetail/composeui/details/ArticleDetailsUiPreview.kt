package com.arkivanov.sample.masterdetail.composeui.details

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails.Article
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails.Model

@Preview
@Composable
fun ArticleDetailsUiPreview() {
    ArticleDetailsUi(ArticleDetailsPreview())
}

class ArticleDetailsPreview : ArticleDetails {
    override val models: Value<Model> =
        MutableValue(
            Model(
                isToolbarVisible = true,
                article = Article(
                    title = "Article Title",
                    text = List(100) { "Word$it" }.joinToString()
                )
            )
        )

    override fun onCloseClicked() {}
}
