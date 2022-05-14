package com.arkivanov.sample.shared.root

import android.annotation.SuppressLint
import android.view.Gravity
import android.view.View
import android.widget.TextView
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.context

@SuppressLint("SetTextI18n")
@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
internal fun ViewContext.NotImplementedView(): View =
    TextView(context).apply {
        gravity = Gravity.CENTER
        text = "Not implemented"
    }
