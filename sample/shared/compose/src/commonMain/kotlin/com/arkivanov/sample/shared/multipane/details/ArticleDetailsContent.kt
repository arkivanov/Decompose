package com.arkivanov.sample.shared.multipane.details

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.jetbrains.subscribeAsState

@Composable
internal fun ArticleDetailsContent(component: ArticleDetailsComponent, modifier: Modifier = Modifier) {
    val model by component.models.subscribeAsState()
    val article = model.article

    Column(modifier = modifier) {
        if (model.isToolbarVisible) {
            TopAppBar(
                title = { Text(text = article.title) },
                navigationIcon = {
                    IconButton(onClick = component::onCloseClicked) {
                        Icon(
                            imageVector = Icons.Default.ArrowBack,
                            contentDescription = null
                        )
                    }
                }
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
