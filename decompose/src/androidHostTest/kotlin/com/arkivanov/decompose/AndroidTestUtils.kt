package com.arkivanov.decompose

import com.arkivanov.essenty.lifecycle.Lifecycle
import com.arkivanov.essenty.lifecycle.subscribe

fun Lifecycle.logEvents(): MutableList<String> =
    ArrayList<String>().apply {
        subscribe(
            onCreate = { add("onCreate") },
            onStart = { add("onStart") },
            onResume = { add("onResume") },
            onPause = { add("onPause") },
            onStop = { add("onStop") },
            onDestroy = { add("onDestroy") },
        )
    }
