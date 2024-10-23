package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.slot.ChildSlot
import com.arkivanov.decompose.router.slot.SlotNavigation
import com.arkivanov.decompose.router.slot.activate
import com.arkivanov.decompose.router.slot.childSlot
import com.arkivanov.decompose.router.slot.dismiss
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.decompose.value.update
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.retainedInstance
import com.arkivanov.sample.shared.counters.counter.CounterComponent.Model
import com.arkivanov.sample.shared.dialog.DefaultDialogComponent
import com.arkivanov.sample.shared.dialog.DialogComponent
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.observableInterval
import com.badoo.reaktive.scheduler.Scheduler
import com.badoo.reaktive.scheduler.mainScheduler
import kotlinx.serialization.Serializable
import kotlin.time.Duration.Companion.milliseconds

internal class DefaultCounterComponent(
    componentContext: ComponentContext,
    private val title: String,
    private val isBackEnabled: Boolean,
    private val onNext: () -> Unit,
    private val onPrev: () -> Unit,
    tickScheduler: Scheduler = mainScheduler,
) : CounterComponent, ComponentContext by componentContext {

    private val handler =
        retainedInstance {
            Handler(
                initialState = stateKeeper.consume(key = KEY_STATE, strategy = State.serializer()) ?: State(),
                tickScheduler = tickScheduler,
            )
        }

    override val model: Value<Model> = handler.state.map { it.toModel() }

    private val dialogNavigation = SlotNavigation<DialogConfig>()

    private val _dialogSlot =
        childSlot(
            source = dialogNavigation,
            serializer = null,
            handleBackButton = true,
            childFactory = { config, _ ->
                DefaultDialogComponent(
                    title = "Counter",
                    message = "Value: ${formatCount(config.count)}",
                    onDismissed = dialogNavigation::dismiss,
                )
            }
        )

    override val dialogSlot: Value<ChildSlot<*, DialogComponent>> = _dialogSlot

    override fun onInfoClicked() {
        dialogNavigation.activate(DialogConfig(count = handler.state.value.count))
    }

    init {
        stateKeeper.register(key = KEY_STATE, strategy = State.serializer()) { handler.state.value }
    }

    private fun State.toModel(): Model =
        Model(
            title = title,
            text = formatCount(count),
            isBackEnabled = isBackEnabled,
        )

    private fun formatCount(count: Int): String =
        count.toString().padStart(length = 3, padChar = '0')

    override fun onNextClicked() {
        onNext()
    }

    override fun onPrevClicked() {
        onPrev()
    }

    private companion object {
        private const val KEY_STATE = "STATE"
    }

    @Serializable
    private data class State(
        val count: Int = 0,
    )

    @Serializable
    private data class DialogConfig(
        val count: Int,
    )

    private class Handler(
        initialState: State,
        tickScheduler: Scheduler,
    ) : InstanceKeeper.Instance, DisposableScope by DisposableScope() {
        val state: MutableValue<State> = MutableValue(initialState)

        init {
            observableInterval(period = 250.milliseconds, scheduler = tickScheduler).subscribeScoped {
                state.update { it.copy(count = it.count + 1) }
            }
        }

        override fun onDestroy() {
            dispose()
        }
    }
}
