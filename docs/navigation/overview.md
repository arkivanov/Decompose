# Navigation overview

Decompose provides the ability to create [permanent child components](/Decompose/navigation/stack/overview/) using the `childStack` extension function. But if you need to dynamically switch child components, then navigation comes in handy.

Currently, Decompose provides two ways to navigate:

- [Child Stack](/Decompose/navigation/stack/overview/) - prefer this way if you need to organize child components in a stack and navigate between them.
- [Child Overlay](/Decompose/navigation/overlay/overview/) - prefer this way if you need to activate-dismiss a child component.

## Component configurations and child factories

The term `Configuration` is widely used in Decompose navigation. A configuration is a persistent class that represents a child component and contains all its arguments (not dependencies). Decompose automatically persists child configurations using [StateKeeper](/Decompose/component/state-preservation/), so child components are automatically recreated on events like Android configuration changes, process death, etc.

Usually, you initialize a navigation by supplying a child factory function to Decompose. The function accepts a child configuration and `ComponentContext` and returns a new instance of the corresponding child component - `(Config, ComponentContext) -> Child`. When you need to navigate, you call a navigation method and pass a configuration there. Decompose automatically creates and manages a [ComponentContext](/Decompose/component/overview/#componentcontext) for every child component, and calls the provided factory function when a new instance of a child component is required. This is where you should instantiate child components and supply dependencies, the configuration only provides persistent arguments and is used to distinguish which component to create. 

### Configuration requirements

Configurations must meet the following requirements:

1. Be immutable
2. [Correctly](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--) implement `equals()` and `hashCode()` methods
3. Implement `Parcelable` interface

Different kinds of navigation may have additional requirements for configurations. It's recommended to define configurations as `data class`, and use only `val` properties and immutable data structures.

### Configurations are Parcelable

`Configurations` can be persisted via Android's [saved state](https://developer.android.com/guide/components/activities/activity-lifecycle#save-simple,-lightweight-ui-state-using-onsaveinstancestate), thus allowing the navigation state to be restored after configuration changes or process death.

Decompose uses [Essenty](https://github.com/arkivanov/Essenty) library, which provides both `Parcelable` interface and `@Parcelize` annotation in common code using expect/actual, which works well with Kotlin Multiplatform. Please familiarise yourself with Essenty library.

!!!warning
    On Android the amount of data that can be preserved is [limited](https://developer.android.com/guide/components/activities/parcelables-and-bundles). Please mind the size of configurations.
