package com.arkivanov.sample.shared

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.systemBars
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.extensions.compose.lazyitems.ChildLazyItems
import com.arkivanov.decompose.router.lazyitems.ChildLazyItems
import com.arkivanov.decompose.router.lazyitems.ChildLazyItemsNavigation
import com.arkivanov.decompose.router.lazyitems.LazyItems
import com.arkivanov.decompose.router.lazyitems.childLazyItems
import com.arkivanov.essenty.lifecycle.doOnCreate
import com.arkivanov.essenty.lifecycle.doOnDestroy
import com.arkivanov.essenty.lifecycle.doOnResume
import com.arkivanov.essenty.lifecycle.doOnStop
import kotlinx.serialization.builtins.serializer

class ListComponent(
    componentContext: ComponentContext,
) : ComponentContext by componentContext {

    private val nav = ChildLazyItemsNavigation<Int>()

    val list: ChildLazyItems<Int, ItemComponent> =
        childLazyItems(
            source = nav,
            serializer = Int.serializer(),
            initialState = { LazyItems(items = List(100) { it }) },
        ) { config, ctx ->
            ItemComponent(
                componentContext = ctx,
                item = config,
                onClick = {
                    nav.navigate(
                        transformer = { it.copy(items = it.items.filter { item -> item != config }) },
                        onComplete = { _, _ -> },
                    )
                },
            )
        }

    fun add() {
        nav.navigate(
            transformer = { it.copy(items = it.items + (list.state.value.items.lastOrNull()?.plus(1) ?: 0)) },
            onComplete = { _, _ -> },
        )
    }
}

class ItemComponent(
    componentContext: ComponentContext,
    val item: Int,
    val onClick: () -> Unit,
) : ComponentContext by componentContext {

    init {
        doOnCreate { println("[MyTest] Item: $item, onCreate") }
        doOnResume { println("[MyTest] Item: $item, onResume") }
        doOnStop { println("[MyTest] Item: $item, onStop") }
        doOnDestroy { println("[MyTest] Item: $item, onDestroy") }
    }
}

@Composable
fun ListContent(component: ListComponent, modifier: Modifier = Modifier) {
    Column(modifier = modifier.fillMaxSize().padding(horizontal = 16.dp).windowInsetsPadding(WindowInsets.systemBars)) {
        Row(modifier = Modifier.fillMaxWidth()) {
            Button(onClick = component::add) {
                Text("Add")
            }
        }

        ChildLazyItems(
            list = component.list,
            modifier = Modifier.fillMaxSize(),
            key = { it },
        ) { child ->
            ItemContent(
                component = child.instance,
                modifier = Modifier.fillMaxSize(),
            )
        }
    }
}

@Composable
fun ItemContent(
    component: ItemComponent,
    modifier: Modifier = Modifier,
) {
    Box(modifier = modifier) {
        Text(
            text = "Item: ${component.item}",
            modifier = Modifier.clickable(onClick = component.onClick).padding(horizontal = 16.dp, vertical = 64.dp)
        )
    }
}
