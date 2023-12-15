package com.arkivanov.sample.shared.counters

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.popTo
import com.arkivanov.decompose.router.stack.push
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.attachDeepLinks
import com.arkivanov.sample.shared.counters.counter.CounterComponent
import com.arkivanov.sample.shared.counters.counter.DefaultCounterComponent
import com.arkivanov.sample.shared.multipane.utils.disposableScope
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.subject.behavior.BehaviorObservable
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import kotlinx.serialization.Serializable

internal class DefaultCountersComponent(
    componentContext: ComponentContext,
    private val deepLinkPath: BehaviorObservable<String?> = BehaviorSubject(null),
) : CountersComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val navigation = StackNavigation<Config>()

    private val _childStack =
        childStack(
            source = navigation,
            serializer = Config.serializer(),
            initialStack = { getStackForDeepLink(deepLinkPath = deepLinkPath.value) },
            childFactory = ::child,
        )

    override val childStack: Value<ChildStack<*, CounterComponent>> get() = _childStack

    init {
        attachDeepLinks(navigation = navigation, deepLinkPath = deepLinkPath) { path ->
            getStackForDeepLink(deepLinkPath = path.removePrefix("/counters"))
        }
    }

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

    override fun onBackClicked() {
        navigation.pop()
    }

    override fun onBackClicked(toIndex: Int) {
        navigation.popTo(index = toIndex)
    }

    @Serializable
    private data class Config(
        val index: Int,
        val isBackEnabled: Boolean,
    )

    private companion object {
        private fun getStackForDeepLink(deepLinkPath: String?): List<Config> {
            val targetIndex = deepLinkPath?.removePrefix("/")?.toIntOrNull() ?: 0

            return List(targetIndex + 1) { index ->
                Config(index = index, isBackEnabled = index > 0)
            }
        }
    }
}
