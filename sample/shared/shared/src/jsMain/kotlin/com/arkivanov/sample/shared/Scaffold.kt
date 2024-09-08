package com.arkivanov.sample.shared

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
import mui.material.styles.TypographyVariant
import mui.system.PropsWithSx
import mui.system.sx
import react.FC
import react.PropsWithChildren
import web.cssom.BoxSizing
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.number

internal external interface ScaffoldProps : PropsWithChildren, PropsWithSx {
    var appBar: AppBar?
}

internal data class AppBar(
    val title: String,
    val onCloseClick: (() -> Unit)? = null,
)

internal val Scaffold: FC<ScaffoldProps> = FC { props ->
    Box {
        sx {
            display = Display.flex
            flexDirection = FlexDirection.column
            boxSizing = BoxSizing.borderBox
            +props.sx
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
