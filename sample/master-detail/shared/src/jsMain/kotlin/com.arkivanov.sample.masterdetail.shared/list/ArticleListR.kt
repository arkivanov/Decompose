package com.arkivanov.sample.masterdetail.shared.list

import com.arkivanov.sample.masterdetail.shared.MasterDetailStyles
import com.arkivanov.sample.masterdetail.shared.Props
import com.arkivanov.sample.masterdetail.shared.RenderableComponent
import com.ccfraser.muirwik.components.list.mList
import com.ccfraser.muirwik.components.list.mListItem
import com.ccfraser.muirwik.components.mTypography
import react.RBuilder
import react.RState
import styled.css

external interface ArticleListState : RState {
    var models: ArticleList.Model
}

class ArticleListR(props: Props<ArticleList>) : RenderableComponent<ArticleList, ArticleListState>(
    props = props,
    initialState = (js("{}") as ArticleListState).apply {
        models = props.component.models.value
    }
) {

    init {
        component.models.bindToState { models = it }
    }

    override fun RBuilder.render() {
        mList {
            state.models.articles.forEach { article ->
                val isSelected = article.id == state.models.selectedArticleId
                mListItem(
                    selected = isSelected,
                    onClick = { handleArticleClick(article.id) },
                    button = true
                ) {
                    css(MasterDetailStyles.listItemCss)
                    mTypography(article.title)
                }
            }
        }
    }

    private fun handleArticleClick(id: Long) {
        component.onArticleClicked(id = id)
    }
}
