package com.arkivanov.sample.shared.dynamicfeatures

internal inline fun <reified T : Any> feature(vararg args: Any?): T =
    Class.forName("${T::class.java.name}Component")
        .declaredConstructors
        .first()
        .newInstance(*args) as T
