package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.push
import com.arkivanov.decompose.value.ReqValue
import com.arkivanov.decompose.value.asRequired
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.counters.counter.Counter
import com.arkivanov.sample.shared.counters.counter.CounterComponent

internal class CountersComponent(
    componentContext: ComponentContext,
) : Counters, ComponentContext by componentContext {

    private val firstNavigation = StackNavigation<Config>()

    private val firstStack =
        childStack(
            source = firstNavigation,
            initialConfiguration = Config(index = 0, isBackEnabled = false),
            key = "FirstStack",
            childFactory = ::firstChild,
        )

    override val firstChildStack: ReqValue<ChildStack<*, Counter>> = firstStack.asRequired()

    private val secondNavigation = StackNavigation<Config>()

    private val secondStack =
        childStack(
            source = secondNavigation,
            initialConfiguration = Config(index = 0, isBackEnabled = false),
            key = "SecondStack",
            childFactory = ::secondChild,
        )

    override val secondChildStack: ReqValue<ChildStack<*, Counter>> = secondStack.asRequired()

    private fun firstChild(
        config: Config,
        componentContext: ComponentContext,
    ): Counter =
        CounterComponent(
            componentContext = componentContext,
            title = "Counter ${config.index}",
            isBackEnabled = config.isBackEnabled,
            onNext = { firstNavigation.push(Config(index = config.index + 1, isBackEnabled = true)) },
            onPrev = firstNavigation::pop,
        )

    private fun secondChild(
        config: Config,
        componentContext: ComponentContext,
    ): Counter =
        CounterComponent(
            componentContext = componentContext,
            title = "Counter ${config.index}",
            isBackEnabled = config.isBackEnabled,
            onNext = { secondNavigation.push(Config(index = config.index + 1, isBackEnabled = true)) },
            onPrev = secondNavigation::pop,
        )

    @Parcelize
    private data class Config(
        val index: Int,
        val isBackEnabled: Boolean,
    ) : Parcelable
}
