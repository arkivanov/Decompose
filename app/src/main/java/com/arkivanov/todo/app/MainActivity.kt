package com.arkivanov.todo.app

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.platform.setContent
import com.arkivanov.todo.app.ui.ComposeAppTheme
import com.arkivanov.todo.root.TodoRootComponent

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root = TodoRootComponent(this, onBackPressedDispatcher)

        setContent {
            ComposeAppTheme {
                Surface(color = MaterialTheme.colors.background) {
                    root.content()
                }
            }
        }
    }
}


