package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.router.panels.ChildPanelsMode
import com.arkivanov.decompose.router.webhistory.WebNavigationOwner
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackHandlerOwner
import com.arkivanov.sample.shared.multipane.author.ArticleAuthorComponent
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent

@OptIn(ExperimentalDecomposeApi::class)
interface MultiPaneComponent : BackHandlerOwner, WebNavigationOwner {

    val panels: Value<ChildPanels<*, ArticleListComponent, *, ArticleDetailsComponent, *, ArticleAuthorComponent>>

    fun setMode(mode: ChildPanelsMode)
    fun onBack()
}
