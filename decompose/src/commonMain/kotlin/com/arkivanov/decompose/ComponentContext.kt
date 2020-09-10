package com.arkivanov.decompose

import com.arkivanov.decompose.backpressed.BackPressedDispatcherOwner
import com.arkivanov.decompose.instancekeeper.InstanceKeeperOwner
import com.arkivanov.decompose.lifecycle.LifecycleOwner
import com.arkivanov.decompose.statekeeper.StateKeeperOwner

interface ComponentContext :
    RouterFactory,
    LifecycleOwner,
    StateKeeperOwner,
    InstanceKeeperOwner,
    BackPressedDispatcherOwner
