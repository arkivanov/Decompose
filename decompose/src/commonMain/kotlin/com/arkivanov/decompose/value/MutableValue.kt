package com.arkivanov.decompose.value

abstract class MutableValue<T : Any> : Value<T>() {

    abstract override var value: T
}
