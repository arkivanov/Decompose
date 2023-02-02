package com.arkivanov.decompose.extensions.android

import android.view.ViewGroup
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.essenty.lifecycle.LifecycleOwner

@ExperimentalDecomposeApi
interface ViewContext : LifecycleOwner {

    val parent: ViewGroup
}
