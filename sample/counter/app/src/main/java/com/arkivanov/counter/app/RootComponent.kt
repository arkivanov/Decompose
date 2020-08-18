package com.arkivanov.counter.app

import android.os.Parcelable
import androidx.activity.OnBackPressedDispatcher
import androidx.compose.runtime.Composable
import androidx.lifecycle.Lifecycle
import androidx.savedstate.SavedStateRegistry
import com.arkivanov.decompose.Component
import com.arkivanov.decompose.ParcelableRouterStateKeeper
import com.arkivanov.decompose.Router
import com.arkivanov.decompose.RouterParams
import kotlinx.android.parcel.Parcelize

class RootComponent(
    private val savedStateRegistry: SavedStateRegistry,
    private val onBackPressedDispatcher: OnBackPressedDispatcher
) : Component {

    @Composable
    override fun content() {
        Router(params = ::routerParams) { configuration, lifecycle ->
            resolveChild(configuration, lifecycle)
        }
    }

    private fun Router<Configuration>.resolveChild(configuration: Configuration, lifecycle: Lifecycle): Component =
        when (configuration) {
            is Configuration.FirstCounter -> firstCounter(lifecycle)
            is Configuration.SecondCounter -> secondCounter(configuration, lifecycle)
        }

    private fun Router<Configuration>.firstCounter(lifecycle: Lifecycle): CounterComponent =
        CounterComponent(
            lifecycle = lifecycle,
            title = "First counter",
            action = "Open second counter"
        ) { count ->
            push(Configuration.SecondCounter(firstCount = count))
        }

    private fun Router<Configuration>.secondCounter(configuration: Configuration.SecondCounter, lifecycle: Lifecycle): CounterComponent =
        CounterComponent(
            lifecycle = lifecycle,
            title = "Second counter, first count is ${configuration.firstCount}",
            action = "Close"
        ) {
            pop()
        }

    private fun routerParams(): RouterParams<Configuration> =
        RouterParams(
            initialConfiguration = Configuration.FirstCounter,
            stateKeeper = ParcelableRouterStateKeeper(
                savedStateRegistry = savedStateRegistry,
                key = "RootRooter"
            ),
            onBackPressedDispatcher = onBackPressedDispatcher
        )

    private sealed class Configuration : Parcelable {
        @Parcelize
        object FirstCounter : Configuration()

        @Parcelize
        data class SecondCounter(val firstCount: Int) : Configuration()
    }
}
