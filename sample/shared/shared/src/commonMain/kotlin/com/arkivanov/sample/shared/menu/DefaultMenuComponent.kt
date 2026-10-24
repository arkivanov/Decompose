package com.arkivanov.sample.shared.menu

internal class DefaultMenuComponent(
    override val onCustomNavigationItemSelected: () -> Unit,
    override val onPagesItemSelected: () -> Unit,
    override val onSharedTransitionsItemSelected: () -> Unit,
) : MenuComponent
