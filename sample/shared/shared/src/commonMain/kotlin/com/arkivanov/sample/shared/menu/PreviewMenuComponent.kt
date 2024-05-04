package com.arkivanov.sample.shared.menu

class PreviewMenuComponent : MenuComponent {
    override val onDynamicFeaturesItemSelected: () -> Unit = {}
    override val onCustomNavigationItemSelected: () -> Unit = {}
    override val onPagesItemSelected: () -> Unit = {}
}
