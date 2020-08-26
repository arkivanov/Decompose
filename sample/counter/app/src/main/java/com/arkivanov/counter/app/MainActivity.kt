package com.arkivanov.counter.app

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.Box
import androidx.compose.foundation.ContentGravity
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.setContent
import com.arkivanov.counter.app.ui.ComposeAppTheme
import com.arkivanov.decompose.RootComponent

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            ComposeAppTheme {
                Surface(color = MaterialTheme.colors.background) {
                    Box(gravity = ContentGravity.Center, modifier = Modifier.fillMaxSize()) {
                        RootComponent(::CounterRootContainer)
                    }
                }
            }
        }
    }
}
