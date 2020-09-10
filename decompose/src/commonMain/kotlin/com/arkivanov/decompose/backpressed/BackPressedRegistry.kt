package com.arkivanov.decompose.backpressed

interface BackPressedRegistry {

    fun register(handler: () -> Boolean)

    fun unregister(handler: () -> Boolean)
}
