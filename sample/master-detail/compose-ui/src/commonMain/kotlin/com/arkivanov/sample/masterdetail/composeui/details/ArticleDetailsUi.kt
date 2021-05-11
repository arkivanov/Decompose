package com.arkivanov.sample.masterdetail.composeui.details

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
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails

@Composable
fun ArticleDetailsUi(component: ArticleDetails, modifier: Modifier = Modifier) {
    val model by component.article.subscribeAsState()
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
