package com.arkivanov.masterdetail.app

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import com.arkivanov.decompose.defaultComponentContext
import com.arkivanov.masterdetail.app.ui.ComposeAppTheme
import com.arkivanov.sample.masterdetail.uicompose.root.RootUi
import com.arkivanov.sample.masterdetail.shared.root.RootComponent

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root = RootComponent(defaultComponentContext())

        setContent {
            ComposeAppTheme {
                Surface(color = MaterialTheme.colors.background) {
                    RootUi(root)
                }
            }
        }
    }
}
