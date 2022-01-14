package com.arkivanov.sample.counter.app

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.router.webhistory.DefaultWebHistoryController
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.sample.counter.shared.renderableChild
import com.arkivanov.sample.counter.shared.root.CounterRootComponent
import com.arkivanov.sample.counter.shared.root.RootR
import com.ccfraser.muirwik.components.mContainer
import com.ccfraser.muirwik.components.mCssBaseline
import com.ccfraser.muirwik.components.styles.Breakpoint
import kotlinx.browser.window
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState

class App : RComponent<RProps, RState>() {

    private val lifecycle = LifecycleRegistry()
    private val ctx = DefaultComponentContext(lifecycle = lifecycle)

    private val root =
        CounterRootComponent(
            componentContext = ctx,
            deepLink = CounterRootComponent.DeepLink.Web(path = window.location.pathname),
            webHistoryController = DefaultWebHistoryController(),
        )

    override fun componentDidMount() {
        lifecycle.resume()
    }

    override fun componentWillUnmount() {
        lifecycle.destroy()
    }

    override fun RBuilder.render() {
        mCssBaseline()

        mContainer(maxWidth = Breakpoint.xs) {
            renderableChild(RootR::class, root)
        }
    }
}
