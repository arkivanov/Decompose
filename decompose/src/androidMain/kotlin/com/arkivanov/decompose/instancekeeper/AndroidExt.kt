package com.arkivanov.decompose.instancekeeper

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore

private const val KEY_VIEW_MODEL = "STATE_KEEPER_VIEW_MODEL"

/**
 * Creates a new instance of [InstanceKeeper] and attaches it to the provided [ViewModelStore]
 */
fun InstanceKeeper(viewModelStore: ViewModelStore): InstanceKeeper =
    ViewModelProvider(
        viewModelStore,
        object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel?> create(modelClass: Class<T>): T = InstanceKeeperViewModel() as T
        }
    )
        .get(KEY_VIEW_MODEL, InstanceKeeperViewModel::class.java)
        .instanceKeeperDispatcher

@Deprecated("Use InstanceKeeper(ViewModelStore) builder function", ReplaceWith("InstanceKeeper(this)"))
fun ViewModelStore.toInstanceKeeper(): InstanceKeeper = InstanceKeeper(this)

internal class InstanceKeeperViewModel : ViewModel() {
    val instanceKeeperDispatcher = InstanceKeeperDispatcher()

    override fun onCleared() {
        instanceKeeperDispatcher.destroy()
    }
}
