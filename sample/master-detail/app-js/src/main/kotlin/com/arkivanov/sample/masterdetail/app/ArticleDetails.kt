package com.arkivanov.sample.masterdetail.app

import com.arkivanov.sample.masterdetail.shared.details.ArticleDetails
import csstype.number
import csstype.px
import mui.material.AppBar
import mui.material.AppBarPosition
import mui.material.Icon
import mui.material.IconButton
import mui.material.IconButtonColor
import mui.material.IconButtonEdge
import mui.material.Size
import mui.material.Stack
import mui.material.StackDirection
import mui.material.Toolbar
import mui.material.Typography
import mui.system.ResponsiveStyleValue
import mui.system.sx
import react.FC

val ArticleDetailsR: FC<RProps<ArticleDetails>> = FC { props ->
    val model by props.component.models.useAsState()

    Stack {
        sx = props.sx
        direction = ResponsiveStyleValue(StackDirection.column)

        if (model.isToolbarVisible) {
            AppBar {
                position = AppBarPosition.static

                Toolbar {
                    IconButton {
                        size = Size.large
                        edge = IconButtonEdge.start
                        color = IconButtonColor.inherit
                        onClick = { props.component.onCloseClicked() }

                        Icon {
                            +"arrow_back"
                        }
                    }

                    Typography {
                        variant = "h6"

                        sx {
                            flexGrow = number(1.0)
                        }

                        +model.article.title
                    }
                }
            }
        }

        Typography {
            sx {
                padding = 16.px
            }

            +model.article.text
        }
    }
}
