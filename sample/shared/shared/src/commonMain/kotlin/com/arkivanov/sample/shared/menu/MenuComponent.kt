package com.arkivanov.sample.shared.menu

interface MenuComponent {

    val onDynamicFeaturesItemSelected: () -> Unit
    val onCustomNavigationItemSelected: () -> Unit
    val onPagesItemSelected: () -> Unit
}
