package com.arkivanov.sample.shared.counters.counter

import android.view.View
import android.widget.TextView
import androidx.appcompat.app.AlertDialog
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.context
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.value.subscribe
import com.arkivanov.essenty.lifecycle.subscribe
import com.arkivanov.sample.shared.R
import com.arkivanov.sample.shared.dialog.DialogComponent
import com.google.android.material.appbar.MaterialToolbar

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
internal fun ViewContext.CounterView(component: CounterComponent): View {
    val layout = layoutInflater.inflate(R.layout.counter, parent, false)
    val toolbar: MaterialToolbar = layout.findViewById(R.id.toolbar)
    val counterText: TextView = layout.findViewById(R.id.text_count)
    val infoButton: TextView = layout.findViewById(R.id.button_info)
    val nextButton: TextView = layout.findViewById(R.id.button_next)
    val prevButton: TextView = layout.findViewById(R.id.button_prev)

    toolbar.setNavigationOnClickListener { component.onPrevClicked() }
    infoButton.setOnClickListener { component.onInfoClicked() }
    nextButton.setOnClickListener { component.onNextClicked() }
    prevButton.setOnClickListener { component.onPrevClicked() }

    component.model.subscribe(lifecycle) { model ->
        toolbar.title = model.title

        if (model.isBackEnabled) {
            toolbar.setNavigationIcon(R.drawable.ic_arrow_back)
        } else {
            toolbar.navigationIcon = null
        }

        counterText.text = model.text
        prevButton.isEnabled = model.isBackEnabled
    }

    var dialog: AlertDialog? = null
    component.dialogSlot.subscribe(lifecycle) { model ->
        val dialogComponent: DialogComponent? = model.child?.instance
        if ((dialogComponent != null) && (dialog == null)) {
            dialog = showDialog(component = dialogComponent)
        } else if ((dialogComponent == null) && (dialog != null)) {
            dialog?.dismiss()
            dialog = null
        }
    }

    return layout
}

@ExperimentalDecomposeApi
private fun ViewContext.showDialog(component: DialogComponent): AlertDialog =
    AlertDialog.Builder(context)
        .setTitle(component.title)
        .setMessage(component.message)
        .setNegativeButton(android.R.string.ok, null)
        .show()
        .also { dialog ->
            val observer = lifecycle.subscribe(onDestroy = dialog::dismiss)
            dialog.setOnDismissListener {
                lifecycle.unsubscribe(observer)
                component.onDismissClicked()
            }
        }
