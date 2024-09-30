package com.arkivanov.decompose.router

import com.arkivanov.decompose.ComponentContext

class Component<out T : Any>(
    val config: T,
    componentContext: ComponentContext,
) : ComponentContext by componentContext
