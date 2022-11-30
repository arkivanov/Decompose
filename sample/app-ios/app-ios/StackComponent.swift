import Foundation

struct StackComponent<C>: Hashable {
    let component: C

    init(_ component: C) {
        self.component = component
    }

    static func == (lhs: StackComponent<C>, rhs: StackComponent<C>) -> Bool {
        (lhs.component as! NSObject).isEqual(rhs.component)
    }

    func hash(into hasher: inout Hasher) {
        hasher.combine((component as! NSObject).hash)
    }
}
