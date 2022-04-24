package com.arkivanov.sample.counter.uiandroid

import android.view.View
import android.widget.TextView
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.value.observe
import com.arkivanov.sample.counter.shared.counter.Counter

@ExperimentalDecomposeApi
@Suppress("FunctionName") // Factory function
fun ViewContext.CounterView(counter: Counter): View {
    val layout = layoutInflater.inflate(R.layout.counter, parent, false)
    val counterText: TextView = layout.findViewById(R.id.text_count)

    counter.model.observe(lifecycle) { data ->
        counterText.text = data.text
    }

    return layout
}
