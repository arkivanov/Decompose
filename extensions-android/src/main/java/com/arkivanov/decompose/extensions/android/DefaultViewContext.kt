package com.arkivanov.decompose.extensions.android

import android.view.ViewGroup
import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.ExperimentalDecomposeApi

/**
 * A default implementation of [ViewContext].
 *
 * @param parent the parent [ViewGroup] into which child views are added.
 * @param lifecycle a [Lifecycle] of this [ViewContext].
 */
@ExperimentalDecomposeApi
class DefaultViewContext(
    override val parent: ViewGroup,
    override val lifecycle: Lifecycle
) : ViewContext
