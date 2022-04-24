//
//  ContentView.swift
//  Counter WatchKit Extension
//
//  Created by Andrew Steinmetz on 7/20/21.
//

import SwiftUI
import Counter

struct ContentView: View {
    
    @State
    private var componentHolder = ComponentHolder { context in
        CounterRootComponent(
            componentContext: context,
            deepLink: CounterRootComponentDeepLinkNone.shared,
            webHistoryController: nil
        )
    }
    
    var body: some View {
        CounterRootView(componentHolder.component)
            .onAppear { LifecycleRegistryExtKt.resume(self.componentHolder.lifecycle) }
            .onDisappear { LifecycleRegistryExtKt.stop(self.componentHolder.lifecycle) }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

class ComponentHolder<T> {
    let lifecycle: LifecycleRegistry
    let component: T
    
    init(factory: (ComponentContext) -> T) {
        let lifecycle = LifecycleRegistryKt.LifecycleRegistry()
        let component = factory(DefaultComponentContext(lifecycle: lifecycle))
        self.lifecycle = lifecycle
        self.component = component
        
        lifecycle.onCreate()
    }
    
    deinit {
        lifecycle.onDestroy()
    }
}

