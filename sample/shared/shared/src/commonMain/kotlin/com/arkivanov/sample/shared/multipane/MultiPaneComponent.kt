package com.arkivanov.sample.shared.multipane

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.value.MutableValue
import com.arkivanov.decompose.value.Value
import com.arkivanov.decompose.value.reduce
import com.arkivanov.essenty.backhandler.BackCallback
import com.arkivanov.sample.shared.multipane.MultiPane.DetailsChild
import com.arkivanov.sample.shared.multipane.MultiPane.ListChild
import com.arkivanov.sample.shared.multipane.MultiPane.Model
import com.arkivanov.sample.shared.multipane.database.DefaultArticleDatabase
import com.badoo.reaktive.subject.behavior.BehaviorSubject

internal class MultiPaneComponent(
    componentContext: ComponentContext
) : MultiPane, ComponentContext by componentContext {

    private val database = DefaultArticleDatabase()

    private val _models = MutableValue(Model())
    override val models: Value<Model> = _models

    private val isDetailsToolbarVisible = BehaviorSubject(!_models.value.isMultiPane)
    private val selectedArticleIdSubject = BehaviorSubject<Long?>(null)

    private val listRouter =
        ListRouter(
            componentContext = this,
            database = database,
            selectedArticleId = selectedArticleIdSubject,
            onArticleSelected = ::onArticleSelected
        )

    override val listChildStack: Value<ChildStack<*, ListChild>> = listRouter.stack

    private val detailsRouter =
        DetailsRouter(
            componentContext = this,
            database = database,
            isToolbarVisible = isDetailsToolbarVisible,
            onFinished = ::closeDetailsAndShowList
        )

    override val detailsChildStack: Value<ChildStack<*, DetailsChild>> = detailsRouter.stack

    private val backCallback = BackCallback(isEnabled = false, onBack = ::closeDetailsAndShowList)

    init {
        backHandler.register(backCallback)

        _models.subscribe { updateBackCallback() }

        detailsRouter.stack.subscribe {
            updateBackCallback()
            selectedArticleIdSubject.onNext(it.active.configuration.getArticleId())
        }
    }

    private fun updateBackCallback() {
        backCallback.isEnabled = !isMultiPaneMode() && detailsRouter.isShown()
    }

    private fun closeDetailsAndShowList() {
        listRouter.show()
        detailsRouter.closeArticle()
    }

    private fun onArticleSelected(id: Long) {
        detailsRouter.showArticle(id = id)

        if (isMultiPaneMode()) {
            listRouter.show()
        } else {
            listRouter.moveToBackStack()
        }
    }

    override fun setMultiPane(isMultiPane: Boolean) {
        _models.reduce { it.copy(isMultiPane = isMultiPane) }
        isDetailsToolbarVisible.onNext(!isMultiPane)

        if (isMultiPane) {
            switchToMultiPane()
        } else {
            switchToSinglePane()
        }
    }

    private fun switchToMultiPane() {
        listRouter.show()
    }

    private fun switchToSinglePane() {
        if (detailsRouter.isShown()) {
            listRouter.moveToBackStack()
        } else {
            listRouter.show()
        }
    }

    private fun isMultiPaneMode(): Boolean = _models.value.isMultiPane

    private fun DetailsRouter.Config.getArticleId(): Long? =
        when (this) {
            is DetailsRouter.Config.None -> null
            is DetailsRouter.Config.Details -> articleId
        }
}
