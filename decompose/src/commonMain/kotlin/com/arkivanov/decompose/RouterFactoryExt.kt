package com.arkivanov.decompose

import com.arkivanov.decompose.statekeeper.Parcelable

/**
 * A convenience extension function for [RouterFactory.router].
 */
inline fun <reified C : Parcelable, T : Any> RouterFactory.router(
    initialConfiguration: C,
    initialBackStack: List<C> = emptyList(),
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> =
    router(
        initialConfiguration = { initialConfiguration },
        initialBackStack = { initialBackStack },
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory
    )

/**
 * A convenience extension function for [RouterFactory.router].
 */
inline fun <reified C : Parcelable, T : Any> RouterFactory.router(
    noinline initialConfiguration: () -> C,
    noinline initialBackStack: () -> List<C> = ::emptyList,
    key: String = "DefaultRouter",
    handleBackButton: Boolean = false,
    noinline childFactory: (configuration: C, ComponentContext) -> T
): Router<C, T> =
    router(
        initialConfiguration = initialConfiguration,
        initialBackStack = initialBackStack,
        configurationClass = C::class,
        key = key,
        handleBackButton = handleBackButton,
        childFactory = childFactory
    )
