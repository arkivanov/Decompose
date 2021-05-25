package com.arkivanov.sample.masterdetail.shared.details

import com.arkivanov.sample.masterdetail.shared.RenderableComponent
import com.arkivanov.sample.masterdetail.shared.details.DetailsR.State
import com.ccfraser.muirwik.components.MColor
import com.ccfraser.muirwik.components.button.mIconButton
import com.ccfraser.muirwik.components.mAppBar
import com.ccfraser.muirwik.components.mToolbar
import com.ccfraser.muirwik.components.mToolbarTitle
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.styles.Theme
import com.ccfraser.muirwik.components.themeContext
import kotlinx.css.zIndex
import react.RBuilder
import react.RState
import styled.css

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
        themeContext.Consumer { theme ->
            if (state.model.isToolbarVisible) {
                detailsToolbar(theme)
            }
            mTypography { +state.model.article.text }
        }
    }

    private fun RBuilder.detailsToolbar(theme: Theme) {
        mAppBar {
            css {
                zIndex = theme.zIndex.drawer + 1
            }
            mIconButton(
                iconName = "arrow_back",
                color = MColor.inherit,
                onClick = { component::onCloseClicked }
            )
            mToolbar {
                mToolbarTitle(state.model.article.title)
            }
        }
    }

    class State(
        var model: ArticleDetails.Model,
    ) : RState
}
