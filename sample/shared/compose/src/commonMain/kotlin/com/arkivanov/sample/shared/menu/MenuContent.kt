package com.arkivanov.sample.shared.menu

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.statusBars
import androidx.compose.foundation.layout.width
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.arkivanov.sample.shared.utils.TopAppBar
import com.arkivanov.sample.shared.utils.WebDocumentTitle

@Composable
internal fun MenuContent(
    component: MenuComponent,
    modifier: Modifier = Modifier,
) {
    WebDocumentTitle(title = "Menu")

    Column(modifier = modifier, horizontalAlignment = Alignment.CenterHorizontally) {
        TopAppBar(title = "Decompose Sample")

        Column(
            modifier = Modifier
                .width(IntrinsicSize.Max)
                .fillMaxHeight()
                .consumeWindowInsets(WindowInsets.statusBars),
            verticalArrangement = Arrangement.Center,
        ) {
            TextButton(text = "Dynamic Features", onClick = component.onDynamicFeaturesItemSelected)
            TextButton(text = "Custom Navigation", onClick = component.onCustomNavigationItemSelected)
            TextButton(text = "Pages", onClick = component.onPagesItemSelected)
            TextButton(text = "Shared Transitions", onClick = component.onSharedTransitionsItemSelected)
        }
    }
}

@Composable
private fun TextButton(text: String, onClick: () -> Unit) {
    Button(onClick = onClick, modifier = Modifier.fillMaxWidth()) {
        Text(text = text)
    }
}

@Preview
@Composable
internal fun MenuContentPreview() {
    MenuContent(
        component = PreviewMenuComponent(),
        modifier = Modifier.fillMaxSize(),
    )
}
