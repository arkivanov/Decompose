package com.arkivanov.sample.masterdetail.shared.root

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.RouterState
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.observe
import com.arkivanov.sample.masterdetail.shared.database.DefaultArticleDatabase
import com.arkivanov.sample.masterdetail.shared.root.Root.DetailsChild
import com.arkivanov.sample.masterdetail.shared.root.Root.MainChild
import com.badoo.reaktive.subject.behavior.BehaviorSubject

class RootComponent(
    componentContext: ComponentContext
) : Root, ComponentContext by componentContext {

    private val database = DefaultArticleDatabase()
    private val selectedArticleIdSubject = BehaviorSubject<Long?>(null)

    private val mainRouter =
        MainRouter(
            routerFactory = this,
            database = database,
            selectedArticleId = selectedArticleIdSubject,
            onArticleSelected = ::onArticleSelected
        )

    override val mainRouterState: Value<RouterState<*, MainChild>> = mainRouter.state

    private val detailsRouter =
        DetailsPaneRouter(
            routerFactory = this,
            database = database
        )

    override val detailsRouterState: Value<RouterState<*, DetailsChild>> = detailsRouter.state

    init {
        detailsRouter.state.observe(lifecycle) {
            selectedArticleIdSubject.onNext(it.activeChild.configuration.getArticleId())
        }
    }

    private fun onArticleSelected(id: Long) {
        if (isMultiPaneMode()) {
            detailsRouter.selectArticle(id = id)
        } else {
            mainRouter.pushDetails(id = id)
        }
    }

    override fun setMultiPane(isMultiPane: Boolean) {
        if (isMultiPane != isMultiPaneMode()) {
            if (isMultiPane) {
                switchToMultiPane()
            } else {
                switchToSinglePane()
            }
        }
    }

    private fun switchToMultiPane() {
        detailsRouter.selectArticle(id = mainRouter.getSelectedArticleId())
        mainRouter.popToList()
    }

    private fun switchToSinglePane() {
        detailsRouter
            .getSelectedArticleId()
            ?.also(mainRouter::pushDetails)

        detailsRouter.closeArticle()
    }

    private fun isMultiPaneMode(): Boolean = detailsRouter.isMultiPaneMode()

    private fun DetailsPaneRouter.Config.getArticleId(): Long? =
        when (this) {
            is DetailsPaneRouter.Config.None,
            is DetailsPaneRouter.Config.NotSelected -> null
            is DetailsPaneRouter.Config.Selected -> articleId
        }
}
