package com.arkivanov.sample.shared.multipane

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.componentContent
import com.arkivanov.sample.shared.multipane.MultiPane.DetailsChild
import com.arkivanov.sample.shared.multipane.MultiPane.ListChild
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsContent
import com.arkivanov.sample.shared.multipane.list.ArticleListContent
import com.arkivanov.sample.shared.useAsState
import csstype.Display
import csstype.Flex
import csstype.number
import csstype.pct
import csstype.px
import kotlinx.browser.window
import mui.material.Box
import mui.system.sx
import org.w3c.dom.events.Event
import react.FC
import react.Props
import react.useEffectOnce

private const val MULTI_PANE_WIDTH_THRESHOLD = 960

val MultiPaneContent: FC<RProps<MultiPane>> = FC { props ->
    val model by props.component.models.useAsState()
    val listRouterState by props.component.listRouterState.useAsState()
    val detailsRouterState by props.component.detailsRouterState.useAsState()

    fun onWindowResized() {
        props.component.setMultiPane(window.innerWidth >= MULTI_PANE_WIDTH_THRESHOLD)
    }

    useEffectOnce {
        onWindowResized()

        val resizeCallback: (Event) -> Unit = { onWindowResized() }
        window.addEventListener(type = "resize", callback = resizeCallback)
        cleanup { window.removeEventListener(type = "resize", callback = resizeCallback) }
    }

    if (model.isMultiPane) {
        DoublePane {
            listChild = listRouterState.activeChild.instance
            detailsChild = detailsRouterState.activeChild.instance
        }
    } else {
        SinglePane {
            listChild = listRouterState.activeChild.instance
            detailsChild = detailsRouterState.activeChild.instance
        }
    }
}

private external interface SinglePaneProps : Props {
    var listChild: ListChild
    var detailsChild: DetailsChild
}

private val SinglePane: FC<SinglePaneProps> = FC { props ->
    Box {
        sx {
            width = 100.pct
            height = 100.pct
        }

        ListPane {
            child = props.listChild
        }

        DetailsPane {
            child = props.detailsChild
        }
    }
}

private external interface MultiPaneProps : Props {
    var listChild: ListChild
    var detailsChild: DetailsChild
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

            ListPane {
                child = props.listChild
            }
        }

        Box {
            sx {
                height = 100.pct
                flex = Flex(grow = number(6.0), shrink = number(0.0), basis = 0.px)
            }

            DetailsPane {
                child = props.detailsChild
            }
        }
    }
}

private external interface ListPaneProps : Props {
    var child: ListChild
}

private val ListPane: FC<ListPaneProps> = FC { props ->
    when (val child = props.child) {
        is ListChild.List -> componentContent(component = child.component, content = ArticleListContent)
        is ListChild.None -> Unit
    }.let {}
}

private external interface DetailsPaneProps : Props {
    var child: DetailsChild
}

private val DetailsPane: FC<DetailsPaneProps> = FC { props ->
    when (val child = props.child) {
        is DetailsChild.Details -> componentContent(component = child.component, content = ArticleDetailsContent)
        is DetailsChild.None -> Unit
    }.let {}
}
