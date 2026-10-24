package com.arkivanov.sample.shared.menu

interface MenuComponent {

    val onCustomNavigationItemSelected: () -> Unit
    val onPagesItemSelected: () -> Unit
    val onSharedTransitionsItemSelected: () -> Unit
}
