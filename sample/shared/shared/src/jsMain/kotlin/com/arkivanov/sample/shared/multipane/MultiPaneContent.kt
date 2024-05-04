package com.arkivanov.sample.shared.multipane

import com.arkivanov.sample.shared.AppBar
import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.Scaffold
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListContent
import com.arkivanov.sample.shared.useAsState
import kotlinx.browser.window
import mui.material.Box
import mui.system.sx
import org.w3c.dom.events.Event
import react.FC
import react.Props
import react.useEffectOnce
import web.cssom.Display
import web.cssom.Flex
import web.cssom.number
import web.cssom.pct
import web.cssom.px

private const val MULTI_PANE_WIDTH_THRESHOLD = 960

val MultiPaneContent: FC<RProps<MultiPaneComponent>> = FC { props ->
    val children by props.component.children.useAsState()
    val listComponent = children.listChild.instance
    val detailsComponent = children.detailsChild?.instance

    fun onWindowResized() {
        props.component.setMultiPane(window.innerWidth >= MULTI_PANE_WIDTH_THRESHOLD)
    }

    useEffectOnce {
        onWindowResized()

        val resizeCallback: (Event) -> Unit = { onWindowResized() }
        window.addEventListener(type = "resize", callback = resizeCallback)
        cleanup { window.removeEventListener(type = "resize", callback = resizeCallback) }
    }

    Scaffold {
        if (children.isMultiPane) {
            appBar = AppBar(title = "Multi-Pane Layout")
        }

        if (children.isMultiPane) {
            DoublePane {
                this.listComponent = listComponent
                this.detailsComponent = detailsComponent
            }
        } else {
            SinglePane {
                this.listComponent = listComponent
                this.detailsComponent = detailsComponent
            }
        }
    }
}

private external interface SinglePaneProps : Props {
    var listComponent: ArticleListComponent
    var detailsComponent: ArticleDetailsComponent?
}

private val SinglePane: FC<SinglePaneProps> = FC { props ->
    val detailsComponent = props.detailsComponent

    Box {
        sx {
            width = 100.pct
            height = 100.pct
        }

        if (detailsComponent != null) {
            componentContent(component = detailsComponent, content = ArticleDetailsContent)
        } else {
            componentContent(component = props.listComponent, content = ArticleListContent)
        }
    }
}

private external interface MultiPaneProps : Props {
    var listComponent: ArticleListComponent
    var detailsComponent: ArticleDetailsComponent?
}

private val DoublePane: FC<MultiPaneProps> = FC { props ->
    Box {
        sx {
            display = Display.flex
            width = 100.pct
            height = 100.pct
        }

        Box {
            sx {
                height = 100.pct
                flex = Flex(grow = number(4.0), shrink = number(0.0), basis = 0.px)
            }

            componentContent(component = props.listComponent, content = ArticleListContent)
        }

        Box {
            sx {
                height = 100.pct
                flex = Flex(grow = number(6.0), shrink = number(0.0), basis = 0.px)
            }

            props.detailsComponent?.also {
                componentContent(component = it, content = ArticleDetailsContent)
            }
        }
    }
}
