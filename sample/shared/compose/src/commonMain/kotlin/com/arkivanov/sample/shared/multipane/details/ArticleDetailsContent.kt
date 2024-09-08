package com.arkivanov.sample.shared.multipane.details

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.utils.TopAppBar

@Composable
internal fun ArticleDetailsContent(component: ArticleDetailsComponent, modifier: Modifier = Modifier) {
    val model by component.models.subscribeAsState()
    val article = model.article

    Column(modifier = modifier) {
        if (model.isToolbarVisible) {
            TopAppBar(
                title = article.title,
                onCloseClick = component::onCloseClicked,
            )
        }

        Column(modifier = Modifier.fillMaxSize().verticalScroll(state = rememberScrollState())) {
            Text(
                text = article.title,
                modifier = Modifier.padding(16.dp),
                style = MaterialTheme.typography.h6,
            )

            Row(modifier = Modifier.fillMaxWidth().clickable(onClick = component::onAuthorClicked).padding(16.dp)) {
                Text(
                    text = "Author:",
                    style = MaterialTheme.typography.subtitle2,
                )

                Spacer(modifier = Modifier.width(8.dp))

                Text(
                    text = article.authorName,
                    textDecoration = TextDecoration.Underline,
                    style = MaterialTheme.typography.subtitle2,
                )
            }

            Text(
                text = article.text,
                modifier = Modifier.fillMaxSize().padding(16.dp),
                textAlign = TextAlign.Justify,
            )
        }
    }
}
