package com.arkivanov.sample.shared.multipane.list

import com.arkivanov.sample.shared.AppBar
import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.Scaffold
import com.arkivanov.sample.shared.useAsState
import mui.material.ListItemButton
import mui.material.Typography
import mui.system.sx
import react.FC
import web.cssom.BoxSizing
import web.cssom.Color
import web.cssom.Flex
import web.cssom.Overflow
import web.cssom.number
import web.cssom.pct
import web.cssom.px

val ArticleListContent: FC<RProps<ArticleListComponent>> = FC { props ->
    val model by props.component.models.useAsState()

    Scaffold {
        sx {
            width = 100.pct
            height = 100.pct
        }

        if (model.isToolbarVisible) {
            appBar = AppBar(title = "Multi-Pane Layout")
        }

        mui.material.List {
            sx {
                flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
                width = 100.pct
                boxSizing = BoxSizing.borderBox
                overflowX = Overflow.clip
                overflowY = Overflow.scroll
            }

            model.articles.forEach { article ->
                ListItemButton {
                    selected = article.id == model.selectedArticleId
                    onClick = { props.component.onArticleClicked(article) }

                    Typography {
                        +article.title
                    }
                }
            }
        }
    }
}
