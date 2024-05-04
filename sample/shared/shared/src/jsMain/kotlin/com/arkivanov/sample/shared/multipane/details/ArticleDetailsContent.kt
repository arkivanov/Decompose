package com.arkivanov.sample.shared.multipane.details

import com.arkivanov.sample.shared.AppBar
import com.arkivanov.sample.shared.RProps
import com.arkivanov.sample.shared.Scaffold
import com.arkivanov.sample.shared.useAsState
import mui.material.Typography
import mui.system.sx
import react.FC
import web.cssom.Overflow
import web.cssom.px

val ArticleDetailsContent: FC<RProps<ArticleDetailsComponent>> = FC { props ->
    val model by props.component.models.useAsState()

    Scaffold {
        if (model.isToolbarVisible) {
            appBar = AppBar(title = model.article.title, onCloseClick = props.component::onCloseClicked)
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

//    Box {
//        sx {
//            display = Display.flex
//            flexDirection = FlexDirection.column
//            boxSizing = BoxSizing.borderBox
//            width = 100.pct
//            height = 100.pct
//        }
//
//        if (model.isToolbarVisible) {
//            AppBar {
//                position = AppBarPosition.static
//
//                Toolbar {
//                    IconButton {
//                        size = Size.large
//                        edge = IconButtonEdge.start
//                        color = IconButtonColor.inherit
//                        onClick = { props.component.onCloseClicked() }
//
//                        Icon {
//                            +"arrow_back"
//                        }
//                    }
//
//                    Typography {
//                        variant = TypographyVariant.h6
//
//                        sx {
//                            flexGrow = number(1.0)
//                        }
//
//                        +model.article.title
//                    }
//                }
//            }
//        }
//
//        Typography {
//            sx {
//                padding = 16.px
//                overflowX = Overflow.clip
//                overflowY = Overflow.scroll
//            }
//
//            +model.article.text
//        }
//    }
}
