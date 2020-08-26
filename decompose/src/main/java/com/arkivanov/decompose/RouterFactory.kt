package com.arkivanov.decompose

import android.os.Parcelable

interface RouterFactory {

    fun <C : Parcelable> router(
        initialConfiguration: C,
        configurationClassLoader: ClassLoader?,
        key: String = "DefaultRouter",
        handleBackButton: Boolean = false,
        componentFactory: (configuration: C, ComponentContext) -> Component
    ): Router<C>
}
