package com.arkivanov.decompose.extensions.android

import android.view.ViewGroup
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle

@ExperimentalDecomposeApi
class DefaultViewContext(
    override val parent: ViewGroup,
    override val lifecycle: Lifecycle
) : ViewContext
