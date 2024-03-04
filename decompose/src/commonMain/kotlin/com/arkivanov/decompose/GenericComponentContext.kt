package com.arkivanov.decompose

/**
 * A generic component context that extends [CoreComponentContext], and also able to create new instances
 * of itself via [ComponentContextFactory].
 */
interface GenericComponentContext<out T : CoreComponentContext> : CoreComponentContext, ComponentContextFactoryOwner<T>
