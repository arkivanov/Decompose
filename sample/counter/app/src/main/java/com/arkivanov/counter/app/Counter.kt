package com.arkivanov.counter.app

import android.os.Handler
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Box
import androidx.compose.foundation.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.todo.utils.doOnCreate
import com.arkivanov.todo.utils.doOnDestroy

class Counter(
    componentContext: ComponentContext,
    private val index: Int
) : Component, ComponentContext by componentContext {

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
                    handler.postDelayed(this, 500L)
                }
            }

        handler.postDelayed(runnable, 500L)
    }

    private fun onDestroy() {
        handler.removeCallbacksAndMessages(null)
    }

    @Composable
    override fun content() {
        Box(border = BorderStroke(width = 1.dp, color = Color.Black), padding = 16.dp) {
            Text(text = "Counter$index: ${count.value.toString().padStart(3, '0')}")
        }
    }
}
