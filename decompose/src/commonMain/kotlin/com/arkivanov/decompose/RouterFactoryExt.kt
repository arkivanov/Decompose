package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable

inline fun <reified C : Parcelable, T : Any> RouterFactory.router(
    initialConfiguration: C,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline componentFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> =
    router(
        initialConfiguration = initialConfiguration,
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        componentFactory = componentFactory
    )
