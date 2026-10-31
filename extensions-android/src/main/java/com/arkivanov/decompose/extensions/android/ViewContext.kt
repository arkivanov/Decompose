package com.arkivanov.decompose.extensions.android

import android.view.ViewGroup
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A context for Android views. Provides the parent [ViewGroup] and a [Lifecycle].
 */
@ExperimentalDecomposeApi
interface ViewContext : LifecycleOwner {

    /**
     * The parent [ViewGroup] into which child views are added.
     */
    val parent: ViewGroup
}
