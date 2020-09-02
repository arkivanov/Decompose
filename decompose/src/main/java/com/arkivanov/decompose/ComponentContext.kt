package com.arkivanov.decompose

import androidx.activity.OnBackPressedDispatcherOwner
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ViewModelStoreOwner

interface ComponentContext : RouterFactory, SavedStateKeeperOwner, LifecycleOwner, OnBackPressedDispatcherOwner, ViewModelStoreOwner
