package com.arkivanov.sample.shared

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.DefaultJetpackComponentContext
import com.arkivanov.decompose.JetpackComponentContext
import com.arkivanov.essenty.lifecycle.LifecycleRegistry

internal object PreviewComponentContext : JetpackComponentContext by DefaultJetpackComponentContext(
    DefaultComponentContext(lifecycle = LifecycleRegistry())
)
