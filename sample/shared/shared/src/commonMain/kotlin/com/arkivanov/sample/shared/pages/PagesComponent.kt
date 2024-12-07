package com.arkivanov.sample.shared.pages

import com.arkivanov.decompose.router.pages.ChildPages
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.customnavigation.KittenComponent

interface PagesComponent : WebNavigationOwner {

    val pages: Value<ChildPages<*, KittenComponent>>

    fun selectPage(index: Int)
    fun selectNext()
    fun selectPrev()
    fun onCloseClicked()
}
