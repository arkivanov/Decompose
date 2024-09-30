package com.arkivanov.sample.shared.multipane.details

import com.arkivanov.sample.shared.AppBar
import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.Scaffold
import com.arkivanov.sample.shared.useAsState
import mui.material.Box
import mui.material.ButtonBase
import mui.material.Typography
import mui.material.TypographyAlign
import mui.material.styles.TypographyVariant
import mui.system.sx
import react.FC
import web.cssom.BoxSizing
import web.cssom.Display
import web.cssom.Flex
import web.cssom.FlexDirection
import web.cssom.Overflow
import web.cssom.TextAlign
import web.cssom.TextDecoration
import web.cssom.number
import web.cssom.pct
import web.cssom.px

val ArticleDetailsContent: FC<RProps<ArticleDetailsComponent>> = FC { props ->
    val model by props.component.models.useAsState()

    Scaffold {
        sx {
            width = 100.pct
            height = 100.pct
        }

        if (model.isToolbarVisible) {
            appBar = AppBar(title = model.article.title, onCloseClick = props.component::onCloseClicked)
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

            Typography {
                sx {
                    flex = Flex(grow = number(0.0), shrink = number(0.0), basis = 0.px)
                    paddingTop = 16.px
                    paddingLeft = 16.px
                    paddingRight = 16.px
                }

                variant = TypographyVariant.h6
                +model.article.title
            }

            ButtonBase {
                sx {
                    flex = Flex(grow = number(0.0), shrink = number(0.0), basis = 0.px)
                    display = Display.flex
                    width = 100.pct
                    padding = 16.px
                }

                onClick = { props.component.onAuthorClicked() }

                Typography {
                    sx {
                        flex = Flex(grow = number(0.0), shrink = number(0.0), basis = 0.px)
                        paddingRight = 8.px
                    }

                    variant = TypographyVariant.subtitle2
                    +"Author: "
                }

                Typography {
                    sx {
                        flex = Flex(grow = number(1.0), shrink = number(0.0), basis = 0.px)
                        textDecoration = TextDecoration.underline
                        textAlign = TextAlign.start
                    }

                    variant = TypographyVariant.subtitle2
                    +model.article.authorName
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
                +model.article.text
            }
        }
    }
}
