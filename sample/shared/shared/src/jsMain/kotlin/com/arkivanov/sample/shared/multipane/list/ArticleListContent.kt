package com.arkivanov.sample.shared.multipane.list

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.useAsState
import csstype.BoxSizing
import csstype.Overflow
import csstype.pct
import mui.material.ListItemButton
import mui.material.Typography
import mui.system.sx
import react.FC

val ArticleListContent: FC<RProps<ArticleListComponent>> = FC { props ->
    val model by props.component.models.useAsState()

    mui.material.List {
        sx {
            boxSizing = BoxSizing.borderBox
            width = 100.pct
            height = 100.pct
            overflowX = Overflow.clip
            overflowY = Overflow.scroll
        }

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
