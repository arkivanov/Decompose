package com.arkivanov.sample.counter.shared.inner

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.Router
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.router
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer.Events
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer.Model

internal class CounterInnerContainerImpl(
    componentContext: ComponentContext,
    index: Int
) : CounterInnerContainer, Events, ComponentContext by componentContext {

    private val counter = Counter(componentContext, index = index)

    private val leftRouter: Router<ChildConfiguration, Counter> =
        router(
            initialConfiguration = ChildConfiguration(index = 0),
            key = "LeftRouter",
            handleBackButton = true,
            componentFactory = ::resolveChild
        )

    private val rightRouter: Router<ChildConfiguration, Counter> =
        router(
            initialConfiguration = ChildConfiguration(index = 0),
            key = "RightRouter",
            componentFactory = ::resolveChild
        )

    override val model: Model =
        object : Model, Events by this {
            override val counter: Counter.Model = this@CounterInnerContainerImpl.counter.model
            override val leftChild: Value<Model.Child> = leftRouter.state.map { it.toModelChild() }
            override val rightChild: Value<Model.Child> = rightRouter.state.map { it.toModelChild() }
        }

    private fun resolveChild(configuration: ChildConfiguration, componentContext: ComponentContext): Counter =
        Counter(componentContext, index = configuration.index)

    private fun RouterState<ChildConfiguration, Counter>.toModelChild(): Model.Child =
        Model.Child(
            counter = activeChild.component.model,
            isBackEnabled = backStack.isNotEmpty()
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
        push(ChildConfiguration(index = state.value.backStack.size + 1))
    }

    @Parcelize
    private data class ChildConfiguration(val index: Int) : Parcelable
}
