package com.arkivanov.sample.shared.multipane.details

import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.useAsState
import csstype.BoxSizing
import csstype.Display
import csstype.FlexDirection
import csstype.Overflow
import csstype.number
import csstype.pct
import csstype.px
import mui.material.AppBar
import mui.material.AppBarPosition
import mui.material.Box
import mui.material.Icon
import mui.material.IconButton
import mui.material.IconButtonColor
import mui.material.IconButtonEdge
import mui.material.Size
import mui.material.Toolbar
import mui.material.Typography
import mui.system.sx
import react.FC

val ArticleDetailsContent: FC<RProps<ArticleDetailsComponent>> = FC { props ->
    val model by props.component.models.useAsState()

    Box {
        sx {
            display = Display.flex
            flexDirection = FlexDirection.column
            boxSizing = BoxSizing.borderBox
            width = 100.pct
            height = 100.pct
        }

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
                overflowX = Overflow.clip
                overflowY = Overflow.scroll
            }

            +model.article.text
        }
    }
}
