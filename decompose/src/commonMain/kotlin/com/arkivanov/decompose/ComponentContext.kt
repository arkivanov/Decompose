package com.arkivanov.decompose

import com.arkivanov.essenty.backpressed.BackPressedHandlerOwner
import com.arkivanov.essenty.instancekeeper.InstanceKeeperOwner
import com.arkivanov.essenty.lifecycle.LifecycleOwner
import com.arkivanov.essenty.statekeeper.StateKeeperOwner

interface ComponentContext :
    LifecycleOwner,
    StateKeeperOwner,
    InstanceKeeperOwner,
    BackPressedHandlerOwner
