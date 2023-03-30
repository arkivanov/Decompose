package com.arkivanov.decompose.mainthread

import java.util.ServiceLoader

internal val mainThreadChecker: MainThreadChecker? by lazy {
    ServiceLoader.load(MainThreadChecker::class.java).firstOrNull()
}
