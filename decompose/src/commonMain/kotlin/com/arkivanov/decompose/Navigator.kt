package com.arkivanov.decompose

interface Navigator<C> {

    fun navigate(transformer: (stack: List<C>) -> List<C>)
}
