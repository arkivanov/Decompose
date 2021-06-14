//
//  ContentView.swift
//  iosApp
//
//  Created by Nikola Milovic on 12/06/2021.
//

import SwiftUI
import MasterDetail

struct ContentView: View {
    @State
    private var componentHolder = ComponentHolder(factory: MasterDetail.RootComponent.init)
    
    var body: some View {
        RootView(componentHolder.component)
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
