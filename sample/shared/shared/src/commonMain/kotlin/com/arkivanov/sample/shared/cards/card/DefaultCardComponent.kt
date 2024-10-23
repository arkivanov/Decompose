package com.arkivanov.sample.shared.cards.card

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.update
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.retainedInstance
import com.arkivanov.essenty.lifecycle.reaktive.disposableScope
import com.arkivanov.essenty.lifecycle.subscribe
import com.arkivanov.essenty.statekeeper.ExperimentalStateKeeperApi
import com.arkivanov.essenty.statekeeper.saveable
import com.arkivanov.sample.shared.cards.card.CardComponent.Model
import com.badoo.reaktive.disposable.Disposable
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.observableInterval
import com.badoo.reaktive.observable.subscribe
import com.badoo.reaktive.scheduler.Scheduler
import com.badoo.reaktive.scheduler.mainScheduler
import com.badoo.reaktive.subject.behavior.BehaviorObservable
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import kotlinx.serialization.builtins.serializer
import kotlin.time.Duration.Companion.milliseconds

class DefaultCardComponent(
    componentContext: ComponentContext,
    color: Long,
    number: Int,
    tickScheduler: Scheduler = mainScheduler,
) : CardComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    @OptIn(ExperimentalStateKeeperApi::class)
    private val handler: Handler by saveable(serializer = Int.serializer(), state = { it.count.value }) { savedState ->
        retainedInstance {
            Handler(savedState = savedState, tickScheduler = tickScheduler)
        }
    }

    private val _model = MutableValue(Model(color = color, title = number.toString()))
    override val model: Value<Model> = _model

    init {
        handler.count.subscribeScoped { count ->
            _model.update { it.copy(text = "Count: $count") }
        }

        lifecycle.subscribe(
            onStart = handler::start,
            onStop = handler::stop,
        )
    }

    private fun setStatus(status: String) {
        _model.update { it.copy(status = "Status: $status") }
    }

    private class Handler(
        savedState: Int?,
        private val tickScheduler: Scheduler,
    ) : InstanceKeeper.Instance {
        private val _count = BehaviorSubject(savedState ?: 0)
        val count: BehaviorObservable<Int> = _count
        private var disposable: Disposable? = null

        fun start() {
            disposable =
                observableInterval(period = 250.milliseconds, scheduler = tickScheduler)
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
}
