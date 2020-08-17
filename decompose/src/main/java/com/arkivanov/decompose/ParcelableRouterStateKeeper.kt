package com.arkivanov.decompose

import android.os.Bundle
import android.os.Parcelable
import androidx.savedstate.SavedStateRegistry

class ParcelableRouterStateKeeper<C : Parcelable>(
    savedStateRegistry: SavedStateRegistry,
    key: String,
    configurationClassLoader: ClassLoader?
) : AndroidRouterStateKeeper<C>(savedStateRegistry, key, configurationClassLoader) {

    override fun Bundle.getConfigurations(key: String): List<C>? = getParcelableArrayList(key)

    override fun Bundle.putConfigurations(key: String, configurations: List<C>) {
        putParcelableArrayList(key, ArrayList(configurations))
    }

    companion object {
        inline operator fun <reified C : Parcelable> invoke(
            savedStateRegistry: SavedStateRegistry,
            key: String
        ): ParcelableRouterStateKeeper<C> =
            ParcelableRouterStateKeeper(
                savedStateRegistry = savedStateRegistry,
                key = key,
                configurationClassLoader = C::class.java.classLoader
            )
    }
}
