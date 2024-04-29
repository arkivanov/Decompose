package com.arkivanov.sample.shared.customnavigation

import com.arkivanov.decompose.Child
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.children.ChildNavState
import com.arkivanov.decompose.router.children.NavState
import com.arkivanov.decompose.router.children.SimpleChildNavState
import com.arkivanov.decompose.router.children.SimpleNavigation
import com.arkivanov.decompose.router.children.children
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.customnavigation.CustomNavigationComponent.Children
import com.arkivanov.sample.shared.customnavigation.CustomNavigationComponent.Mode
import com.arkivanov.sample.shared.customnavigation.KittenComponent.ImageType
import kotlinx.serialization.Serializable

class DefaultCustomNavigationComponent(
    componentContext: ComponentContext,
) : CustomNavigationComponent, ComponentContext by componentContext {

    private val navigation = SimpleNavigation<(NavigationState) -> NavigationState>()

    private val _children: Value<Children<Config, KittenComponent>> =
        children(
            source = navigation,
            stateSerializer = NavigationState.serializer(),
            key = "carousel",
            initialState = {
                NavigationState(
                    configurations = ImageType.values().map { imageType ->
                        Config(imageType = imageType)
                    },
                    index = 0,
                    mode = Mode.CAROUSEL,
                )
            },
            navTransformer = { state, transformer -> transformer(state) },
            stateMapper = { state, children ->
                Children(
                    items = children.map { it as Child.Created },
                    index = state.index,
                    mode = state.mode,
                )
            },
            backTransformer = {
                it.takeIf { it.index > 0 }?.let { state ->
                    { state.copy(index = state.index - 1) }
                }
            },
            childFactory = { config, componentContext ->
                DefaultKittenComponent(
                    componentContext = componentContext,
                    imageType = config.imageType,
                )
            },
        )

    override val children: Value<Children<*, KittenComponent>> = _children

    override fun onSwitchToPagerClicked() {
        navigation.navigate { state ->
            state.copy(mode = Mode.PAGER)
        }
    }

    override fun onSwitchToCarouselClicked() {
        navigation.navigate { state ->
            state.copy(mode = Mode.CAROUSEL)
        }
    }

    override fun onForwardClicked() {
        navigation.navigate { state ->
            state.copy(index = (state.index + 1) % state.configurations.size)
        }
    }

    override fun onBackwardClicked() {
        navigation.navigate { state ->
            val size = state.configurations.size
            state.copy(index = (size + state.index - 1) % size)
        }
    }

    override fun onShuffleClicked() {
        navigation.navigate { state ->
            state.copy(configurations = state.configurations.shuffled())
        }
    }

    @Serializable
    private data class Config(
        val imageType: ImageType,
    )

    @Serializable
    private data class NavigationState(
        val configurations: List<Config>,
        val index: Int,
        val mode: Mode,
    ) : NavState<Config> {

        override val children: List<SimpleChildNavState<Config>> by lazy {
            configurations.mapIndexed { index, config ->
                SimpleChildNavState(
                    configuration = config,
                    status = if (index == this.index) ChildNavState.Status.RESUMED else ChildNavState.Status.CREATED,
                )
            }
        }
    }
}
