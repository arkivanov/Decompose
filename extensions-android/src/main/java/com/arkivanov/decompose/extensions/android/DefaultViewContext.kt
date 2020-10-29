package com.arkivanov.decompose.extensions.android

import android.view.ViewGroup
import com.arkivanov.decompose.lifecycle.Lifecycle

class DefaultViewContext(
    override val parent: ViewGroup,
    override val lifecycle: Lifecycle
) : ViewContext
