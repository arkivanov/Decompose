package com.arkivanov.sample.masterdetail.shared.list

import com.arkivanov.sample.masterdetail.shared.RProps
import com.arkivanov.sample.masterdetail.shared.useAsState
import mui.material.ListItemButton
import mui.material.Typography
import react.FC

val ArticleListR: FC<RProps<ArticleList>> = FC { props ->
    val model by props.component.models.useAsState()

    mui.material.List {
        sx = props.sx

        model.articles.forEach { article ->
            ListItemButton {
                selected = article.id == model.selectedArticleId
                onClick = { props.component.onArticleClicked(id = article.id) }

                Typography {
                    +article.title
                }
            }
        }
    }
}
