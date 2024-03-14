package com.arkivanov.decompose

/**
 * Represents a holder of [ComponentContextFactory].
 */
interface ComponentContextFactoryOwner<out T : Any> {

    /**
     * Returns a [ComponentContextFactory] that creates new instances of
     * component context of type [T], not attached to any parent component context.
     *
     * This property is usually used by various navigation models (such as
     * [childStack][com.arkivanov.decompose.router.stack.childStack]) for creating
     * component contexts for child components. If you need to create a child
     * component context, see [childContext].
     */
    val componentContextFactory: ComponentContextFactory<T>
}
