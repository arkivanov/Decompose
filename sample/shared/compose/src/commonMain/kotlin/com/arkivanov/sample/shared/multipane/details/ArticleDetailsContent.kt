package com.arkivanov.sample.shared.multipane.details

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.subscribeAsState

@Composable
internal fun ArticleDetailsContent(component: ArticleDetailsComponent, modifier: Modifier = Modifier) {
    val model by component.models.subscribeAsState()
    val article = model.article

    Column(modifier = modifier) {
        if (model.isToolbarVisible) {
            com.arkivanov.sample.shared.utils.TopAppBar(
                title = article.title,
                onCloseClick = component::onCloseClicked,
            )
        }

        Text(
            text = article.text,
            modifier = Modifier
                .fillMaxHeight()
                .verticalScroll(rememberScrollState())
                .padding(16.dp)
        )
    }
}
