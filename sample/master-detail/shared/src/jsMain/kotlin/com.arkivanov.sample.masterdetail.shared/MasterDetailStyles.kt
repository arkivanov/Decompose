package com.arkivanov.sample.masterdetail.shared

import com.ccfraser.muirwik.components.spacingUnits
import kotlinx.css.CSSBuilder
import kotlinx.css.Display
import kotlinx.css.FlexDirection
import kotlinx.css.Overflow
import kotlinx.css.Position
import kotlinx.css.display
import kotlinx.css.flexDirection
import kotlinx.css.height
import kotlinx.css.overflow
import kotlinx.css.overflowY
import kotlinx.css.padding
import kotlinx.css.pct
import kotlinx.css.position
import kotlinx.css.vh
import kotlinx.css.width
import styled.StyleSheet

object MasterDetailStyles : StyleSheet("MasterDetailStyles", isStatic = true) {

    val singlePaneContainerCss: CSSBuilder.() -> Unit by css {
        display = Display.flex
        flexDirection = FlexDirection.row
        height = 100.vh
    }

    val listPaneContainerCss: CSSBuilder.() -> Unit by css {
        width = 40.pct
        overflowY = Overflow.scroll
    }

    val detailsPaneContainerCss: CSSBuilder.() -> Unit by css {
        width = 60.pct
        overflowY = Overflow.scroll
    }

    val listItemCss: CSSBuilder.() -> Unit by css {
        padding(2.spacingUnits)
    }

    val detailsAppBarCss: CSSBuilder.() -> Unit by css {
        overflow = Overflow.hidden
        position = Position.relative
        display = Display.flex
        width = 100.pct
    }
}
