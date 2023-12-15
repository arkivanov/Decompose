package com.arkivanov.sample.app

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.defaultComponentContext
import com.arkivanov.decompose.extensions.android.DefaultViewContext
import com.arkivanov.essenty.lifecycle.essentyLifecycle
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DefaultFeatureInstaller
import com.arkivanov.sample.shared.root.DefaultRootComponent
import com.arkivanov.sample.shared.root.RootComponent
import com.arkivanov.sample.shared.root.RootContent
import com.arkivanov.sample.shared.root.RootView
import com.badoo.reaktive.subject.behavior.BehaviorSubject

class MainActivity : AppCompatActivity() {

    private val mode = Mode.COMPOSE
    private val deepLinkPath = BehaviorSubject<String?>(null)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        deepLinkPath.onNext(intent.getDeepLinkPath())

        val root =
            DefaultRootComponent(
                componentContext = defaultComponentContext(discardSavedState = deepLinkPath.value != null),
                featureInstaller = DefaultFeatureInstaller(context = this),
                deepLinkPath = deepLinkPath,
            )

        deepLinkPath.onNext(null)

        when (mode) {
            Mode.COMPOSE -> drawViaCompose(root)
            Mode.VIEWS -> drawViaViews(root)
        }.let {}

        // Simulate the deeplink for now
        Handler().postDelayed(
            { deepLinkPath.onNext("/counters/2") },
            3000,
        )
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)

        deepLinkPath.onNext(intent.getDeepLinkPath())
        deepLinkPath.onNext(null)
    }

    private fun Intent.getDeepLinkPath(): String? {
        return "/cards" // Simulate the deeplink for now
    }

    private fun drawViaCompose(root: RootComponent) {
        setContent {
            RootContent(component = root, modifier = Modifier.fillMaxSize())
        }
    }

    @OptIn(ExperimentalDecomposeApi::class)
    private fun drawViaViews(root: RootComponent) {
        setContentView(R.layout.main_activity)

        val viewContext =
            DefaultViewContext(
                parent = findViewById(R.id.content),
                lifecycle = essentyLifecycle(),
            )

        viewContext.apply {
            parent.addView(RootView(root))
        }
    }

    private enum class Mode {
        COMPOSE, VIEWS
    }
}
