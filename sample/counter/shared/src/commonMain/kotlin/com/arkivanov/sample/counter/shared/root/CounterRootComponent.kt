package com.arkivanov.sample.counter.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.childContext
import com.arkivanov.decompose.router.Router
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.router.pop
import com.arkivanov.decompose.router.push
import com.arkivanov.decompose.router.router
import com.arkivanov.decompose.router.webhistory.WebHistoryController
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.counter.shared.counter.Counter
import com.arkivanov.sample.counter.shared.counter.CounterComponent
import com.arkivanov.sample.counter.shared.inner.CounterInnerComponent
import com.arkivanov.sample.counter.shared.root.CounterRoot.Child

@OptIn(ExperimentalDecomposeApi::class)
class CounterRootComponent constructor(
    componentContext: ComponentContext,
    deepLink: DeepLink = DeepLink.None,
    webHistoryController: WebHistoryController? = null,
) : CounterRoot, ComponentContext by componentContext {

    override val counter: Counter = CounterComponent(childContext(key = "counter"), index = 0)

    private val router: Router<ChildConfiguration, Child> =
        router(
            initialStack = { getInitialStack(deepLink) },
            handleBackButton = true,
            childFactory = ::resolveChild
        )

    override val routerState: Value<RouterState<*, Child>> = router.state

    init {
        webHistoryController?.attach(
            router = router,
            getPath = { "/${it.index}" },
            getConfiguration = { ChildConfiguration(index = it.removePrefix("/").toIntOrNull() ?: 0) }
        )
    }

    private fun resolveChild(configuration: ChildConfiguration, componentContext: ComponentContext): Child =
        Child(
            inner = CounterInnerComponent(componentContext, index = configuration.index),
            isBackEnabled = configuration.index > 0,
        )

    override fun onNextChild() {
        router.push(ChildConfiguration(index = router.state.value.backStack.size + 1))
    }

    override fun onPrevChild() {
        router.pop()
    }

    private companion object {
        private fun getInitialStack(deepLink: DeepLink): List<ChildConfiguration> =
            List(deepLink.getInitialIndex() + 1) { ChildConfiguration(index = it) }

        private fun DeepLink.getInitialIndex(): Int =
            when (this) {
                is DeepLink.None -> 0
                is DeepLink.Web -> path.removePrefix("/").toIntOrNull() ?: 0
            }
    }

    @Parcelize
    private data class ChildConfiguration(val index: Int) : Parcelable

    sealed interface DeepLink {
        object None : DeepLink
        class Web(val path: String) : DeepLink
    }
}
