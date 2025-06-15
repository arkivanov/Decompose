package com.arkivanov.sample.shared.counters.counter

import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.createSavedStateHandle
import androidx.lifecycle.enableSavedStateHandles
import androidx.lifecycle.lifecycleScope
import androidx.lifecycle.viewModelScope
import com.arkivanov.decompose.JetpackComponentContext
import com.arkivanov.decompose.router.slot.ChildSlot
import com.arkivanov.decompose.router.slot.SlotNavigation
import com.arkivanov.decompose.router.slot.activate
import com.arkivanov.decompose.router.slot.childSlot
import com.arkivanov.decompose.router.slot.dismiss
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.viewModel
import com.arkivanov.sample.shared.counters.counter.CounterComponent.Model
import com.arkivanov.sample.shared.dialog.DefaultDialogComponent
import com.arkivanov.sample.shared.dialog.DialogComponent
import com.badoo.reaktive.disposable.scope.DisposableScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.serialization.Serializable
import kotlin.time.Duration.Companion.milliseconds

internal class DefaultCounterComponent(
    componentContext: JetpackComponentContext,
    private val title: String,
    private val isBackEnabled: Boolean,
    private val onNext: () -> Unit,
    private val onPrev: () -> Unit,
) : CounterComponent, JetpackComponentContext by componentContext {

    private val handler = viewModel { Handler(createSavedStateHandle()) }

    override val model: StateFlow<Model> =
        handler.state
            .map { getModel(count = it) }
            .stateIn(lifecycleScope, SharingStarted.Eagerly, Model())

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
        dialogNavigation.activate(DialogConfig(count = handler.state.value))
    }

    private fun getModel(count: Int): Model =
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
        private val savedStateHandle: SavedStateHandle,
    ) : ViewModel(), DisposableScope by DisposableScope() {
        val state: MutableStateFlow<Int> = savedStateHandle.getMutableStateFlow(key = "state", initialValue = 0)

        init {
            viewModelScope.launch {
                while (true) {
                    state.update { it + 1 }
                    delay(250.milliseconds)
                }
            }
        }
    }
}
