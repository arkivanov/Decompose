package com.arkivanov.sample.shared.root

import android.annotation.SuppressLint
import android.view.View
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.sample.shared.R
import com.google.android.material.appbar.MaterialToolbar

@SuppressLint("SetTextI18n")
@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
internal fun ViewContext.NotImplementedView(title: String): View {
    val layout = layoutInflater.inflate(R.layout.not_implemented, parent, false)
    layout.findViewById<MaterialToolbar>(R.id.toolbar).title = title

    return layout
}
