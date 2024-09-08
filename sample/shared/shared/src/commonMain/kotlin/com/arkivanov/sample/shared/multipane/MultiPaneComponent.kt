package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent

interface MultiPaneComponent {

    val panels: Value<ChildPanels<*, ArticleListComponent, *, ArticleDetailsComponent>>

    fun setMultiPane(isMultiPane: Boolean)
}
