package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.panels.ChildPanels
import com.arkivanov.decompose.router.panels.ChildPanelsMode
import com.arkivanov.decompose.router.panels.ChildPanelsMode.TRIPLE
import com.arkivanov.decompose.router.panels.Panels
import com.arkivanov.decompose.router.panels.PanelsNavigation
import com.arkivanov.decompose.router.panels.activateExtra
import com.arkivanov.decompose.router.panels.childPanels
import com.arkivanov.decompose.router.panels.childPanelsWebNavigation
import com.arkivanov.decompose.router.panels.isDual
import com.arkivanov.decompose.router.panels.isSingle
import com.arkivanov.decompose.router.panels.navigate
import com.arkivanov.decompose.router.panels.pop
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.value.Value
import com.arkivanov.essenty.lifecycle.reaktive.disposableScope
import com.arkivanov.sample.shared.Url
import com.arkivanov.sample.shared.multipane.author.ArticleAuthorComponent
import com.arkivanov.sample.shared.multipane.author.DefaultArticleAuthorComponent
import com.arkivanov.sample.shared.multipane.database.DefaultArticleDatabase
import com.arkivanov.sample.shared.multipane.details.ArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.details.DefaultArticleDetailsComponent
import com.arkivanov.sample.shared.multipane.list.ArticleListComponent
import com.arkivanov.sample.shared.multipane.list.DefaultArticleListComponent
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.observable.map
import com.badoo.reaktive.observable.notNull
import com.badoo.reaktive.subject.behavior.BehaviorSubject
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.serializer

@OptIn(ExperimentalDecomposeApi::class)
internal class DefaultMultiPaneComponent(
    componentContext: ComponentContext,
    deepLinkUrl: Url?,
) : MultiPaneComponent, ComponentContext by componentContext, DisposableScope by componentContext.disposableScope() {

    private val database = DefaultArticleDatabase()
    private val navigation = PanelsNavigation<Unit, Details, Extra>()
    private val _navState = BehaviorSubject<Panels<Unit, Details, Extra>?>(null)
    private val navState = _navState.notNull()

    private val _panels =
        childPanels(
            source = navigation,
            initialPanels = { getInitialPanels(deepLinkUrl) },
            serializers = Triple(Unit.serializer(), Details.serializer(), Extra.serializer()),
            onStateChanged = { newState, _ -> _navState.onNext(newState) },
            handleBackButton = true,
            mainFactory = { _, ctx -> listComponent(ctx) },
            detailsFactory = ::detailsComponent,
            extraFactory = ::authorComponent,
        )

    override val panels: Value<ChildPanels<*, ArticleListComponent, *, ArticleDetailsComponent, *, ArticleAuthorComponent>> = _panels

    override val webNavigation: WebNavigation<*> =
        childPanelsWebNavigation(
            navigator = navigation,
            panels = _panels,
            mainSerializer = Unit.serializer(),
            detailsSerializer = Details.serializer(),
            extraSerializer = Extra.serializer(),
            parametersMapper = { panels ->
                panels.details?.let {
                    mapOf(KEY_ARTICLE_ID to it.configuration.articleId.toString())
                }
            },
        )

    private fun listComponent(componentContext: ComponentContext): ArticleListComponent =
        DefaultArticleListComponent(
            componentContext = componentContext,
            database = database,
            isToolbarVisible = navState.map { it.mode.isSingle },
            selectedArticleId = navState.map { it.takeUnless { it.mode.isSingle }?.details?.articleId },
            onArticleSelected = { articleId ->
                navigation.navigate { state ->
                    state.copy(
                        details = Details(articleId = articleId),
                        extra = if (state.mode == TRIPLE) Extra(articleId = articleId) else null,
                    )
                }
            },
        )

    private fun detailsComponent(config: Details, componentContext: ComponentContext): ArticleDetailsComponent =
        DefaultArticleDetailsComponent(
            componentContext = componentContext,
            database = database,
            articleId = config.articleId,
            isToolbarVisible = navState.map { it.mode.isSingle },
            onAuthorRequested = { navigation.activateExtra(extra = Extra(articleId = config.articleId)) },
            onFinished = navigation::pop,
        )

    private fun authorComponent(config: Extra, componentContext: ComponentContext): ArticleAuthorComponent =
        DefaultArticleAuthorComponent(
            componentContext = componentContext,
            database = database,
            articleId = config.articleId,
            isToolbarVisible = navState.map { it.mode.isSingle },
            isCloseButtonVisible = navState.map { it.mode.isDual },
            onFinished = navigation::pop,
        )

    override fun setMode(mode: ChildPanelsMode) {
        navigation.navigate { state ->
            state.copy(
                extra = state.takeIf { mode == TRIPLE }?.details?.articleId?.let { Extra(articleId = it) } ?: state.extra,
                mode = mode,
            )
        }
    }

    override fun onBack() {
        navigation.pop()
    }

    private fun getInitialPanels(deepLinkUrl: Url?): Panels<Unit, Details, Extra> {
        val parameters = deepLinkUrl?.parameters ?: return Panels(main = Unit)

        return Panels(
            main = Unit,
            details = parameters[KEY_ARTICLE_ID]?.toLongOrNull()?.let { Details(articleId = it) },
        )
    }

    private companion object {
        private const val KEY_ARTICLE_ID = "articleId"
    }

    @Serializable
    private data class Details(val articleId: Long)

    @Serializable
    private data class Extra(val articleId: Long)
}
