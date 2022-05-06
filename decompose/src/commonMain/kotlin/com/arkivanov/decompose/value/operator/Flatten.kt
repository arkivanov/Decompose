package com.arkivanov.decompose.value.operator

import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.ValueObserver

fun <T: Any> Value<Value<T>>.flatten() : Value<T> = FlattenedValue(this)

private class FlattenedValue<T : Any>(
    private val upstream : Value<Value<T>>
) : Value<T>(){
    override val value: T
        get() = upstream.value.value

    private var observers = emptySet<ValueObserver<T>>()

    private var valueT : Value<T> = upstream.value

    private var valueObserver : ValueObserver<T> = ::notifyObservers
    private var valueTObserver : ValueObserver<Value<T>> = ::changeValueT


    fun notifyObservers(value : T){
        observers.forEach { it(value) }
    }

    fun changeValueT(value: Value<T>){
        valueT.unsubscribe(valueObserver)
        value.subscribe(valueObserver)
        valueT = value
    }

    override fun subscribe(observer: ValueObserver<T>) {
        if (observers.isEmpty()){
            upstream.subscribe(valueTObserver)
        }

        this.observers+=observer
        observer(value)
    }

    override fun unsubscribe(observer: ValueObserver<T>) {
        this.observers-=observer

        if (observers.isEmpty()){
            upstream.unsubscribe(valueTObserver)
        }
    }
}
