package com.arkivanov.decompose.extensions.android

import android.view.View
import android.view.ViewGroup

internal inline fun ViewGroup.forEachChild(block: (View) -> Unit) {
    for (i in 0 until childCount) {
        block(getChildAt(i))
    }
}
