package com.arkivanov.sample.shared

import mui.material.AppBar
import mui.material.AppBarPosition
import mui.material.Icon
import mui.material.IconButton
import mui.material.IconButtonColor
import mui.material.IconButtonEdge
import mui.material.Size
import mui.material.Stack
import mui.material.Toolbar
import mui.material.Typography
import mui.material.styles.TypographyVariant
import mui.system.responsive
import mui.system.sx
import react.FC
import react.PropsWithChildren
import web.cssom.AlignItems
import web.cssom.BoxSizing
import web.cssom.number

internal external interface ScaffoldProps : PropsWithChildren {
    var appBar: AppBar?
}

internal data class AppBar(
    val title: String,
    val onCloseClick: (() -> Unit)? = null,
)

internal val Scaffold: FC<ScaffoldProps> = FC { props ->
    Stack {
        spacing = responsive(2)

        sx {
            alignItems = AlignItems.center
            boxSizing = BoxSizing.borderBox
        }

        props.appBar?.also { appBar ->
            AppBar {
                position = AppBarPosition.static

                Toolbar {
                    if (appBar.onCloseClick != null) {
                        IconButton {
                            size = Size.large
                            edge = IconButtonEdge.start
                            color = IconButtonColor.inherit
                            onClick = { appBar.onCloseClick.invoke() }

                            Icon {
                                +"arrow_back"
                            }
                        }
                    }

                    Typography {
                        sx {
                            flexGrow = number(1.0)
                        }

                        variant = TypographyVariant.h6
                        +appBar.title
                    }
                }
            }
        }

        +props.children
    }
}
