package com.arkivanov.sample.shared.root

import mui.material.Box
import mui.material.Typography
import mui.system.sx
import react.FC
import web.cssom.AlignItems
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.px

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
