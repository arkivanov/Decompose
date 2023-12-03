import SwiftUI
import Shared

@main
struct iOSApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self)
    var appDelegate: AppDelegate

    var body: some Scene {
        WindowGroup {
            RootView(root: appDelegate.root, backDispatcher: appDelegate.backDispatcher)
                .ignoresSafeArea(.all)
        }
    }
}

class AppDelegate: NSObject, UIApplicationDelegate {
    private var stateKeeper = StateKeeperDispatcherKt.StateKeeperDispatcher(savedState: nil)
    var backDispatcher: BackDispatcher = BackDispatcherKt.BackDispatcher()

    lazy var root: RootComponent = DefaultRootComponent(
        componentContext: DefaultComponentContext(
            lifecycle: ApplicationLifecycle(),
            stateKeeper: stateKeeper,
            instanceKeeper: nil,
            backHandler: backDispatcher
        ),
        featureInstaller: DefaultFeatureInstaller.shared,
        deepLink: DefaultRootComponentDeepLinkNone.shared,
        webHistoryController: nil
    )

    func application(_ application: UIApplication, shouldSaveSecureApplicationState coder: NSCoder) -> Bool {
        CodingKt.encodeParcelable(coder, value: stateKeeper.save(), key: "savedState")
        return true
    }
    
    func application(_ application: UIApplication, shouldRestoreSecureApplicationState coder: NSCoder) -> Bool {
        do {
            let savedState = try CodingKt.decodeParcelable(coder, key: "savedState") as! ParcelableParcelableContainer
            stateKeeper = StateKeeperDispatcherKt.StateKeeperDispatcher(savedState: savedState)
            return true
        } catch {
            return false
        }
    }
}
