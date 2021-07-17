package com.arkivanov.sample.masterdetail.shared

import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.ValueObserver
import react.RComponent
import react.RState
import react.setState

abstract class RenderableComponent<T : Any, S : RState>(props: Props<T>, initialState: S) : RComponent<Props<T>, S>(props) {

    protected val component: T get() = props.component
    private val subscriptions = ArrayList<Subscription<*>>()

    init {
        state = initialState
    }

    override fun componentDidMount() {
        subscriptions.forEach { subscribe(it) }
    }

    private fun <T : Any> subscribe(subscription: Subscription<T>) {
        subscription.value.subscribe(subscription.observer)
    }

    override fun componentWillUnmount() {
        subscriptions.forEach { unsubscribe(it) }
    }

    private fun <T : Any> unsubscribe(subscription: Subscription<T>) {
        subscription.value.unsubscribe(subscription.observer)
    }

    protected fun <T : Any> Value<T>.bindToState(buildState: S.(T) -> Unit) {
        subscriptions += Subscription(this) { data -> setState { buildState(data) } }
    }

    protected class Subscription<T : Any>(
        val value: Value<T>,
        val observer: ValueObserver<T>
    )
}
