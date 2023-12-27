# Scoping jobs and subscriptions

Due to the fact that components are lifecycle-aware, it is very easy to manage coroutine scopes and reactive subscriptions.

## Creating a CoroutineScope in a component

!!! note "Extensions for CoroutineScope and Lifecycle"

    === "Before Essenty 2.0.0-alpha01"
    
        ```kotlin
        fun CoroutineScope(context: CoroutineContext, lifecycle: Lifecycle): CoroutineScope {
            val scope = CoroutineScope(context)
            lifecycle.doOnDestroy(scope::cancel)
            return scope
        }
        
        fun LifecycleOwner.coroutineScope(context: CoroutineContext): CoroutineScope =
            CoroutineScope(context, lifecycle)
        ```
    
    === "Since Essenty 2.0.0-alpha01"
    
        Since Essenty version `2.0.0-alpha01` extensions for `CoroutineScope` and `Lifecycle` are [provided](https://github.com/arkivanov/Essenty?tab=readme-ov-file#coroutines-extensions) by Essenty.

```kotlin
class SomeComponent(
    componentContext: ComponentContext,
    mainContext: CoroutineContext,
    private val ioContext: CoroutineContext,
) : ComponentContext by componentContext {

    // The scope is automatically cancelled when the component is destroyed
    private val scope = coroutineScope(mainContext + SupervisorJob())

    fun foo() {
        scope.launch {
            val result =
                withContext(ioContext) {
                    "Result" // Result from background thread
                }

            println(result) // Handle the result on main thread
        }
    }
}
```

## Creating a CoroutineScope that survives Android configuration changes

```kotlin
internal class SomeRetainedInstance(mainContext: CoroutineContext) : InstanceKeeper.Instance {
    // The scope survives Android configuration changes
    private val scope = CoroutineScope(mainContext + SupervisorJob())

    fun foo() {
        scope.launch {
            // Do the job
        }
    }
    
    override fun onDestroy() {
        scope.cancel() // Cancel the scope when the instance is destroyed
    }
}

class SomeComponent(
    componentContext: ComponentContext,
    mainContext: CoroutineContext,
) : ComponentContext by componentContext {

    private val someRetainedInstance = instanceKeeper.getOrCreate { SomeRetainedInstance(mainContext) }
}
```

## Creating a Reaktive DisposableScope in a component

!!! note "Extensions for DisposableScope and Lifecycle"

    === "Before Essenty 2.0.0-alpha01"
    
        ```kotlin
        fun DisposableScope(lifecycle: Lifecycle): DisposableScope {
            val scope = DisposableScope()
            lifecycle.doOnDestroy(scope::dispose)
            return scope
        }
        
        fun LifecycleOwner.disposableScope(): DisposableScope =
            DisposableScope(lifecycle)
        ```
    
    === "Since Essenty 2.0.0-alpha01"
    
        Since Essenty version `2.0.0-alpha01` extensions for `DisposableScope` and `Lifecycle` are [provided](https://github.com/arkivanov/Essenty?tab=readme-ov-file#reaktive-extensions) by Essenty.

```kotlin
class SomeComponent(
    componentContext: ComponentContext,
) : ComponentContext by componentContext,
    // The scope is automatically disposed when the component is destroyed
    DisposableScope by componentContext.disposableScope() {

    fun foo() {
        singleFromFunction {
            "Result" // Result from background thread
        }
            .subscribeOn(ioScheduler)
            .observeOn(mainScheduler)
            .subscribeScoped { // Subscribe using the DisposableScope
                println(it) // Handle the result on main thread
            }
    }
}
```

## Creating a Reaktive DisposableScope that survives Android configuration changes

```kotlin
internal class SomeRetainedInstance : InstanceKeeper.Instance,
    // The scope survives Android configuration changes
    DisposableScope by DisposableScope() {

    fun foo() {
        completableFromFunction {
            // Do the job
        }.subscribeScoped()
    }

    override fun onDestroy() {
        dispose() // Dispose the scope when the instance is destroyed
    }
}

class SomeComponent(
    componentContext: ComponentContext,
) : ComponentContext by componentContext {

    private val someRetainedInstance = instanceKeeper.getOrCreate { SomeRetainedInstance() }
}
```
