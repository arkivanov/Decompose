package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.router.panels.Panels
import com.arkivanov.decompose.router.panels.PanelsNavigation
import com.arkivanov.decompose.router.panels.childPanels
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.backhandler.BackCallback
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
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.serializer

internal class DefaultMultiPaneComponent(
    componentContext: ComponentContext,
) : MultiPaneComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val database = DefaultArticleDatabase()
    private val nav = PanelsNavigation<Unit, DetailsConfig>()
    private val navState = BehaviorSubject<Panels<Unit, DetailsConfig>?>(null)

    override val panels: Value<ChildPanels<*, ArticleListComponent, *, ArticleDetailsComponent>> =
        childPanels(
            source = nav,
            initialPanels = { Panels(mainConfig = Unit) },
            serializers = Unit.serializer() to DetailsConfig.serializer(),
            onStateChanged = { newState, _ -> navState.onNext(newState) },
            mainFactory = { _, ctx -> listComponent(ctx) },
            detailsFactory = ::detailsComponent,
        )

    private val backCallback = BackCallback(isEnabled = false, onBack = ::closeDetails)

    init {
        backHandler.register(backCallback)

        navState.notNull().subscribeScoped {
            backCallback.isEnabled = !it.isMultiPane && (it.detailsConfig?.articleId != null)
        }
    }

    private fun listComponent(componentContext: ComponentContext): ArticleListComponent =
        DefaultArticleListComponent(
            componentContext = componentContext,
            database = database,
            isToolbarVisible = navState.notNull().map { !it.isMultiPane },
            selectedArticleId = navState.notNull().map { if (it.isMultiPane) it.detailsConfig?.articleId else null },
            onArticleSelected = ::showDetails,
        )

    private fun detailsComponent(config: DetailsConfig, componentContext: ComponentContext): ArticleDetailsComponent =
        DefaultArticleDetailsComponent(
            componentContext = componentContext,
            database = database,
            articleId = config.articleId,
            isToolbarVisible = navState.notNull().map { !it.isMultiPane },
            onFinished = ::closeDetails,
        )

    override fun setMultiPane(isMultiPane: Boolean) {
        nav.navigate(transformer = { it.copy(isMultiPane = isMultiPane) })
    }

    private fun showDetails(articleId: Long) {
        nav.navigate(transformer = { it.copy(detailsConfig = DetailsConfig(articleId = articleId)) })
    }

    private fun closeDetails() {
        nav.navigate(transformer = { it.copy(detailsConfig = null) })
    }

    @Serializable
    data class DetailsConfig(val articleId: Long)
}
