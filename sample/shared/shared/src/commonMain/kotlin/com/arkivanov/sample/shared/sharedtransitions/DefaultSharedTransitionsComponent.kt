package com.arkivanov.sample.shared.sharedtransitions

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.ExperimentalDecomposeApi
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.childStackWebNavigation
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.router.webhistory.WebNavigation
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.ImageResourceId
import com.arkivanov.sample.shared.Url
import com.arkivanov.sample.shared.consumePathSegment
import com.arkivanov.sample.shared.path
import com.arkivanov.sample.shared.pathSegmentOf
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsComponent.Child
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsComponent.Child.GalleryChild
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsComponent.Child.PhotoChild
import com.arkivanov.sample.shared.sharedtransitions.gallery.DefaultGalleryComponent
import com.arkivanov.sample.shared.sharedtransitions.photo.DefaultPhotoComponent
import com.arkivanov.sample.shared.sharedtransitions.photo.Image
import kotlinx.serialization.Serializable

class DefaultSharedTransitionsComponent(
    componentContext: ComponentContext,
    deepLinkUrl: Url?,
    private val onFinished: () -> Unit,
) : SharedTransitionsComponent, ComponentContext by componentContext {

    private val images =
        List(100) { index ->
            Image(
                id = index,
                resourceId = ImageResourceId.entries[index % ImageResourceId.entries.size],
            )
        }

    private val nav = StackNavigation<Config>()

    private val _stack =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialStack = { getInitialStack(deepLinkUrl) },
            handleBackButton = true,
            childFactory = { config, _ -> child(config) },
        )

    override val stack: Value<ChildStack<*, Child>> = _stack

    @OptIn(ExperimentalDecomposeApi::class)
    override val webNavigation: WebNavigation<*> =
        childStackWebNavigation(
            navigator = nav,
            stack = _stack,
            serializer = Config.serializer(),
            pathMapper = { it.configuration.path() },
            parametersMapper = { child ->
                when (val config = child.configuration) {
                    is Config.Gallery -> emptyMap()
                    is Config.Photo -> mapOf("id" to config.id.toString())
                }
            },
            onBeforeNavigate = { false },
        )

    private fun child(config: Config): Child =
        when (config) {
            is Config.Gallery ->
                GalleryChild(
                    DefaultGalleryComponent(
                        images = images,
                        onImageSelected = { nav.pushNew(Config.Photo(id = it)) },
                        onFinished = onFinished,
                    )
                )

            is Config.Photo ->
                PhotoChild(
                    DefaultPhotoComponent(
                        image = images.first { it.id == config.id },
                        onFinished = nav::pop,
                    )
                )
        }

    override fun onBack() {
        nav.pop()
    }

    private fun getInitialStack(deepLinkUrl: Url?): List<Config> {
        if (deepLinkUrl == null) {
            return listOf(Config.Gallery)
        }

        val (path) = deepLinkUrl.consumePathSegment()

        return when (path) {
            pathSegmentOf<Config.Photo>() ->
                listOfNotNull(
                    Config.Gallery,
                    deepLinkUrl.parameters["id"]?.toIntOrNull()?.let { Config.Photo(id = it) },
                )

            else -> listOf(Config.Gallery)
        }
    }

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Gallery : Config

        @Serializable
        data class Photo(val id: Int) : Config
    }
}
