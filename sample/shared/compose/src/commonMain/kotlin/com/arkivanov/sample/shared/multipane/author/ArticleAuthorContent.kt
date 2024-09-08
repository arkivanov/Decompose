package com.arkivanov.sample.shared.multipane.author

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.subscribeAsState
import com.arkivanov.sample.shared.utils.TopAppBar

@Composable
internal fun ArticleAuthorContent(component: ArticleAuthorComponent, modifier: Modifier = Modifier) {
    val model by component.models.subscribeAsState()
    val author = model.author

    Column(modifier = modifier) {
        if (model.isToolbarVisible) {
            TopAppBar(
                title = author.name,
                onCloseClick = component::onCloseClicked,
            )
        }

        Column(modifier = Modifier.fillMaxSize().verticalScroll(state = rememberScrollState())) {
            Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = author.name,
                    modifier = Modifier.padding(16.dp),
                    style = MaterialTheme.typography.h6,
                )

                Spacer(modifier = Modifier.weight(1F))

                if (model.isCloseButtonVisible) {
                    IconButton(onClick = component::onCloseClicked) {
                        Icon(imageVector = Icons.Default.Close, contentDescription = "Close button")
                    }
                }
            }

            Text(
                text = author.bio,
                modifier = Modifier.fillMaxSize().padding(16.dp),
                textAlign = TextAlign.Justify,
            )
        }
    }
}
