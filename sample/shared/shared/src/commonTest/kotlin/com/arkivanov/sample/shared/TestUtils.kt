package com.arkivanov.sample.shared

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.HostComponentContext
import com.arkivanov.decompose.lifecycle.moveToResumed
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.active
import com.arkivanov.decompose.value.Value
import kotlin.test.assertIs

internal fun <T : Any> createComponent(factory: (ComponentContext) -> T): T {
    val ctx = HostComponentContext()
    val component = factory(ctx)
    ctx.lifecycle.moveToResumed()

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
