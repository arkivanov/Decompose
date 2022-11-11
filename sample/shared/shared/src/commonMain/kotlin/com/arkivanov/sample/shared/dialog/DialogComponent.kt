package com.arkivanov.sample.shared.dialog

interface DialogComponent {
    val message: String
    fun onDismissClicked()
}
