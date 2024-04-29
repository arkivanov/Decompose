# Scoping jobs and subscriptions

Due to the fact that components are lifecycle-aware, it is very easy to manage coroutine scopes and reactive subscriptions.

## Creating a CoroutineScope in a component

There are extensions for `CoroutineScope` and `Lifecycle` [provided](https://github.com/arkivanov/Essenty?tab=readme-ov-file#coroutines-extensions) by Essenty.

Add the following dependency to your build.gradle file.

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.essenty:lifecycle-coroutines:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.essenty:lifecycle-coroutines:<version>")
    ```

Use the Essenty extensions to create the `CoroutineScope`.

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.lifecycle.coroutines.coroutineScope
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlin.coroutines.CoroutineContext

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
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext

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

There are extensions for `DisposableScope` and `Lifecycle` [provided](https://github.com/arkivanov/Essenty?tab=readme-ov-file#reaktive-extensions) by Essenty.

Add the following dependency to your build.gradle file.

=== "Groovy"

    ``` groovy
    implementation "com.arkivanov.essenty:lifecycle-reaktive:<version>"
    ```

=== "Kotlin"

    ``` kotlin
    implementation("com.arkivanov.essenty:lifecycle-reaktive:<version>")
    ```

Use the Essenty extensions to create the `DisposableScope`.

```kotlin
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.sample.shared.multipane.utils.disposableScope
import com.badoo.reaktive.disposable.scope.DisposableScope
import com.badoo.reaktive.scheduler.ioScheduler
import com.badoo.reaktive.scheduler.mainScheduler
import com.badoo.reaktive.single.observeOn
import com.badoo.reaktive.single.singleFromFunction
import com.badoo.reaktive.single.subscribeOn

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
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.essenty.instancekeeper.InstanceKeeper
import com.arkivanov.essenty.instancekeeper.getOrCreate
import com.badoo.reaktive.completable.completableFromFunction
import com.badoo.reaktive.disposable.scope.DisposableScope

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
