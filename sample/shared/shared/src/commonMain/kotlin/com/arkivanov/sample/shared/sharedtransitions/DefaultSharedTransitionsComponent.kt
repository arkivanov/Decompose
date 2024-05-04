package com.arkivanov.sample.shared.sharedtransitions

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.pop
import com.arkivanov.decompose.router.stack.pushNew
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsComponent.Child
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsComponent.Child.GalleryChild
import com.arkivanov.sample.shared.sharedtransitions.SharedTransitionsComponent.Child.PhotoChild
import com.arkivanov.sample.shared.sharedtransitions.gallery.DefaultGalleryComponent
import com.arkivanov.sample.shared.sharedtransitions.photo.DefaultPhotoComponent
import com.arkivanov.sample.shared.sharedtransitions.photo.Image
import kotlinx.serialization.Serializable

class DefaultSharedTransitionsComponent(
    componentContext: ComponentContext,
    private val onFinished: () -> Unit,
) : SharedTransitionsComponent, ComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    override val stack: Value<ChildStack<*, Child>> =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialConfiguration = Config.Gallery,
            handleBackButton = true,
            childFactory = { config, _ -> child(config) },
        )

    private fun child(config: Config): Child =
        when (config) {
            is Config.Gallery ->
                GalleryChild(
                    DefaultGalleryComponent(
                        onImageSelected = { nav.pushNew(Config.Photo(it)) },
                        onFinished = onFinished,
                    )
                )

            is Config.Photo ->
                PhotoChild(
                    DefaultPhotoComponent(
                        image = config.image,
                        onFinished = nav::pop,
                    )
                )
        }

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Gallery : Config

        @Serializable
        data class Photo(val image: Image) : Config
    }
}
