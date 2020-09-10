//
//  ContentView.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/13/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Todo

struct ContentView: View {
    @State
    private var componentHolder =
        ComponentHolder {
            TodoRootBuilderKt.TodoRoot(
                componentContext: $0,
                databaseDriverFactory: DefaultDatabaseDriverFactory()
            )
    }
    
    var body: some View {
        RootView(componentHolder.component.model as! TodoRootModel)
            .onAppear { LifecycleRegistryExtKt.resume(self.componentHolder.lifecycle) }
            .onDisappear { LifecycleRegistryExtKt.stop(self.componentHolder.lifecycle) }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

class ComponentHolder<T : Component> {
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
        lifecycle.onPause()
    }
}
