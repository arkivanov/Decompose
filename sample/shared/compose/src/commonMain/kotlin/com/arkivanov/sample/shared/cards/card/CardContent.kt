@file:Suppress("OPTIONAL_DECLARATION_USAGE_IN_NON_COMMON_SOURCE") // Workaround for KTIJ-22326

package com.arkivanov.sample.shared.cards.card

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.extensions.compose.subscribeAsState

@Composable
internal fun CardContent(component: CardComponent, modifier: Modifier = Modifier) {
    val model by component.model.subscribeAsState()

    Column(
        modifier = modifier
            .shadow(elevation = 4.dp, shape = RoundedCornerShape(size = 16.dp), clip = true)
            .background(Color(model.color))
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(space = 16.dp, alignment = Alignment.CenterVertically),
    ) {
        Title(text = model.title)
        Row(text = model.status)
        Row(text = model.text)
    }
}

@Composable
private fun Row(text: String = "") {
    Text(
        text = text,
        modifier = Modifier
            .fillMaxWidth()
            .background(Color.White.copy(alpha = 0.5F))
            .padding(4.dp),
        style = MaterialTheme.typography.caption,
    )
}

@Composable
private fun Title(text: String) {
    Box(
        modifier = Modifier
            .size(32.dp)
            .background(Color.White.copy(alpha = 0.5F)),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            text = text,
            style = MaterialTheme.typography.subtitle1,
        )
    }
}

@Preview
@Composable
internal fun CardContentPreview() {
    CardContent(component = PreviewCardComponent())
}
