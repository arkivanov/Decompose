package com.arkivanov.counter.app

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.platform.setContent
import com.arkivanov.counter.app.ui.ComposeAppTheme

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root = RootComponent(savedStateRegistry, onBackPressedDispatcher)

        setContent {
            ComposeAppTheme {
                Surface(color = MaterialTheme.colors.background) {
                    root.content()
                }
            }
        }
    }
}
