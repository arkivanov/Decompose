package com.arkivanov.dynamicfeatures.app

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.defaultComponentContext
import com.arkivanov.sample.dynamicfeatures.shared.root.RootComponent
import com.arkivanov.sample.dynamicfeatures.shared.root.RootContent
import com.arkivanov.sample.dynamicfeatures.shared.root.featureinstaller.DefaultFeatureInstaller

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val root =
            RootComponent(
                componentContext = defaultComponentContext(),
                featureInstaller = DefaultFeatureInstaller(this),
            )

        setContent {
            MaterialTheme {
                Surface(color = MaterialTheme.colors.background) {
                    RootContent(root = root, modifier = Modifier.fillMaxSize())
                }
            }
        }
    }
}
