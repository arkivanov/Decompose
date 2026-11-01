package com.arkivanov.decompose.router.children

import androidx.lifecycle.ViewModelStore
import androidx.savedstate.SavedState

internal interface ChildItemFactory<C : Any, out T : Any> {

    operator fun invoke(
        configuration: C,
        key: String,
        savedState: SavedState? = null,
        viewModelStore: ViewModelStore? = null,
    ): ChildItem.Created<C, T>
}
