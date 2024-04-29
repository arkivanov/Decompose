package com.arkivanov.decompose

/**
 * A default component context interface provided by Decompose.
 * Should be passed to component classes via their constructors to
 * enable features like lifecycle handling, state preservation, navigation,
 * etc.
 *
 * It is also possible to define your own interface with additional
 * properties or methods, and use that instead of this one.
 */
interface ComponentContext : GenericComponentContext<ComponentContext>
