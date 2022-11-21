package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.*
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.counters.counter.CounterComponent
import com.arkivanov.sample.shared.counters.counter.DefaultCounterComponent

internal class DefaultCountersComponent(
    componentContext: ComponentContext,
) : CountersComponent, ComponentContext by componentContext {

    private val navigation = StackNavigation<Config>()

    private val _childStack =
        childStack(
            source = navigation,
            initialConfiguration = Config(index = 0, isBackEnabled = false),
            childFactory = ::child,
        )

    override val childStack: Value<ChildStack<*, CounterComponent>> get() = _childStack

    override fun onPrev() = navigation.pop()

    private fun child(
        config: Config,
        componentContext: ComponentContext,
    ): CounterComponent =
        DefaultCounterComponent(
            componentContext = componentContext,
            title = "Counter ${config.index}",
            isBackEnabled = config.isBackEnabled,
            onNext = { navigation.push(Config(index = config.index + 1, isBackEnabled = true)) },
            onPrev = navigation::pop,
        )

    @Parcelize
    private data class Config(
        val index: Int,
        val isBackEnabled: Boolean,
    ) : Parcelable
}
