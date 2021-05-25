package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.decompose.RouterState
import com.arkivanov.sample.masterdetail.shared.RenderableComponent
import com.arkivanov.sample.masterdetail.shared.details.DetailsR
import com.arkivanov.sample.masterdetail.shared.list.ArticleListR
import com.arkivanov.sample.masterdetail.shared.renderableChild
import com.arkivanov.sample.masterdetail.shared.root.RootR.State
import com.ccfraser.muirwik.components.list.mList
import kotlinx.browser.window
import kotlinx.css.Display
import kotlinx.css.FlexDirection
import kotlinx.css.Position
import kotlinx.css.display
import kotlinx.css.flexDirection
import kotlinx.css.height
import kotlinx.css.left
import kotlinx.css.pct
import kotlinx.css.position
import kotlinx.css.px
import kotlinx.css.top
import kotlinx.css.width
import org.w3c.dom.events.Event
import react.RBuilder
import react.RState
import styled.css
import styled.styledDiv

private const val MULTI_PANE_WIDTH_THRESHOLD = 800

class RootR(props: Props<Root>) : RenderableComponent<Root, State>(
    props = props,
    initialState = State(
        model = props.component.models.value,
        detailsRouterState = props.component.detailsRouterState.value,
        listRouterState = props.component.listRouterState.value
    )
) {

    private val resizeEventType = "resize"

    init {
        onWindowResize()
        component.detailsRouterState.bindToState { detailsRouterState = it }
        component.listRouterState.bindToState { listRouterState = it }
        component.models.bindToState { model = it }
    }

    override fun componentDidMount() {
        super.componentDidMount()
        window.addEventListener(
            type = resizeEventType,
            callback = ::onWindowResize
        )
    }

    private fun onWindowResize(event: Event? = null) {
        val isMultiPaneRequired = window.innerWidth >= MULTI_PANE_WIDTH_THRESHOLD
        component.setMultiPane(isMultiPaneRequired)
    }

    override fun RBuilder.render() {
        val isMultiPane = state.model.isMultiPane
        styledDiv {
            css {
                display = Display.flex
                flexDirection = FlexDirection.row
            }
            listPane(isMultiPane)
            detailsPane(isMultiPane)
        }
    }

    private fun RBuilder.listPane(isMultiPane: Boolean) {
        styledDiv {
            css {
                position = Position.absolute
                top = 0.px
                left = 0.px
                width = 100.pct
            }
            styledDiv {
                css {
                    display = Display.flex
                    flexDirection = FlexDirection.row
                }
                mList {
                    css { width = if (isMultiPane) 40.pct else 100.pct }
                    list()
                }
                if (isMultiPane) {
                    styledDiv {
                        css { width = 60.pct }
                    }
                }
            }
        }
    }

    private fun RBuilder.detailsPane(isMultiPane: Boolean) {
        styledDiv {
            css {
                position = Position.absolute
                top = 0.px
                left = 0.px
                width = 100.pct
            }
            styledDiv {
                css {
                    display = Display.flex
                    flexDirection = FlexDirection.row
                    height = 100.pct
                    width = 100.pct
                }
                if (isMultiPane) {
                    styledDiv {
                        css { width = 40.pct }
                    }
                }
                styledDiv {
                    css { width = if (isMultiPane) 60.pct else 100.pct }
                    details()
                }
            }
        }
    }

    private fun RBuilder.list() {
        when (val instance = state.listRouterState.activeChild.instance) {
            is Root.ListChild.List -> renderableChild(ArticleListR::class, instance.component)
            is Root.ListChild.None -> styledDiv { }
        }
    }

    private fun RBuilder.details() {
        when (val instance = state.detailsRouterState.activeChild.instance) {
            is Root.DetailsChild.None -> styledDiv { }
            is Root.DetailsChild.Details -> renderableChild(DetailsR::class, instance.component)
        }
    }

    override fun componentWillUnmount() {
        super.componentWillUnmount()
        window.removeEventListener(type = resizeEventType, callback = {})
    }

    class State(
        var model: Root.Model,
        var detailsRouterState: RouterState<*, Root.DetailsChild>,
        var listRouterState: RouterState<*, Root.ListChild>,
    ) : RState
}
