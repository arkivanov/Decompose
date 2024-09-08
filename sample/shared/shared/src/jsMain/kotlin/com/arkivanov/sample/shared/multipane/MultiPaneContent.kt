package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.panels.ChildPanelsMode
import com.arkivanov.decompose.router.panels.isSingle
import com.arkivanov.sample.shared.AppBar
import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.Scaffold
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.multipane.author.ArticleAuthorComponent
import com.arkivanov.sample.shared.multipane.author.ArticleAuthorContent
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
import web.cssom.BoxSizing
import web.cssom.Display
import web.cssom.Flex
import web.cssom.number
import web.cssom.pct
import web.cssom.px

private const val DUAL_PANE_WIDTH_THRESHOLD = 640
private const val TRIPLE_PANE_WIDTH_THRESHOLD = 1280

@OptIn(ExperimentalDecomposeApi::class)
val MultiPaneContent: FC<RProps<MultiPaneComponent>> = FC { props ->
    val panels by props.component.panels.useAsState()
    val listComponent = panels.main.instance
    val detailsComponent = panels.details?.instance
    val authorComponent = panels.extra?.instance

    fun onWindowResized() {
        val mode =
            when {
                window.innerWidth >= TRIPLE_PANE_WIDTH_THRESHOLD -> ChildPanelsMode.TRIPLE
                window.innerWidth >= DUAL_PANE_WIDTH_THRESHOLD -> ChildPanelsMode.DUAL
                else -> ChildPanelsMode.SINGLE
            }

        props.component.setMode(mode)
    }

    useEffectOnce {
        onWindowResized()

        val resizeCallback: (Event) -> Unit = { onWindowResized() }
        window.addEventListener(type = "resize", callback = resizeCallback)
        cleanup { window.removeEventListener(type = "resize", callback = resizeCallback) }
    }

    Scaffold {
        sx {
            flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
            boxSizing = BoxSizing.borderBox
        }

        if (!panels.mode.isSingle) {
            appBar = AppBar(title = "Multi-Pane Layout")
        }

        when (panels.mode) {
            ChildPanelsMode.SINGLE ->
                SinglePane {
                    this.listComponent = listComponent
                    this.detailsComponent = detailsComponent
                    this.authorComponent = authorComponent
                }

            ChildPanelsMode.DUAL ->
                DoublePane {
                    this.listComponent = listComponent
                    this.detailsComponent = detailsComponent
                    this.authorComponent = authorComponent
                }

            ChildPanelsMode.TRIPLE ->
                TriplePane {
                    this.listComponent = listComponent
                    this.detailsComponent = detailsComponent
                    this.authorComponent = authorComponent
                }
        }
    }
}

private external interface SinglePaneProps : Props {
    var listComponent: ArticleListComponent
    var detailsComponent: ArticleDetailsComponent?
    var authorComponent: ArticleAuthorComponent?
}

private val SinglePane: FC<SinglePaneProps> = FC { props ->
    val listComponent = props.listComponent
    val detailsComponent = props.detailsComponent
    val authorComponent = props.authorComponent

    Box {
        sx {
            flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
            height = 100.pct
            boxSizing = BoxSizing.borderBox
        }

        when {
            authorComponent != null -> componentContent(component = authorComponent, content = ArticleAuthorContent)
            detailsComponent != null -> componentContent(component = detailsComponent, content = ArticleDetailsContent)
            else -> componentContent(component = listComponent, content = ArticleListContent)
        }
    }
}

private external interface MultiPaneProps : Props {
    var listComponent: ArticleListComponent
    var detailsComponent: ArticleDetailsComponent?
    var authorComponent: ArticleAuthorComponent?
}

private val DoublePane: FC<MultiPaneProps> = FC { props ->
    val listComponent = props.listComponent
    val detailsComponent = props.detailsComponent
    val authorComponent = props.authorComponent

    Box {
        sx {
            flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
            display = Display.flex
            width = 100.pct
        }

        Box {
            sx {
                flex = Flex(grow = number(3.0), shrink = number(0.0), basis = 0.px)
                height = 100.pct
                boxSizing = BoxSizing.borderBox
            }

            componentContent(component = listComponent, content = ArticleListContent)
        }

        Box {
            sx {
                flex = Flex(grow = number(7.0), shrink = number(0.0), basis = 0.px)
                height = 100.pct
                boxSizing = BoxSizing.borderBox
            }

            when {
                authorComponent != null -> componentContent(component = authorComponent, content = ArticleAuthorContent)
                detailsComponent != null -> componentContent(component = detailsComponent, content = ArticleDetailsContent)
            }
        }
    }
}

private val TriplePane: FC<MultiPaneProps> = FC { props ->
    Box {
        sx {
            flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
            display = Display.flex
            boxSizing = BoxSizing.borderBox
        }

        Box {
            sx {
                flex = Flex(grow = number(3.0), shrink = number(0.0), basis = 0.px)
                height = 100.pct
                boxSizing = BoxSizing.borderBox
            }

            componentContent(component = props.listComponent, content = ArticleListContent)
        }

        Box {
            sx {
                flex = Flex(grow = number(4.0), shrink = number(0.0), basis = 0.px)
                height = 100.pct
                boxSizing = BoxSizing.borderBox
            }

            props.detailsComponent?.also {
                componentContent(component = it, content = ArticleDetailsContent)
            }
        }

        Box {
            sx {
                flex = Flex(grow = number(3.0), shrink = number(0.0), basis = 0.px)
                height = 100.pct
                boxSizing = BoxSizing.borderBox
            }

            props.authorComponent?.also {
                componentContent(component = it, content = ArticleAuthorContent)
            }
        }
    }
}
