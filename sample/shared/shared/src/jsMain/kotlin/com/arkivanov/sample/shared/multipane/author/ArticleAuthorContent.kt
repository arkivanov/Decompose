package com.arkivanov.sample.shared.multipane.author

import com.arkivanov.sample.shared.AppBar
import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.Scaffold
import com.arkivanov.sample.shared.useAsState
import mui.material.Box
import mui.material.Icon
import mui.material.IconButton
import mui.material.Typography
import mui.material.TypographyAlign
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.FC
import web.cssom.AlignItems
import web.cssom.BoxSizing
import web.cssom.Color
import web.cssom.Display
import web.cssom.Flex
import web.cssom.FlexDirection
import web.cssom.Overflow
import web.cssom.Position
import web.cssom.number
import web.cssom.pct
import web.cssom.px

val ArticleAuthorContent: FC<RProps<ArticleAuthorComponent>> = FC { props ->
    val model by props.component.models.useAsState()

    Scaffold {
        sx {
            width = 100.pct
            height = 100.pct
        }

        if (model.isToolbarVisible) {
            appBar = AppBar(title = model.author.name, onCloseClick = props.component::onCloseClicked)
        }

        Box {
            sx {
                flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
                display = Display.flex
                flexDirection = FlexDirection.column
                width = 100.pct
                boxSizing = BoxSizing.borderBox
                overflowY = Overflow.scroll
            }

            Box {
                sx {
                    flex = Flex(grow = number(0.0), shrink = number(0.0), basis = 0.px)
                    display = Display.flex
                    width = 100.pct
                    alignItems = AlignItems.center
                    boxSizing = BoxSizing.borderBox
                    paddingRight = 8.px
                }

                Typography {
                    sx {
                        flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
                        padding = 16.px
                    }

                    variant = TypographyVariant.h6
                    +model.author.name
                }

                if (model.isCloseButtonVisible) {
                    IconButton {
                        sx {
                            flex = Flex(grow = number(0.0), shrink = number(0.0), basis = 0.px)
//                            marginRight = 8.px
                        }

                        onClick = { props.component.onCloseClicked() }

                        Icon {
                            +"close"
                        }
                    }
                }
            }

            Typography {
                sx {
                    flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
                    width = 100.pct
                    boxSizing = BoxSizing.borderBox
                    paddingLeft = 16.px
                    paddingRight = 16.px
                    paddingBottom = 16.px
                }

                align = TypographyAlign.justify
                +model.author.bio
            }
        }
    }
}
