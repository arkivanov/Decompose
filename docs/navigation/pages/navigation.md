# Navigation with Child Pages

## The PagesNavigator

All navigation in `Child Pages` is performed using the [`PagesNavigator`](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/pages/PagesNavigator.kt) interface, which is extended by the `PagesNavigation` interface.

`PagesNavigator` contains the `navigate` method with the following arguments:

- `transformer` - converts the current navigation state (`Pages`) into a new one.
- `onComplete` - called when navigation is finished.

There is also `navigate` extension function without the `onComplete` callback, for convenience.

```kotlin title="Creating the navigation"
val navigation = PagesNavigation<Configuration>()
```

### The navigation process

During the navigation process, the Child Pages navigation model compares the new [Pages] state with the previous one. The navigation model ensures that all removed components are destroyed, and updates lifecycles of the existing components to match the new state.

The navigation is usually performed synchronously, which means that by the time the `navigate` method returns, the navigation is finished and all component lifecycles are moved into required states. However, the navigation is performed asynchronously in case of recursive invocations - e.g. `selectNext` is called from `onResume` lifecycle callback of a component being shown. All recursive invocations are queued and performed one by one once the current navigation is finished.

## PagesNavigator extension functions

There are `PagesNavigator` [extension functions](https://github.com/arkivanov/Decompose/blob/master/decompose/src/commonMain/kotlin/com/arkivanov/decompose/router/pages/PagesNavigatorExt.kt) to simplify the navigation. Some of which were already used in the [Child Pages overview example](../overview#example).

### selectNext

Selects the next component. If the currently selected component is the last one, then depending on the [circular] parameter, either nothing happens or the first component is selected.

```title="Before"
1: [A, B*, C]
2: [A, B, C*]
3: [A, B, C*]
```

```
1: navigation.selectNext()
2: navigation.selectNext(circular = false)
3: navigation.selectNext(circular = true)
```

```title="After"
1: [A, B, C*]
2: [A, B, C*]
3: [A*, B, C]
```

### selectPrev

elects the previous component. If the currently selected component is the first one, then depending on the [circular] parameter, either nothing happens or the last component is selected.

```title="Before"
1: [A, B*, C]
2: [A*, B, C]
3: [A*, B, C]
```

```
1: navigation.selectPrev()
2: navigation.selectPrev(circular = false)
3: navigation.selectPrev(circular = true)
```

```title="After"
1: [A*, B, C]
2: [A*, B, C]
3: [A, B, C*]
```

### selectFirst

Selects the first component.

```title="Before"
[A, B*, C]
```

```
navigation.selectFirst()
```

```title="After"
[A*, B, C]
```

### selectLast

Selects the last component.

```title="Before"
[A, B*, C]
```

```
navigation.selectLast()
```

```title="After"
[A, B, C*]
```

### select(index)

Selects the component at the specified [index]. Throws [IllegalArgumentException] if the index is out of bounds.

```title="Before"
[A*, B, C]
```

```
navigation.select(2)
```

```title="After"
[A, B, C*]
```

### clear

Clears the current [Pages] state, i.e. removes all components.

```title="Before"
[A, B*, C]
```

```
navigation.clear()
```

```title="After"
[]
```
