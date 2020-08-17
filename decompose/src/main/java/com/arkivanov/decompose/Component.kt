package com.arkivanov.decompose

import androidx.compose.runtime.Composable

interface Component {

    @Composable
    fun content()
}
