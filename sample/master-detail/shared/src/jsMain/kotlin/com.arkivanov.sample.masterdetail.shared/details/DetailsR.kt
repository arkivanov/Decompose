package com.arkivanov.sample.masterdetail.shared.details

import com.arkivanov.sample.masterdetail.shared.MasterDetailStyles
import com.arkivanov.sample.masterdetail.shared.Props
import com.arkivanov.sample.masterdetail.shared.RenderableComponent
import com.arkivanov.sample.masterdetail.shared.details.DetailsR.State
import com.ccfraser.muirwik.components.MColor
import com.ccfraser.muirwik.components.button.mIconButton
import com.ccfraser.muirwik.components.mAppBar
import com.ccfraser.muirwik.components.mToolbar
import com.ccfraser.muirwik.components.mToolbarTitle
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.themeContext
import com.ccfraser.muirwik.components.toolbarJsCssToPartialCss
import react.RBuilder
import react.RState
import styled.css
import styled.styledDiv

class DetailsR(props: Props<ArticleDetails>) : RenderableComponent<ArticleDetails, State>(
    props = props,
    initialState = State(
        model = props.component.models.value,
    )
) {

    init {
        component.models.bindToState { model = it }
    }

    override fun RBuilder.render() {
        if (state.model.isToolbarVisible) {
            detailsAppBar()
        }
        mTypography { +state.model.article.text }

    }

    private fun RBuilder.detailsAppBar() {
        themeContext.Consumer { theme ->
            styledDiv {
                css(MasterDetailStyles.detailsAppBarCss)
                mAppBar {
                    mToolbar {
                        mIconButton(
                            iconName = "arrow_back",
                            color = MColor.inherit,
                            onClick = { onCloseClick() }
                        )
                        mToolbarTitle(state.model.article.title)
                    }
                }
            }
            styledDiv {
                css { toolbarJsCssToPartialCss(theme.mixins.toolbar) }
            }
        }
    }

    private fun onCloseClick() = component.onCloseClicked()

    class State(
        var model: ArticleDetails.Model,
    ) : RState
}
