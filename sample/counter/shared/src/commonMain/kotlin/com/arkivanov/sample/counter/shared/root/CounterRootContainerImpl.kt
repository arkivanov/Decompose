package com.arkivanov.sample.counter.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.Router
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.router
import com.arkivanov.decompose.statekeeper.Parcelable
import com.arkivanov.decompose.statekeeper.Parcelize
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.operator.map
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.inner.CounterInnerContainer
import com.arkivanov.sample.counter.shared.root.CounterRootContainer.Events
import com.arkivanov.sample.counter.shared.root.CounterRootContainer.Model

internal class CounterRootContainerImpl(
    componentContext: ComponentContext
) : CounterRootContainer, Events, ComponentContext by componentContext {

    private val counter = Counter(componentContext, index = 0)

    private val router: Router<ChildConfiguration, CounterInnerContainer> =
        router(
            initialConfiguration = ChildConfiguration(index = 0),
            handleBackButton = true,
            componentFactory = ::resolveChild
        )

    override val model: Model =
        object : Model, Events by this {
            override val counter: Counter.Model = this@CounterRootContainerImpl.counter.model
            override val child: Value<Model.Child> = router.state.map { it.toModelChild() }
        }

    private fun resolveChild(configuration: ChildConfiguration, componentContext: ComponentContext): CounterInnerContainer =
        CounterInnerContainer(componentContext, index = configuration.index)

    private fun RouterState<ChildConfiguration, CounterInnerContainer>.toModelChild(): Model.Child =
        Model.Child(
            inner = activeChild.component.model,
            isBackEnabled = backStack.isNotEmpty()
        )

    override fun onNextChild() {
        router.push(ChildConfiguration(index = router.state.value.backStack.size + 1))
    }

    override fun onPrevChild() {
        router.pop()
    }

    @Parcelize
    private data class ChildConfiguration(val index: Int) : Parcelable
}
