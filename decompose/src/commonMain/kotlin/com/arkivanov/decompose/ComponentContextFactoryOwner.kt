package com.arkivanov.decompose

/**
 * Represents a holder of [ComponentContextFactory].
 */
interface ComponentContextFactoryOwner<out T : CoreComponentContext> {

    val componentContextFactory: ComponentContextFactory<T>
}
