package com.arkivanov.todo.app

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.ui.core.setContent
import androidx.ui.material.MaterialTheme
import androidx.ui.material.Surface
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


