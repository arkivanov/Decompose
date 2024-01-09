package com.arkivanov.decompose

import android.os.Bundle
import android.os.Parcel
import androidx.activity.OnBackPressedDispatcher
import androidx.activity.OnBackPressedDispatcherOwner
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.LifecycleRegistry
import androidx.lifecycle.ViewModelStore
import androidx.lifecycle.ViewModelStoreOwner
import androidx.savedstate.SavedStateRegistry
import androidx.savedstate.SavedStateRegistryController
import androidx.savedstate.SavedStateRegistryOwner

class TestOwner(
    savedState: Bundle = Bundle(),
    override val viewModelStore: ViewModelStore = ViewModelStore(),
) : LifecycleOwner, SavedStateRegistryOwner, ViewModelStoreOwner, OnBackPressedDispatcherOwner {
    private val savedStateRegistryController: SavedStateRegistryController = SavedStateRegistryController.create(this)
    override val lifecycle: LifecycleRegistry = LifecycleRegistry(this)
    override val savedStateRegistry: SavedStateRegistry get() = savedStateRegistryController.savedStateRegistry
    override val onBackPressedDispatcher: OnBackPressedDispatcher = OnBackPressedDispatcher()

    init {
        savedStateRegistryController.performRestore(savedState)
        lifecycle.handleLifecycleEvent(Lifecycle.Event.ON_RESUME)
    }

    fun recreate(isChangingConfigurations: Boolean = true): TestOwner {
        val bundle = Bundle()
        savedStateRegistryController.performSave(bundle)
        val savedState = bundle.parcelize().deparcelize()
        lifecycle.handleLifecycleEvent(Lifecycle.Event.ON_DESTROY)

        return if (isChangingConfigurations) {
            TestOwner(savedState = savedState, viewModelStore = viewModelStore)
        } else {
            viewModelStore.clear()
            TestOwner(savedState = savedState)
        }
    }

    private fun Bundle.parcelize(): ByteArray {
        val parcel = Parcel.obtain()
        parcel.writeBundle(this)
        return parcel.marshall()
    }

    private fun ByteArray.deparcelize(): Bundle {
        val parcel = Parcel.obtain()
        parcel.unmarshall(this, 0, size)
        parcel.setDataPosition(0)

        return requireNotNull(parcel.readBundle())
    }
}
