package com.arkivanov.masterdetail.app

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import com.arkivanov.masterdetail.app.ui.ComposeAppTheme
import com.arkivanov.decompose.extensions.compose.jetbrains.rememberRootComponent
import com.arkivanov.sample.masterdetail.shared.root.RootComponent
import com.arkivanov.sample.masterdetail.composeui.root.RootUi

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            ComposeAppTheme {
                Surface(color = MaterialTheme.colors.background) {
                    val root = rememberRootComponent(::RootComponent)
                    RootUi(root)
                }
            }
        }
    }
}
