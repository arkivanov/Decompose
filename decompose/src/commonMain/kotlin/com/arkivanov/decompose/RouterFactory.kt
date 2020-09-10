package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable
import kotlin.reflect.KClass

interface RouterFactory {

    fun <C : Parcelable, T : Any> router(
        initialConfiguration: C,
        configurationClass: KClass<out C>,
        key: String = "DefaultRouter",
        handleBackButton: Boolean = false,
        componentFactory: (configuration: C, ComponentContext) -> T
    ): Router<C, T>
}
