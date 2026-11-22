package com.arkivanov.decompose

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.CreationExtras
import androidx.lifecycle.viewmodel.CreationExtras.Key
import com.arkivanov.decompose.viewmodel.ViewModelStoreHost
import com.arkivanov.decompose.viewmodel.viewModel
import kotlin.test.Test
import kotlin.test.assertEquals

@Suppress("TestFunctionName")
class HostComponentContextViewModelStoreTest {

    @Test
    fun GIVEN_created_with_CreationExtras_WHEN_ViewModel_created_THEN_extra_provided() {
        // given
        val ctx =
            HostComponentContext(
                viewModelStoreHost = ViewModelStoreHost(
                    extras = { CreationExtras { set(StringKey, "extra") } },
                ),
            )

        // when
        val vm = ctx.viewModel { TestViewModel(value = get(StringKey)) }

        // then
        assertEquals("extra", vm.value)
    }

    @Test
    fun GIVEN_created_with_CreationExtras_and_child_context_created_WHEN_ViewModel_created_THEN_extra_provided() {
        // given
        val ctx =
            HostComponentContext(
                viewModelStoreHost = ViewModelStoreHost(
                    extras = { CreationExtras { set(StringKey, "extra") } },
                ),
            )

        val childCtx = ctx.childContext(key = "child")

        // when
        val vm = childCtx.viewModel { TestViewModel(value = get(StringKey)) }

        // then
        assertEquals("extra", vm.value)
    }

    private companion object {
        private val StringKey: Key<String> = CreationExtras.Companion.Key()
    }

    private class TestViewModel(val value: String?) : ViewModel()
}
