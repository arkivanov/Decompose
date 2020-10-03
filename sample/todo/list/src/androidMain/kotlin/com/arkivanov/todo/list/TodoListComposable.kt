package com.arkivanov.todo.list

import androidx.compose.foundation.Text
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumnFor
import androidx.compose.material.Checkbox
import androidx.compose.material.Divider
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.invoke

@Composable
operator fun TodoList.Model.invoke() {
    data { data ->
        LazyColumnFor(items = data.items) { item ->
            Row(modifier = Modifier.clickable(onClick = { onItemClicked(id = item.id) }).padding(8.dp)) {
                Text(
                    text = AnnotatedString(item.text),
                    modifier = Modifier.weight(1F),
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )

                Spacer(modifier = Modifier.width(8.dp))

                Checkbox(
                    checked = item.isDone,
                    onCheckedChange = { onDoneChanged(id = item.id, isDone = !item.isDone) }
                )
            }

            Divider()
        }
    }
}
