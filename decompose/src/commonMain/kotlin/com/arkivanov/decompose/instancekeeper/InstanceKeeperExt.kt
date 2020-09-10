package com.arkivanov.decompose.instancekeeper

inline fun <reified T : InstanceKeeper.Instance> InstanceKeeper.getOrCreate(key: Any, factory: () -> T): T {
    var instance: T? = get(key) as T?
    if (instance == null) {
        instance = factory()
        put(key, instance)
    }

    return instance
}

inline fun <reified T : InstanceKeeper.Instance> InstanceKeeper.getOrCreate(factory: () -> T): T = getOrCreate(T::class, factory)
