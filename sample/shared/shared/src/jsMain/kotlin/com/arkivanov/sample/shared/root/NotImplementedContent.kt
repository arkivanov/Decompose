package com.arkivanov.sample.shared.root

import csstype.AlignItems
import csstype.Display
import csstype.FlexDirection
import csstype.px
import mui.material.Box
import mui.material.Typography
import mui.system.sx
import react.FC

var NotImplementedContent: FC<Nothing> = FC {
    Box {
        sx {
            padding = 16.px
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
        }

        Typography { +"Not implemented yet :-(" }
    }
}
