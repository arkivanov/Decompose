package com.arkivanov.todo.app

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.platform.setContent
import com.arkivanov.decompose.RootComponent
import com.arkivanov.todo.app.ui.ComposeAppTheme
import com.arkivanov.todo.database.TodoDatabaseDriverFactory
import com.arkivanov.todo.root.TodoRoot
import com.arkivanov.todo.root.invoke

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            ComposeAppTheme {
                Surface(color = MaterialTheme.colors.background) {
                    RootComponent { componentContext ->
                        TodoRoot(componentContext, TodoDatabaseDriverFactory(this))
                    }.model()
                }
            }
        }
    }
}
