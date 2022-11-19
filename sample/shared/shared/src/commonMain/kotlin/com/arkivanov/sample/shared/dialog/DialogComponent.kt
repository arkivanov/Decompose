package com.arkivanov.sample.shared.dialog

interface DialogComponent {

    val title: String
    val message: String

    fun onDismissClicked()
}
