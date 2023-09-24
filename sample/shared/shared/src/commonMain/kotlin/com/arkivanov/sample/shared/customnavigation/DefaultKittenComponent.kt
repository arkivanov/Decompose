package com.arkivanov.sample.shared.customnavigation

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.decompose.value.update
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.subscribe
import com.arkivanov.sample.shared.customnavigation.KittenComponent.ImageType
import com.arkivanov.sample.shared.customnavigation.KittenComponent.Model
import com.badoo.reaktive.disposable.Disposable
import com.badoo.reaktive.observable.observableInterval
import com.badoo.reaktive.observable.subscribe
import com.badoo.reaktive.scheduler.mainScheduler
import kotlinx.serialization.Serializable

class DefaultKittenComponent(
    componentContext: ComponentContext,
    private val imageType: ImageType,
) : KittenComponent, ComponentContext by componentContext {

    private val handler =
        instanceKeeper.getOrCreate(KEY_STATE) {
            Handler(initialState = stateKeeper.consume(key = KEY_STATE, strategy = State.serializer()) ?: State())
        }

    override val model: Value<Model> = handler.state.map { it.toModel() }

    init {
        lifecycle.subscribe(
            onStart = handler::resume,
            onStop = handler::pause,
        )

        stateKeeper.register(key = KEY_STATE, strategy = State.serializer()) { handler.state.value }
    }

    private fun State.toModel(): Model =
        Model(
            imageType = imageType,
            text = count.toString().padStart(length = 3, padChar = '0'),
        )

    private companion object {
        private const val KEY_STATE = "STATE"
    }

    @Serializable
    private data class State(
        val count: Int = 0,
    )

    private class Handler(initialState: State) : InstanceKeeper.Instance {
        val state: MutableValue<State> = MutableValue(initialState)

        private var disposable: Disposable? = null

        fun resume() {
            disposable?.dispose()

            disposable =
                observableInterval(periodMillis = 250L, scheduler = mainScheduler).subscribe(isThreadLocal = true) {
                    state.update { it.copy(count = it.count + 1) }
                }
        }

        fun pause() {
            disposable?.dispose()
            disposable = null
        }

        override fun onDestroy() {
            pause()
        }
    }
}
