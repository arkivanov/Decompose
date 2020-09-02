package com.arkivanov.counter.app

import android.os.Handler
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Box
import androidx.compose.foundation.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ComponentContext

class Counter(
    componentContext: ComponentContext,
    private val index: Int
) : Component, ComponentContext by componentContext {

    private val viewModel = ViewModelProvider(this).get(ViewModelImpl::class.java)

    @Composable
    override fun content() {
        Box(border = BorderStroke(width = 1.dp, color = Color.Black), padding = 16.dp) {
            Text(text = "Counter$index: ${viewModel.count.value.toString().padStart(3, '0')}")
        }
    }

    internal class ViewModelImpl : ViewModel() {
        val count = mutableStateOf(0)
        private val handler = Handler()

        init {
            val runnable =
                object : Runnable {
                    override fun run() {
                        count.value++
                        handler.postDelayed(this, 250L)
                    }
                }

            handler.postDelayed(runnable, 250L)
        }

        override fun onCleared() {
            handler.removeCallbacksAndMessages(null)

            super.onCleared()
        }
    }
}
