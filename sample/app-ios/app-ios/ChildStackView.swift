import SwiftUI
import UIKit

struct ChildStackView<Component: AnyObject, Content: View>: UIViewControllerRepresentable {
    var components: [Component]
    var backAction: () -> Void
    var renderBody: (Component) -> Content

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    func makeUIViewController(context: Context) -> UINavigationController {
        let navigationController = UINavigationController(
                rootViewController: context.coordinator.viewControllers.first!)

        return navigationController
    }

    func updateUIViewController(_ navigationController: UINavigationController, context: Context) {
        context.coordinator.syncChanges(self)
        navigationController.setViewControllers(context.coordinator.viewControllers, animated: true)
    }

    private func createViewController(_ component: Component, _ coordinator: Coordinator? = nil) -> NavigationItemHostingController<Content> {
        let controller = NavigationItemHostingController(rootView: renderBody(component))
        controller.coordinator = coordinator
        return controller
    }

    class Coordinator: NSObject {
        var parent: ChildStackView<Component, Content>
        var viewControllers: [NavigationItemHostingController<Content>]
        var preservedComponents: [Component]

        init(_ parent: ChildStackView<Component, Content>) {
            self.parent = parent
            preservedComponents = parent.components
            viewControllers = parent.components.map { parent.createViewController($0) }
        }

        func syncChanges(_ parent: ChildStackView<Component, Content>) {
            self.parent = parent
            let count = max(preservedComponents.count, parent.components.count)

            for i in 0..<count {
                if (i >= parent.components.count) {
                    viewControllers.removeLast()
                } else if (i >= preservedComponents.count) {
                    viewControllers.append(parent.createViewController(parent.components[i], self))
                } else if (parent.components[i] !== preservedComponents[i]) {
                    viewControllers[i] = parent.createViewController(parent.components[i], self)
                }
            }

            preservedComponents = parent.components
        }
    }

    class NavigationItemHostingController<Content: View>: UIHostingController<Content> {
        fileprivate(set) weak var coordinator: Coordinator?

        override func viewDidDisappear(_ animated: Bool) {
            super.viewDidDisappear(animated)

            guard let coordinator = coordinator else { return }

            if isMovingFromParent && coordinator.viewControllers.last === self {
                coordinator.parent.backAction()
            }
        }
    }
}
