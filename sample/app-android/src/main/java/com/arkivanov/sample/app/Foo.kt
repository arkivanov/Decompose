package com.arkivanov.sample.app

import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.compose.LocalLifecycleOwner
import com.arkivanov.decompose.extensions.compose.stack.Children
import com.arkivanov.decompose.jetpackcomponentcontext.JetpackComponentContext
import com.arkivanov.decompose.router.stack.ChildStack
import com.arkivanov.decompose.router.stack.StackNavigation
import com.arkivanov.decompose.router.stack.childStack
import com.arkivanov.decompose.value.Value
import kotlinx.serialization.Serializable

interface HomeComponent

class DefaultHomeComponent(ctx: JetpackComponentContext) : HomeComponent

@Composable
fun HomeContent(component: HomeComponent) {
}

interface RootComponent {
    val stack: Value<ChildStack<*, Child>>

    sealed class Child(lifecycleOwner: LifecycleOwner) : LifecycleOwner by lifecycleOwner {
        class HomeChild(val component: HomeComponent, lifecycleOwner: LifecycleOwner) : Child(lifecycleOwner)
    }
}

class DefaultRootComponent(
    componentContext: JetpackComponentContext,
) : RootComponent, JetpackComponentContext by componentContext {

    private val nav = StackNavigation<Config>()

    override val stack: Value<ChildStack<*, RootComponent.Child>> =
        childStack(
            source = nav,
            serializer = Config.serializer(),
            initialConfiguration = Config.Home,
        ) { cfg, ctx ->
            when (cfg) {
                is Config.Home -> RootComponent.Child.HomeChild(DefaultHomeComponent(ctx), ctx)
            }
        }

    @Serializable
    private sealed interface Config {
        @Serializable
        data object Home : Config
    }
}

@Composable
fun RootContent(component: RootComponent) {
    Children(stack = component.stack) {
        CompositionLocalProvider(LocalLifecycleOwner provides it.instance) {
            when (val child = it.instance) {
                is RootComponent.Child.HomeChild -> HomeContent(child.component)
            }
        }
    }
}
