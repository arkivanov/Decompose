package com.arkivanov.decompose.extensions.android

import android.content.Context
import android.content.res.Resources
import android.view.LayoutInflater
import android.view.ViewGroup
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.lifecycle.Lifecycle

@ExperimentalDecomposeApi
interface ViewContext {

    val parent: ViewGroup
    val lifecycle: Lifecycle
}

@ExperimentalDecomposeApi
val ViewContext.context: Context get() = parent.context

@ExperimentalDecomposeApi
val ViewContext.resources: Resources get() = parent.resources

@ExperimentalDecomposeApi
val ViewContext.layoutInflater: LayoutInflater get() = LayoutInflater.from(context)
