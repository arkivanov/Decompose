package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent

interface MultiPaneComponent {

    val children: Value<Children>

    fun setMultiPane(isMultiPane: Boolean)

    data class Children(
        val isMultiPane: Boolean,
        val listChild: Child.Created<*, ArticleListComponent>,
        val detailsChild: Child.Created<*, ArticleDetailsComponent>?,
    )
}
