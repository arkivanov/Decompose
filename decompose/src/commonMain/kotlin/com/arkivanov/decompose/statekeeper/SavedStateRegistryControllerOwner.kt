package com.arkivanov.decompose.statekeeper

import androidx.savedstate.SavedStateRegistryController

interface SavedStateRegistryControllerOwner {

    val savedStateRegistryController: SavedStateRegistryController
}
