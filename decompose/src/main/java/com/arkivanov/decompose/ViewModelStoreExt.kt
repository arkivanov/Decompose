package com.arkivanov.decompose

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelStore

internal fun ViewModelStore.child(key: String): ViewModelStore =
    viewModel(key = key, factory = ::ChildViewModel)
        .viewModelStore

private class ChildViewModel : ViewModel() {
    val viewModelStore = ViewModelStore()

    override fun onCleared() {
        viewModelStore.clear()

        super.onCleared()
    }
}
