package com.arkivanov.sample.shared.counters.counter

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.overlay.*
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.decompose.value.reduce
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.statekeeper.consume
import com.arkivanov.sample.shared.counters.counter.CounterComponent.Model
import com.arkivanov.sample.shared.dialog.DefaultDialogComponent
import com.arkivanov.sample.shared.dialog.DialogComponent
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.observableInterval
import com.badoo.reaktive.scheduler.mainScheduler

internal class DefaultCounterComponent(
    componentContext: ComponentContext,
    private val title: String,
    private val isBackEnabled: Boolean,
    private val onNext: () -> Unit,
    private val onPrev: () -> Unit,
) : CounterComponent, ComponentContext by componentContext {

    private val handler =
        instanceKeeper.getOrCreate(KEY_STATE) {
            Handler(stateKeeper.consume(KEY_STATE) ?: State())
        }

    override val model: Value<Model> = handler.state.map { it.toModel() }

    private val dialogNavigation = OverlayNavigation<DialogConfig>()

    private val _dialogOverlay =
        childOverlay<DialogConfig, DialogComponent>(
            source = dialogNavigation,
            persistent = false,
            handleBackButton = true,
            childFactory = { config, _ ->
                DefaultDialogComponent(
                    title = "Counter",
                    message = "Value: ${config.count}",
                    onDismissed = dialogNavigation::dismiss,
                )
            }
        )

    override val dialogOverlay: Value<ChildOverlay<*, DialogComponent>> = _dialogOverlay

    override fun onInfoClicked() {
        dialogNavigation.activate(DialogConfig(count = handler.state.value.count))
    }

    init {
        stateKeeper.register(KEY_STATE) { handler.state.value }
    }

    private fun State.toModel(): Model =
        Model(
            title = title,
            text = count.toString().padStart(length = 3, padChar = '0'),
            isBackEnabled = isBackEnabled,
        )

    override fun onNextClicked() {
        onNext()
    }

    override fun onPrevClicked() {
        onPrev()
    }

    private companion object {
        private const val KEY_STATE = "STATE"
    }

    @Parcelize
    private data class State(
        val count: Int = 0,
    ) : Parcelable

    @Parcelize
    private data class DialogConfig(
        val count: Int,
    ) : Parcelable

    private class Handler(initialState: State) : InstanceKeeper.Instance, DisposableScope by DisposableScope() {
        val state: MutableValue<State> = MutableValue(initialState)

        init {
            observableInterval(periodMillis = 250L, scheduler = mainScheduler)
                .subscribeScoped(isThreadLocal = true) {
                    state.reduce { it.copy(count = it.count + 1) }
                }
        }

        override fun onDestroy() {
            dispose()
        }
    }
}
