# InstanceKeeper

## Retaining instances over configurations change

Decompose provides the `InstanceKeeper` API, similar to AndroidX ViewModels:

```kotlin
class Child1(componentContext: ComponentContext) : ComponentContext by componentContext {
    private val viewModel = instanceKeeper.getOrCreate(::ViewModel)

    private class ViewModel : InstanceKeeper.Instance {
        override fun onDestroy() {
            // Clean-up
        }
    }
}
```