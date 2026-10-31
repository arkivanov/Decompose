package com.arkivanov.decompose

import androidx.lifecycle.Lifecycle
import com.arkivanov.decompose.lifecycle.addObserver

fun Lifecycle.logEvents(): MutableList<String> =
    ArrayList<String>().apply {
        addObserver(
            onCreate = { add("onCreate") },
            onStart = { add("onStart") },
            onResume = { add("onResume") },
            onPause = { add("onPause") },
            onStop = { add("onStop") },
            onDestroy = { add("onDestroy") },
        )
    }
