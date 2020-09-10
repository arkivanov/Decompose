package com.arkivanov.sample.counter.shared.counter

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.instancekeeper.InstanceKeeper
import com.arkivanov.decompose.instancekeeper.getOrCreate
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.consume
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.sample.counter.shared.counter.Counter.Data
import com.arkivanov.sample.counter.shared.counter.Counter.Model
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.maybe.maybeTimer
import com.badoo.reaktive.scheduler.mainScheduler
import com.badoo.reaktive.single.repeatWhen
import com.badoo.reaktive.single.singleOf

internal class CounterImpl(
    componentContext: ComponentContext,
    index: Int
) : Counter, ComponentContext by componentContext {

    private val handler =
        instanceKeeper.getOrCreate(KEY_STATE) {
            Handler(stateKeeper.consume(KEY_STATE) ?: State(index = index))
        }

    override val model: Model =
        object : Model {
            override val data: Value<Data> = handler.state.map { it.toData() }
        }

    init {
        stateKeeper.register(KEY_STATE) { handler.state.value }
    }

    private fun State.toData(): Data =
        Data(text = "Counter${index}: ${count.toString().padStart(length = 3, padChar = '0')}")

    private companion object {
        private const val KEY_STATE = "STATE"
    }

    @Parcelize
    private data class State(
        val index: Int,
        val count: Int = 0
    ) : Parcelable

    private class Handler(initialState: State) : InstanceKeeper.Instance, DisposableScope by DisposableScope() {
        val state = MutableValue(initialState)

        init {
            singleOf(Unit)
                .repeatWhen { _, _ -> maybeTimer(250L, mainScheduler) }
                .subscribeScoped(isThreadLocal = true) {
                    state.value = state.value.run { copy(count = count + 1) }
                }
        }

        override fun onDestroy() {
            dispose()
        }
    }
}
