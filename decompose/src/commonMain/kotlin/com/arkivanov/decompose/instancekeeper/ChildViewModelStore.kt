package com.arkivanov.decompose.instancekeeper

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelStore

internal fun ViewModelStore.child(key: String, recreate: Boolean = false): ViewModelStore =
    getOrCreate(key, ::ChildViewModelStoreHolder)
        .apply {
            if (recreate) {
                recreate()
            }
        }
        .viewModelStore

private class ChildViewModelStoreHolder : ViewModel() {
    var viewModelStore: ViewModelStore = ViewModelStore()
        private set

    override fun onCleared() {
        viewModelStore.clear()
    }

    fun recreate() {
        viewModelStore.clear()
        viewModelStore = ViewModelStore()
    }
}
