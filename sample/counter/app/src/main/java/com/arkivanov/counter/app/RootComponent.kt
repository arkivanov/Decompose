package com.arkivanov.counter.app

import android.os.Parcelable
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.Composable
import androidx.lifecycle.Lifecycle
import androidx.savedstate.SavedStateRegistry
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ParcelableRouterStateKeeper
import com.arkivanov.decompose.Router
import kotlinx.android.parcel.Parcelize

class RootComponent(
    lifecycle: Lifecycle,
    savedStateRegistry: SavedStateRegistry,
    onBackPressedDispatcher: OnBackPressedDispatcher
) : Component {

    private val router =
        Router<Configuration>(
            initialConfiguration = Configuration.FirstCounter,
            lifecycle = lifecycle,
            stateKeeper = ParcelableRouterStateKeeper(
                savedStateRegistry = savedStateRegistry,
                key = "RootRooter"
            ),
            onBackPressedDispatcher = onBackPressedDispatcher,
            resolve = ::resolveChild
        )

    @Composable
    override fun content() {
        router.content()
    }

    private fun resolveChild(configuration: Configuration, lifecycle: Lifecycle): Component =
        when (configuration) {
            is Configuration.FirstCounter -> firstCounter(lifecycle)
            is Configuration.SecondCounter -> secondCounter(configuration, lifecycle)
        }

    private fun firstCounter(lifecycle: Lifecycle): CounterComponent =
        CounterComponent(
            lifecycle = lifecycle,
            title = "First counter",
            action = "Open second counter"
        ) { count ->
            router.push(Configuration.SecondCounter(firstCount = count))
        }

    private fun secondCounter(configuration: Configuration.SecondCounter, lifecycle: Lifecycle): CounterComponent =
        CounterComponent(
            lifecycle = lifecycle,
            title = "Second counter, first count is ${configuration.firstCount}",
            action = "Close"
        ) {
            router.pop()
        }

    private sealed class Configuration : Parcelable {
        @Parcelize
        object FirstCounter : Configuration()

        @Parcelize
        data class SecondCounter(val firstCount: Int) : Configuration()
    }
}
