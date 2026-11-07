import SwiftUI
import Shared

@main
struct iOSApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self)
    var appDelegate: AppDelegate

    var body: some Scene {
        WindowGroup {
            RootView(root: appDelegate.root, navEventDispatcher: appDelegate.componentContext.navigationEventDispatcher)
                .ignoresSafeArea(.all)
        }
    }
}

class AppDelegate: NSObject, UIApplicationDelegate {
    var componentContext: HostComponentContext = HostComponentContext()
    lazy var root: RootComponent = DefaultRootComponent(
        componentContext: HostComponentContextUtilsKt.attachToApplication(componentContext),
        deepLinkUrl: nil
    )

    func application(_ application: UIApplication, shouldSaveSecureApplicationState coder: NSCoder) -> Bool {
        StateKeeperUtilsKt.save(coder: coder, state: componentContext.stateKeeper.save())
        return true
    }
    
    func application(_ application: UIApplication, shouldRestoreSecureApplicationState coder: NSCoder) -> Bool {
        componentContext = HostComponentContext(savedState: StateKeeperUtilsKt.restore(coder: coder))
        return true
    }
}
