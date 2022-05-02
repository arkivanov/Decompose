package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.Router
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.router.pop
import com.arkivanov.decompose.router.push
import com.arkivanov.decompose.router.router
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.counters.counter.Counter
import com.arkivanov.sample.shared.counters.counter.CounterComponent

internal class CountersComponent(
    componentContext: ComponentContext,
) : Counters, ComponentContext by componentContext {

    private val firstRouter: Router<Config, Counter> =
        router(
            initialConfiguration = Config(index = 0, isBackEnabled = false),
            key = "LeftRouter",
            childFactory = ::firstChild,
        )

    override val firstRouterState: Value<RouterState<*, Counter>> get() = firstRouter.state

    private val secondRouter: Router<Config, Counter> =
        router(
            initialConfiguration = Config(index = 0, isBackEnabled = false),
            key = "RightRouter",
            childFactory = ::secondChild,
        )

    override val secondRouterState: Value<RouterState<*, Counter>> get() = secondRouter.state

    private fun firstChild(
        config: Config,
        componentContext: ComponentContext,
    ): Counter =
        CounterComponent(
            componentContext = componentContext,
            title = "Counter ${config.index}",
            isBackEnabled = config.isBackEnabled,
            onNext = { firstRouter.push(Config(index = config.index + 1, isBackEnabled = true)) },
            onPrev = { firstRouter.pop() },
        )

    private fun secondChild(
        config: Config,
        componentContext: ComponentContext,
    ): Counter =
        CounterComponent(
            componentContext = componentContext,
            title = "Counter ${config.index}",
            isBackEnabled = config.isBackEnabled,
            onNext = { secondRouter.push(Config(index = config.index + 1, isBackEnabled = true)) },
            onPrev = { secondRouter.pop() },
        )

    @Parcelize
    private data class Config(
        val index: Int,
        val isBackEnabled: Boolean,
    ) : Parcelable
}
