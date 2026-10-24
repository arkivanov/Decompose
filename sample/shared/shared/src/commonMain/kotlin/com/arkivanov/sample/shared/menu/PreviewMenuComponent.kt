package com.arkivanov.sample.shared.menu

class PreviewMenuComponent : MenuComponent {
    override val onCustomNavigationItemSelected: () -> Unit = {}
    override val onPagesItemSelected: () -> Unit = {}
    override val onSharedTransitionsItemSelected: () -> Unit = {}
}
