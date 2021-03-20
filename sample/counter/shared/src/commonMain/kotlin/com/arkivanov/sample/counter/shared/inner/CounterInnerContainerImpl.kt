package com.arkivanov.sample.counter.shared.inner

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
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer.Child
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer.Events
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer.Model

internal class CounterInnerContainerImpl(
    componentContext: ComponentContext,
    index: Int
) : CounterInnerContainer, Events, ComponentContext by componentContext {

    private val counter = Counter(childContext(key = "counter"), index = index)

    private val leftRouter: Router<ChildConfiguration, Child> =
        router(
            initialConfiguration = ChildConfiguration(index = 0, isBackEnabled = false),
            key = "LeftRouter",
            childFactory = ::resolveChild
        )

    private val rightRouter: Router<ChildConfiguration, Child> =
        router(
            initialConfiguration = ChildConfiguration(index = 0, isBackEnabled = false),
            key = "RightRouter",
            childFactory = ::resolveChild
        )

    override val model: Model =
        object : Model, Events by this {
            override val counter: Counter.Model = this@CounterInnerContainerImpl.counter.model
            override val leftChild: Value<RouterState<*, Child>> = leftRouter.state
            override val rightChild: Value<RouterState<*, Child>> = rightRouter.state
        }

    private fun resolveChild(configuration: ChildConfiguration, componentContext: ComponentContext): Child =
        Child(
            counter = Counter(componentContext, index = configuration.index).model,
            isBackEnabled = configuration.isBackEnabled
        )

    override fun onNextLeftChild() {
        leftRouter.pushNextChild()
    }

    override fun onPrevLeftChild() {
        leftRouter.pop()
    }

    override fun onNextRightChild() {
        rightRouter.pushNextChild()
    }

    override fun onPrevRightChild() {
        rightRouter.pop()
    }

    private fun Router<ChildConfiguration, *>.pushNextChild() {
        val index = state.value.backStack.size + 1
        push(ChildConfiguration(index = index, isBackEnabled = index >= 0))
    }

    @Parcelize
    private data class ChildConfiguration(val index: Int, val isBackEnabled: Boolean) : Parcelable
}
