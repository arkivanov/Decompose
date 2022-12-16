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
    @UIApplicationDelegateAdaptor(AppDelegate.self)
    var appDelegate
    
    private var rootHolder: RootHolder { appDelegate.getRootHolder() }
    
    var body: some Scene {
        WindowGroup {
            RootView(rootHolder.root)
                .onAppear { LifecycleRegistryExtKt.resume(self.rootHolder.lifecycle) }
                .onDisappear { LifecycleRegistryExtKt.stop(self.rootHolder.lifecycle) }
        }
    }
}

class AppDelegate: NSObject, UIApplicationDelegate {
    private var rootHolder: RootHolder?
    
    func application(_ application: UIApplication, shouldSaveSecureApplicationState coder: NSCoder) -> Bool {
        let savedState = rootHolder!.stateKeeper.save()
        CodingKt.encodeParcelable(coder, value: savedState, key: "savedState")
        return true
    }
    
    func application(_ application: UIApplication, shouldRestoreSecureApplicationState coder: NSCoder) -> Bool {
        do {
            let savedState = try CodingKt.decodeParcelable(coder, key: "savedState") as! ParcelableParcelableContainer
            rootHolder = RootHolder(savedState: savedState)
            return true
        } catch {
            return false
        }
    }
    
    fileprivate func getRootHolder() -> RootHolder {
        if (rootHolder == nil) {
            rootHolder = RootHolder(savedState: nil)
        }
        
        return rootHolder!
    }
}

private class RootHolder : ObservableObject {
    let lifecycle: LifecycleRegistry
    let stateKeeper: StateKeeperDispatcher
    let root: RootComponent
    
    init(savedState: ParcelableParcelableContainer?) {
        lifecycle = LifecycleRegistryKt.LifecycleRegistry()
        stateKeeper = StateKeeperDispatcherKt.StateKeeperDispatcher(savedState: savedState)
        
        root = DefaultRootComponent(
            componentContext: DefaultComponentContext(
                lifecycle: lifecycle,
                stateKeeper: stateKeeper,
                instanceKeeper: nil,
                backHandler: nil
            ),
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
