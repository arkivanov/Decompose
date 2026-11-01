package com.arkivanov.decompose.router

import androidx.lifecycle.ViewModel

class TestViewModel(
    var onDestroyed: () -> Unit = {},
) : ViewModel() {

    var isDestroyed: Boolean = false

    override fun onCleared() {
        isDestroyed = true
        onDestroyed()
    }
}
