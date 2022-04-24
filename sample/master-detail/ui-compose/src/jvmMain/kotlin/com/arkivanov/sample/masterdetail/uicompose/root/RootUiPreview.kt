package com.arkivanov.sample.masterdetail.uicompose.root

import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.runtime.Composable
import com.arkivanov.decompose.router.RouterState
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.masterdetail.uicompose.details.ArticleDetailsPreview
import com.arkivanov.sample.masterdetail.uicompose.list.ArticleListPreview
import com.arkivanov.sample.masterdetail.shared.root.Root
import com.arkivanov.sample.masterdetail.shared.root.Root.DetailsChild
import com.arkivanov.sample.masterdetail.shared.root.Root.ListChild
import com.arkivanov.sample.masterdetail.shared.root.Root.Model

@Preview
@Composable
fun RootUiPreview() {
    RootUi(RootPreview())
}

class RootPreview : Root {
    override val models: Value<Model> =
        MutableValue(Model(isMultiPane = true))

    override val listRouterState: Value<RouterState<*, ListChild>> =
        MutableValue(
            RouterState(
                configuration = Unit,
                instance = ListChild.List(ArticleListPreview())
            )
        )

    override val detailsRouterState: Value<RouterState<*, DetailsChild>> =
        MutableValue(
            RouterState(
                configuration = Unit,
                instance = DetailsChild.Details(ArticleDetailsPreview())
            )
        )

    override fun setMultiPane(isMultiPane: Boolean) {}
}
