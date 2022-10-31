package com.arkivanov.sample.shared.customnavigation

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.decompose.value.reduce
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.arkivanov.essenty.lifecycle.subscribe
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.essenty.statekeeper.consume
import com.arkivanov.sample.shared.customnavigation.KittenComponent.ImageType
import com.arkivanov.sample.shared.customnavigation.KittenComponent.Model
import com.badoo.reaktive.disposable.Disposable
import com.badoo.reaktive.observable.observableInterval
import com.badoo.reaktive.observable.subscribe
import com.badoo.reaktive.scheduler.mainScheduler

class DefaultKittenComponent(
    componentContext: ComponentContext,
    private val imageType: ImageType,
) : KittenComponent, ComponentContext by componentContext {

    private val handler =
        instanceKeeper.getOrCreate(KEY_STATE) {
            Handler(initialState = stateKeeper.consume(KEY_STATE) ?: State())
        }

    override val model: Value<Model> = handler.state.map { it.toModel() }

    init {
        lifecycle.subscribe(
            onStart = handler::resume,
            onStop = handler::pause,
        )
    }

    private fun State.toModel(): Model =
        Model(
            imageType = imageType,
            text = count.toString().padStart(length = 3, padChar = '0'),
        )

    private companion object {
        private const val KEY_STATE = "STATE"
    }

    @Parcelize
    private data class State(
        val count: Int = 0,
    ) : Parcelable

    private class Handler(initialState: State) : InstanceKeeper.Instance {
        val state: MutableValue<State> = MutableValue(initialState)

        private var disposable: Disposable? = null

        fun resume() {
            disposable?.dispose()

            disposable =
                observableInterval(periodMillis = 250L, scheduler = mainScheduler).subscribe(isThreadLocal = true) {
                    state.reduce { it.copy(count = it.count + 1) }
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
