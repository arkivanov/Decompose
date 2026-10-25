package com.arkivanov.decompose.router.panels

import androidx.lifecycle.Lifecycle.State.CREATED
import androidx.lifecycle.Lifecycle.State.RESUMED
import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.Component
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.builtins.serializer
import kotlin.test.assertEquals

abstract class BaseChildPanelsTest {

    protected val nav: PanelsNavigation<Int, Int, Int> = PanelsNavigation()

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
                assertEquals(if ((details == null) && (extra == null)) RESUMED else CREATED, mainComponent.lifecycle.currentState)

                assertEquals(
                    when {
                        details == null -> null
                        extra == null -> RESUMED
                        else -> CREATED
                    },
                    detailsComponent?.lifecycle?.currentState,
                )

                assertEquals(if (extra != null) RESUMED else null, extraComponent?.lifecycle?.currentState)
            }

            ChildPanelsMode.DUAL -> {
                assertEquals(RESUMED, mainComponent.lifecycle.currentState)

                assertEquals(
                    when {
                        details == null -> null
                        extra == null -> RESUMED
                        else -> CREATED
                    },
                    detailsComponent?.lifecycle?.currentState,
                )

                assertEquals(if (extra != null) RESUMED else null, extraComponent?.lifecycle?.currentState)
            }

            ChildPanelsMode.TRIPLE -> {
                assertEquals(RESUMED, mainComponent.lifecycle.currentState)
                assertEquals(if (details != null) RESUMED else null, detailsComponent?.lifecycle?.currentState)
                assertEquals(if (extra != null) RESUMED else null, extraComponent?.lifecycle?.currentState)
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
            handleBackButton = handleBackButton,
            mainFactory = ::Component,
            detailsFactory = ::Component,
            extraFactory = ::Component,
        )
}
