package com.arkivanov.decompose

import android.os.Parcelable

inline fun <reified C : Parcelable> RouterFactory.router(
    initialConfiguration: C,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline componentFactory: (configuration: C, ComponentContext) -> Component
): Router<C> =
    router(
        initialConfiguration = initialConfiguration,
        configurationClassLoader = C::class.java.classLoader,
        key = key,
        handleBackButton = handleBackButton,
        componentFactory = componentFactory
    )
