package com.arkivanov.sample.shared.counters.counter

import android.view.View
import android.widget.TextView
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.value.observe
import com.arkivanov.sample.shared.R

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
internal fun ViewContext.CounterView(counter: Counter): View {
    val layout = layoutInflater.inflate(R.layout.counter, parent, false)
    val counterTitle: TextView = layout.findViewById(R.id.text_title)
    val counterText: TextView = layout.findViewById(R.id.text_count)
    val nextButton: TextView = layout.findViewById(R.id.button_next)
    val prevButton: TextView = layout.findViewById(R.id.button_prev)

    nextButton.setOnClickListener { counter.onNextClicked() }
    prevButton.setOnClickListener { counter.onPrevClicked() }

    counter.model.observe(lifecycle) { data ->
        counterTitle.text = data.title
        counterText.text = data.text
        prevButton.isEnabled = data.isBackEnabled
    }

    return layout
}
