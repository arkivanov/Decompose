package com.arkivanov.sample.shared

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.active
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import kotlin.test.assertIs

internal fun <T : Any> createComponent(factory: (ComponentContext) -> T): T {
    val lifecycle = LifecycleRegistry()
    val component = factory(DefaultComponentContext(lifecycle = lifecycle))
    lifecycle.resume()

    return component
}

internal inline fun <reified T : Any> Value<ChildStack<*, *>>.assertActiveInstance() {
    value.assertActiveInstance<T>()
}

internal inline fun <reified T : Any> ChildStack<*, *>.assertActiveInstance() {
    assertIs<T>(active.instance)
}

internal inline fun <reified T : Any> Value<ChildStack<*, *>>.activeInstance(): T =
    active.instance as T
