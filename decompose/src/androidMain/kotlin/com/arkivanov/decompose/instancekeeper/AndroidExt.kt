package com.arkivanov.decompose.instancekeeper

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelStore

private const val KEY_VIEW_MODEL = "STATE_KEEPER_VIEW_MODEL"

fun ViewModelStore.toInstanceKeeper(): InstanceKeeper =
    ViewModelProvider(
        this,
        object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel?> create(modelClass: Class<T>): T = InstanceKeeperViewModel() as T
        }
    )
        .get(KEY_VIEW_MODEL, InstanceKeeperViewModel::class.java)
        .instanceKeeperDispatcher

internal class InstanceKeeperViewModel : ViewModel() {
    val instanceKeeperDispatcher = InstanceKeeperDispatcher()

    override fun onCleared() {
        instanceKeeperDispatcher.destroy()
    }
}
