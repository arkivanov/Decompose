package com.arkivanov.sample.counter.shared.ui.android

import android.view.View
import android.widget.TextView
import com.arkivanov.decompose.extensions.android.ViewContext
import com.arkivanov.decompose.extensions.android.layoutInflater
import com.arkivanov.decompose.value.observe
import com.arkivanov.sample.counter.shared.R
import com.arkivanov.sample.counter.shared.counter.Counter.Model

@Suppress("FunctionName") // Factory function
fun ViewContext.CounterView(model: Model): View {
    val root = layoutInflater.inflate(R.layout.counter, parent, false)
    val counterText: TextView = root.findViewById(R.id.text_count)

    model.data.observe(lifecycle) { data ->
        counterText.text = data.text
    }

    return root
}
