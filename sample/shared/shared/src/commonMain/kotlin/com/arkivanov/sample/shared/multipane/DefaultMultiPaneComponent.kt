package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.ChildNavState.Status
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.SimpleNavigation
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.parcelable.Parcelable
import com.arkivanov.essenty.parcelable.Parcelize
import com.arkivanov.sample.shared.multipane.MultiPaneComponent.Children
import com.arkivanov.sample.shared.multipane.database.DefaultArticleDatabase
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.details.DefaultArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent
import com.arkivanov.sample.shared.multipane.list.DefaultArticleListComponent
import com.arkivanov.sample.shared.multipane.utils.disposableScope
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.map
import com.badoo.reaktive.observable.notNull
import com.badoo.reaktive.subject.behavior.BehaviorSubject

internal class DefaultMultiPaneComponent(
    componentContext: ComponentContext
) : MultiPaneComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val database = DefaultArticleDatabase()
    private val navigation = SimpleNavigation<(NavigationState) -> NavigationState>()
    private val navState = BehaviorSubject<NavigationState?>(null)

    override val children: Value<Children> =
        children(
            source = navigation,
            key = "children",
            initialState = ::NavigationState,
            navTransformer = { navState, event -> event(navState) },
            stateMapper = { navState, children ->
                @Suppress("UNCHECKED_CAST")
                Children(
                    isMultiPane = navState.isMultiPane,
                    listChild = children.first { it.instance is ArticleListComponent } as Child.Created<*, ArticleListComponent>,
                    detailsChild = children.find { it.instance is ArticleDetailsComponent } as Child.Created<*, ArticleDetailsComponent>?,
                )
            },
            onStateChanged = { newState, _ -> navState.onNext(newState) },
            childFactory = ::child,
        )

    private fun child(config: Config, componentContext: ComponentContext): Any =
        when (config) {
            is Config.List -> listComponent(componentContext)
            is Config.Details -> detailsComponent(config, componentContext)
        }

    private fun listComponent(componentContext: ComponentContext): ArticleListComponent =
        DefaultArticleListComponent(
            componentContext = componentContext,
            database = database,
            selectedArticleId = navState.notNull().map { if (it.isMultiPane) it.articleId else null },
            onArticleSelected = { id -> navigation.navigate { it.copy(articleId = id) } },
        )

    private fun detailsComponent(config: Config.Details, componentContext: ComponentContext): ArticleDetailsComponent =
        DefaultArticleDetailsComponent(
            componentContext = componentContext,
            database = database,
            articleId = config.articleId,
            isToolbarVisible = navState.notNull().map { !it.isMultiPane },
            onFinished = { navigation.navigate { it.copy(articleId = null) } },
        )

    override fun setMultiPane(isMultiPane: Boolean) {
        navigation.navigate { it.copy(isMultiPane = isMultiPane) }
    }

    private sealed interface Config : Parcelable {
        @Parcelize
        object List : Config

        @Parcelize
        data class Details(val articleId: Long) : Config
    }

    @Parcelize
    private data class NavigationState(
        val isMultiPane: Boolean = false,
        val articleId: Long? = null,
    ) : NavState<Config>, Parcelable {
        override val children: List<ChildNavState<Config>>
            get() =
                listOfNotNull(
                    SimpleChildNavState(Config.List, if (isMultiPane || (articleId == null)) Status.ACTIVE else Status.INACTIVE),
                    if (articleId != null) SimpleChildNavState(Config.Details(articleId), Status.ACTIVE) else null,
                )
    }
}
