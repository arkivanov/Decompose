package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.sample.masterdetail.shared.RProps
import com.arkivanov.sample.masterdetail.shared.details.ArticleDetailsR
import com.arkivanov.sample.masterdetail.shared.list.ArticleListR
import com.arkivanov.sample.masterdetail.shared.useAsState
import csstype.Display
import csstype.Flex
import csstype.Overflow
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

val RootR: FC<RProps<Root>> = FC { props ->
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
        MultiPane {
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
    var listChild: Root.ListChild
    var detailsChild: Root.DetailsChild
}

private val SinglePane: FC<SinglePaneProps> = FC { props ->
    Box {
        ListPane {
            child = props.listChild
        }

        DetailsPane {
            child = props.detailsChild
        }
    }
}

private external interface MultiPaneProps : Props {
    var listChild: Root.ListChild
    var detailsChild: Root.DetailsChild
}

private val MultiPane: FC<MultiPaneProps> = FC { props ->
    Box {
        sx {
            display = Display.flex
        }

        Box {
            sx {
                height = 100.pct
                flex = Flex(grow = number(4.0), shrink = number(0.0), basis = 0.px)
                overflowX = Overflow.clip
                overflowY = Overflow.scroll
            }

            ListPane {
                child = props.listChild
            }
        }

        Box {
            sx {
                height = 100.pct
                flex = Flex(grow = number(6.0), shrink = number(0.0), basis = 0.px)
                overflowX = Overflow.clip
                overflowY = Overflow.scroll
            }

            DetailsPane {
                child = props.detailsChild
            }
        }
    }
}

private external interface ListPaneProps : Props {
    var child: Root.ListChild
}

private val ListPane: FC<ListPaneProps> = FC { props ->
    when (val child = props.child) {
        is Root.ListChild.List ->
            ArticleListR {
                component = child.component

                sx {
                    width = 100.pct
                    height = 100.pct
                }
            }

        is Root.ListChild.None -> Unit
    }.let {}
}

private external interface DetailsPaneProps : Props {
    var child: Root.DetailsChild
}

private val DetailsPane: FC<DetailsPaneProps> = FC { props ->
    when (val child = props.child) {
        is Root.DetailsChild.Details ->
            ArticleDetailsR {
                component = child.component

                sx {
                    width = 100.pct
                    height = 100.pct
                }
            }

        is Root.DetailsChild.None -> Unit
    }.let {}
}
