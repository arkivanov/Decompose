package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.shared.RenderableComponent
import com.arkivanov.sample.masterdetail.shared.RenderableComponent.Props
import com.arkivanov.sample.masterdetail.shared.root.RootR.State
import com.ccfraser.muirwik.components.mTypography
import react.RBuilder
import react.RState

class RootR(props: Props<Root>) : RenderableComponent<Root, State>(
    props = props,
    initialState = State(
        models = props.component.models.value,
        detailsRouterState = props.component.detailsRouterState.value,
        listRouterState = props.component.listRouterState.value
    )
) {

    init {
        component.models.bindToState { models = it }
        component.detailsRouterState.bindToState { detailsRouterState = it }
        component.listRouterState.bindToState { listRouterState = it }
    }

    override fun RBuilder.render() {
        mTypography {
            +"this is rootComponent"
        }
    }

    class State(
        var models: Root.Model,
        var detailsRouterState: RouterState<*, Root.DetailsChild>,
        var listRouterState: RouterState<*, Root.ListChild>,
    ) : RState
}
