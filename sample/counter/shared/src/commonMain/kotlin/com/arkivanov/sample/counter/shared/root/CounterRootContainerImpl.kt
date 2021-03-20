package com.arkivanov.sample.counter.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.Router
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.childContext
import com.arkivanov.decompose.pop
import com.arkivanov.decompose.push
import com.arkivanov.decompose.router
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer
import com.arkivanov.sample.counter.shared.root.CounterRootContainer.Child
import com.arkivanov.sample.counter.shared.root.CounterRootContainer.Events
import com.arkivanov.sample.counter.shared.root.CounterRootContainer.Model

internal class CounterRootContainerImpl(
    componentContext: ComponentContext
) : CounterRootContainer, Events, ComponentContext by componentContext {

    private val counter = Counter(childContext(key = "counter"), index = 0)

    private val router: Router<ChildConfiguration, Child> =
        router(
            initialConfiguration = ChildConfiguration(index = 0, isBackEnabled = false),
            handleBackButton = true,
            childFactory = ::resolveChild
        )

    override val model: Model =
        object : Model, Events by this {
            override val counter: Counter.Model = this@CounterRootContainerImpl.counter.model
            override val child: Value<RouterState<*, Child>> = router.state
        }

    private fun resolveChild(configuration: ChildConfiguration, componentContext: ComponentContext): Child =
        Child(
            inner = CounterInnerContainer(componentContext, index = configuration.index).model,
            isBackEnabled = configuration.isBackEnabled
        )

    override fun onNextChild() {
        val index = router.state.value.backStack.size + 1
        router.push(ChildConfiguration(index = index, isBackEnabled = index >= 1))
    }

    override fun onPrevChild() {
        router.pop()
    }

    @Parcelize
    private data class ChildConfiguration(val index: Int, val isBackEnabled: Boolean) : Parcelable
}
