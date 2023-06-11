package com.arkivanov.sample.shared.cards.card

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.update
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.subscribe
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.statekeeper.consume
import com.arkivanov.sample.shared.cards.card.CardComponent.Model
import com.badoo.reaktive.disposable.Disposable
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.observableInterval
import com.badoo.reaktive.observable.subscribe
import com.badoo.reaktive.scheduler.Scheduler
import com.badoo.reaktive.scheduler.mainScheduler
import com.badoo.reaktive.subject.behavior.BehaviorObservable
import com.badoo.reaktive.subject.behavior.BehaviorSubject

class DefaultCardComponent(
    componentContext: ComponentContext,
    color: Long,
    number: Int,
    tickScheduler: Scheduler = mainScheduler,
) : CardComponent, ComponentContext by componentContext, DisposableScope by DisposableScope() {

    private val handler =
        instanceKeeper.getOrCreate {
            Handler(
                initialCount = stateKeeper.consume<SavedState>(key = KEY_SAVED_STATE)?.count ?: 0,
                tickScheduler = tickScheduler,
            )
        }

    private val _model = MutableValue(Model(color = color, title = number.toString()))
    override val model: Value<Model> = _model

    init {
        stateKeeper.register(KEY_SAVED_STATE) { SavedState(count = handler.count.value) }

        handler.count.subscribeScoped { count ->
            _model.update { it.copy(text = "Count: $count") }
        }

        lifecycle.subscribe(
            onCreate = { setStatus("Created") },
            onStart = { setStatus("Started") },
            onResume = { setStatus("Resumed") },
            onPause = { setStatus("Paused") },
            onStop = { setStatus("Stopped") },
            onDestroy = { setStatus("Destroyed") },
        )

        lifecycle.subscribe(
            onStart = handler::start,
            onStop = handler::stop,
        )
    }

    private fun setStatus(status: String) {
        _model.update { it.copy(status = "Status: $status") }
    }

    private companion object {
        const val KEY_SAVED_STATE: String = "SAVED_STATE"
    }

    private class Handler(
        initialCount: Int,
        private val tickScheduler: Scheduler,
    ) : InstanceKeeper.Instance {
        private val _count = BehaviorSubject(initialCount)
        val count: BehaviorObservable<Int> = _count
        private var disposable: Disposable? = null

        fun start() {
            disposable =
                observableInterval(periodMillis = 250L, scheduler = tickScheduler)
                    .subscribe { _count.onNext(_count.value + 1) }
        }

        fun stop() {
            disposable?.dispose()
            disposable = null
        }

        override fun onDestroy() {
            stop()
        }
    }

    @Parcelize
    private class SavedState(val count: Int) : Parcelable
}
