package com.arkivanov.sample.shared.menu

internal class DefaultMenuComponent(
    override val onDynamicFeaturesItemSelected: () -> Unit,
    override val onCustomNavigationItemSelected: () -> Unit,
    override val onPagesItemSelected: () -> Unit,
) : MenuComponent
