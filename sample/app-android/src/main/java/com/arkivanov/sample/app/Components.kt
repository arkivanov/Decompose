package com.arkivanov.sample.app

import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.router.stack.push
import com.arkivanov.decompose.value.Value
import com.arkivanov.sample.app.RootComponent.Child
import kotlinx.serialization.Serializable

@Serializable
data class Img(
    val id: Int,
    val url: String,
)

interface GalleryComponent {

    val images: List<Img>

    fun onImageClicked(image: Img)
}

class DefaultGalleryComponent(
    componentContext: ComponentContext,
    private val onImageSelected: (Img) -> Unit,
) : GalleryComponent, ComponentContext by componentContext {
    override val images: List<Img> =
        List(100) {
            listOf(
                "https://cdn2.thecatapi.com/images/xBR2jSIG7.jpg",
                "https://cdn2.thecatapi.com/images/8jb.jpg",
                "https://cdn2.thecatapi.com/images/MTcxNjYxNA.jpg",
                "https://cdn2.thecatapi.com/images/bag.jpg",
                "https://cdn2.thecatapi.com/images/BjIppqbNI.jpg",
            )
        }.flatten().mapIndexed { index, url -> Img(id = index, url = url) }

    override fun onImageClicked(image: Img) {
        onImageSelected(image)
    }
}

interface ImageComponent {

    val image: Img
}

class DefaultImageComponent(
    componentContext: ComponentContext,
    override val image: Img,
) : ImageComponent, ComponentContext by componentContext

interface RootComponent {

    val stack: Value<ChildStack<*, Child>>

    sealed class Child {
        class Gallery(val component: GalleryComponent) : Child()
        class Image(val component: ImageComponent) : Child()
    }
}

class DefaultRootComponent(
    componentContext: ComponentContext,
) : RootComponent, ComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    override val stack: Value<ChildStack<*, Child>> =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialConfiguration = Config.Gallery,
            handleBackButton = true,
        ) { config, ctx ->
            when (config) {
                is Config.Gallery -> Child.Gallery(galleryComponent(ctx))
                is Config.Image -> Child.Image(imageComponent(config, ctx))
            }
        }

    private fun galleryComponent(ctx: ComponentContext): GalleryComponent =
        DefaultGalleryComponent(
            componentContext = ctx,
            onImageSelected = { nav.push(Config.Image(image = it)) },
        )

    private fun imageComponent(config: Config.Image, ctx: ComponentContext): ImageComponent =
        DefaultImageComponent(componentContext = ctx, image = config.image)

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Gallery : Config

        @Serializable
        data class Image(val image: Img) : Config
    }
}
