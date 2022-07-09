package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackRouter
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.push
import com.arkivanov.decompose.router.stack.stackRouter
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.counters.counter.Counter
import com.arkivanov.sample.shared.counters.counter.CounterComponent

internal class CountersComponent(
    componentContext: ComponentContext,
) : Counters, ComponentContext by componentContext {

    private val firstRouter: StackRouter<Config, Counter> =
        stackRouter(
            initialConfiguration = Config(index = 0, isBackEnabled = false),
            key = "LeftRouter",
            childFactory = ::firstChild,
        )

    override val firstChildStack: Value<ChildStack<*, Counter>> get() = firstRouter.stack

    private val secondRouter: StackRouter<Config, Counter> =
        stackRouter(
            initialConfiguration = Config(index = 0, isBackEnabled = false),
            key = "RightRouter",
            childFactory = ::secondChild,
        )

    override val secondChildStack: Value<ChildStack<*, Counter>> get() = secondRouter.stack

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
