package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.router.panels.ChildPanelsMode
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.PreviewComponentContext
import com.arkivanov.sample.shared.multipane.author.ArticleAuthorComponent
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.details.PreviewArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent
import com.arkivanov.sample.shared.multipane.list.PreviewArticleListComponent

@OptIn(ExperimentalDecomposeApi::class)
class PreviewMultiPaneComponent(
    isMultiPane: Boolean = false,
) : MultiPaneComponent, ComponentContext by PreviewComponentContext {

    @OptIn(ExperimentalDecomposeApi::class)
    override val panels: Value<ChildPanels<Any, ArticleListComponent, Any, ArticleDetailsComponent, Any, ArticleAuthorComponent>> =
        MutableValue(
            ChildPanels(
                main = Child.Created(configuration = Unit, instance = PreviewArticleListComponent()),
                details = if (isMultiPane) Child.Created(configuration = Unit, instance = PreviewArticleDetailsComponent()) else null,
                mode = if (isMultiPane) ChildPanelsMode.DUAL else ChildPanelsMode.SINGLE,
            )
        )

    override fun setMode(mode: ChildPanelsMode) {}
    override fun onBack() {}
}
