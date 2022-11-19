//
//  app_iosApp.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

@main
struct app_iosApp: App {
    @StateObject
    private var rootHolder = RootHolder()
        
        var body: some Scene {
            WindowGroup {
                RootView(rootHolder.root)
                    .onAppear { LifecycleRegistryExtKt.resume(self.rootHolder.lifecycle) }
                    .onDisappear { LifecycleRegistryExtKt.stop(self.rootHolder.lifecycle) }
            }
        }
}

private class RootHolder : ObservableObject {
    let lifecycle: LifecycleRegistry
    let root: RootComponent
    
    init() {
        lifecycle = LifecycleRegistryKt.LifecycleRegistry()
        
        root = DefaultRootComponent(
            componentContext: DefaultComponentContext(lifecycle: lifecycle),
            featureInstaller: DefaultFeatureInstaller.shared,
            deepLink: DefaultRootComponentDeepLinkNone.shared,
            webHistoryController: nil
        )
        
        lifecycle.onCreate()
    }
    
    deinit {
        lifecycle.onDestroy()
    }
}
