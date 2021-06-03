package com.arkivanov.sample.masterdetail.app

import com.ccfraser.muirwik.components.mThemeProvider
import com.ccfraser.muirwik.components.styles.mStylesProvider
import kotlinx.browser.document
import react.dom.render

fun main() {
    render(document.getElementById("app")) {
        mStylesProvider("jss-insertion-point") {
            mThemeProvider {
                child(App::class) {}
            }
        }
    }
}
