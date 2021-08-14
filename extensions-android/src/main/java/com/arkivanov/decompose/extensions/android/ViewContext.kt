package com.arkivanov.decompose.extensions.android

import android.view.ViewGroup
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.lifecycle.Lifecycle

@ExperimentalDecomposeApi
interface ViewContext {

    val parent: ViewGroup
    val lifecycle: Lifecycle
}
