package com.arkivanov.decompose

interface Component<out T : Any> {

    val model: T
}
