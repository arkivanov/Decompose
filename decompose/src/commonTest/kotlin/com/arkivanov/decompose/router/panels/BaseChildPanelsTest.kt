package com.arkivanov.decompose.router.panels

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.Component
import com.arkivanov.decompose.router.children.BackStrategy
import com.arkivanov.decompose.statekeeper.TestStateKeeperDispatcher
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackDispatcher
import com.arkivanov.essenty.lifecycle.Lifecycle.State.CREATED
import com.arkivanov.essenty.lifecycle.Lifecycle.State.RESUMED
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.resume
import kotlinx.serialization.builtins.serializer
import kotlin.test.BeforeTest
import kotlin.test.assertEquals

abstract class BaseChildPanelsTest {

    protected val nav: PanelsNavigation<Int, Int, Int> = PanelsNavigation()
    protected val lifecycle: LifecycleRegistry = LifecycleRegistry()
    protected val stateKeeper: TestStateKeeperDispatcher = TestStateKeeperDispatcher()
    protected val backDispatcher: BackDispatcher = BackDispatcher()

    @BeforeTest
    fun before() {
        lifecycle.resume()
    }

    protected fun ChildPanels<Int, Component<Int>, Int, Component<Int>, Int, Component<Int>>.assertPanels(
        main: Int,
        details: Int?,
        extra: Int?,
        mode: ChildPanelsMode,
    ) {
        val mainComponent = this.main.instance
        val detailsComponent = this.details?.instance
        val extraComponent = this.extra?.instance

        assertChildConfiguration(this.main, main)
        assertChildConfiguration(this.details, details)
        assertChildConfiguration(this.extra, extra)
        assertEquals(mode, this.mode)

        when (mode) {
            ChildPanelsMode.SINGLE -> {
                assertEquals(if ((details == null) && (extra == null)) RESUMED else CREATED, mainComponent.lifecycle.state)

                assertEquals(
                    when {
                        details == null -> null
                        extra == null -> RESUMED
                        else -> CREATED
                    },
                    detailsComponent?.lifecycle?.state,
                )

                assertEquals(if (extra != null) RESUMED else null, extraComponent?.lifecycle?.state)
            }

            ChildPanelsMode.DUAL -> {
                assertEquals(RESUMED, mainComponent.lifecycle.state)

                assertEquals(
                    when {
                        details == null -> null
                        extra == null -> RESUMED
                        else -> CREATED
                    },
                    detailsComponent?.lifecycle?.state,
                )

                assertEquals(if (extra != null) RESUMED else null, extraComponent?.lifecycle?.state)
            }

            ChildPanelsMode.TRIPLE -> {
                assertEquals(RESUMED, mainComponent.lifecycle.state)
                assertEquals(if (details != null) RESUMED else null, detailsComponent?.lifecycle?.state)
                assertEquals(if (extra != null) RESUMED else null, extraComponent?.lifecycle?.state)
            }
        }
    }

    private fun assertChildConfiguration(child: Child<Int, Component<Int>>?, config: Int?) {
        assertEquals(config, child?.configuration)
        assertEquals(config, child?.instance?.config)
    }

    protected fun ComponentContext.childPanels(
        initialPanels: Panels<Int, Int, Int> = Panels(main = 1),
        persistent: Boolean = true,
        handleBackButton: Boolean = false,
    ): Value<ChildPanels<Int, Component<Int>, Int, Component<Int>, Int, Component<Int>>> =
        childPanels(
            source = nav,
            initialPanels = { initialPanels },
            serializers = if (persistent) Triple(Int.serializer(), Int.serializer(), Int.serializer()) else null,
            backStrategy = if (handleBackButton) PanelsBackStrategy.popInSingleMode() else BackStrategy.disabled(),
            mainFactory = ::Component,
            detailsFactory = ::Component,
            extraFactory = ::Component,
        )
}
