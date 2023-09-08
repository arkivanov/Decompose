package com.arkivanov.decompose

import kotlin.reflect.KClass

internal actual val KClass<*>.uniqueName: String?
    get() = qualifiedName
