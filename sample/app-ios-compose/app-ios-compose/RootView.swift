import SwiftUI
import Shared

struct RootView: UIViewControllerRepresentable {
    let root: RootComponent
    let navEventDispatcher: NavigationEventDispatcher

    func makeUIViewController(context: Context) -> UIViewController {
        let controller = RootViewControllerKt.rootViewController(root: root, navigationEventDispatcher: navEventDispatcher)
        controller.overrideUserInterfaceStyle = .light
        return controller
    }

    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {
    }
}
