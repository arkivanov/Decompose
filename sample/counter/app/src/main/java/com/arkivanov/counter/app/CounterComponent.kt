package com.arkivanov.counter.app

import android.os.Handler
import androidx.compose.foundation.Text
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material.Button
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.Component

class CounterComponent(
    lifecycle: Lifecycle,
    private val title: String,
    private val action: String,
    private val onAction: (count: Int) -> Unit
) : Component {

    private val handler = Handler()
    private var count = mutableStateOf(0)

    init {
        lifecycle.doOnCreate(::onCreate)
        lifecycle.doOnDestroy(::onDestroy)
    }

    private fun onCreate() {
        val runnable =
            object : Runnable {
                override fun run() {
                    count.value++
                    handler.postDelayed(this, 100L)
                }
            }

        handler.postDelayed(runnable, 100L)
    }

    private fun onDestroy() {
        handler.removeCallbacksAndMessages(null)
    }

    @Composable
    override fun content() {
        Column {
            TopAppBar(title = { Text(text = title) })

            Column(
                verticalArrangement = Arrangement.Center,
                horizontalGravity = Alignment.CenterHorizontally,
                modifier = Modifier.weight(1F) + Modifier.fillMaxWidth()
            ) {
                Text(text = "Count: ${count.value}")

                Spacer(modifier = Modifier.height(8.dp))

                Button(onClick = ::onClick) {
                    Text(text = action)
                }
            }
        }
    }

    private fun onClick() {
        onAction(count.value)
    }
}
