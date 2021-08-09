package com.arkivanov.decompose

interface Navigator<C : Any> {

    fun navigate(transformer: (stack: List<C>) -> List<C>)
}
