package com.arkivanov.masterdetail.app

import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.decompose.lifecycle.LifecycleRegistry
import com.arkivanov.decompose.lifecycle.destroy
import com.arkivanov.decompose.lifecycle.resume
import com.arkivanov.sample.masterdetail.shared.root.RootComponent
import com.ccfraser.muirwik.components.mContainer
import com.ccfraser.muirwik.components.mCssBaseline
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.styles.Breakpoint
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState

class App : RComponent<RProps, RState>() {

  private val lifecycle = LifecycleRegistry()
  private val ctx = DefaultComponentContext(lifecycle = lifecycle)
  private val root = RootComponent(ctx)

  override fun componentDidMount() {
    lifecycle.resume()
  }

  override fun componentWillUnmount() {
    lifecycle.destroy()
  }

  override fun RBuilder.render() {
    mCssBaseline()

    mContainer(maxWidth = Breakpoint.xs) {
      mTypography { +"this is masterdetail app" }
    }
  }
}
