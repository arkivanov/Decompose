package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.decompose.RouterState
import com.arkivanov.sample.masterdetail.shared.MasterDetailStyles
import com.arkivanov.sample.masterdetail.shared.Props
import com.arkivanov.sample.masterdetail.shared.RenderableComponent
import com.arkivanov.sample.masterdetail.shared.details.DetailsR
import com.arkivanov.sample.masterdetail.shared.list.ArticleListR
import com.arkivanov.sample.masterdetail.shared.renderableChild
import com.ccfraser.muirwik.components.mHidden
import kotlinx.browser.window
import org.w3c.dom.events.Event
import react.RBuilder
import react.RState
import styled.css
import styled.styledDiv

private const val MULTI_PANE_WIDTH_THRESHOLD = 960

external interface RootState : RState {
    var model: Root.Model
    var detailsRouterState: RouterState<*, Root.DetailsChild>
    var listRouterState: RouterState<*, Root.ListChild>
}

class RootR(props: Props<Root>) : RenderableComponent<Root, RootState>(
    props = props,
    initialState = (js("{}") as RootState).apply {
        model = props.component.models.value
        detailsRouterState = props.component.detailsRouterState.value
        listRouterState = props.component.listRouterState.value
    }
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
        mHidden(mdUp = true) { //mdup = hide, if more than 960px
            list()
            details()
        }
        mHidden(smDown = true) {//smdown = hide, if less than 960px
            styledDiv {
                css(MasterDetailStyles.singlePaneContainerCss)
                listPane()
                detailsPane()
            }
        }
    }

    private fun RBuilder.listPane() {
        styledDiv {
            css(MasterDetailStyles.listPaneContainerCss)
            list()
        }
    }

    private fun RBuilder.detailsPane() {
        styledDiv {
            css(MasterDetailStyles.detailsPaneContainerCss)
            details()
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
}
