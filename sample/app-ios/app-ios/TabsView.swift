import SwiftUI
import Shared

struct TabsView: View {
    private let component: TabsComponent
    
    @StateValue
    private var stack: ChildStack<AnyObject, TabsComponentChild>
    
    private var activeChild: TabsComponentChild { stack.active.instance }
    
    init(_ component: TabsComponent) {
        self.component = component
        _stack = StateValue(component.stack)
    }

    var body: some View {
        VStack {
            ChildView(child: activeChild)
                .frame(maxHeight: .infinity)

            HStack(alignment: .bottom, spacing: 16) {
                Button(action: component.onMenuTabClicked) {
                    Label("Menu", systemImage: "menucard")
                        .labelStyle(VerticalLabelStyle())
                        .opacity(activeChild is MenuChild ? 1 : 0.5)
                }
                
                Button(action: component.onCountersTabClicked) {
                    Label("Counters", systemImage: "123.rectangle")
                        .labelStyle(VerticalLabelStyle())
                        .opacity(activeChild is CountersChild ? 1 : 0.5)
                }

                Button(action: component.onMultiPaneTabClicked) {
                    Label("Multi-Pane", systemImage: "list.bullet")
                            .labelStyle(VerticalLabelStyle())
                            .opacity(activeChild is MultiPaneChild ? 1 : 0.5)
                }
            }
        }
    }
}

private typealias MenuChild = TabsComponentChild.MenuChild
private typealias CountersChild = TabsComponentChild.CountersChild
private typealias MultiPaneChild = TabsComponentChild.MultiPaneChild

private struct ChildView: View {
    let child: TabsComponentChild

    var body: some View {
        switch child {
        case let child as MenuChild: MenuView(child.component)
        case let child as CountersChild: CountersView(child.component)
        case let child as MultiPaneChild: MultiPaneView(child.component)
        default: EmptyView()
        }
    }
}

private struct VerticalLabelStyle: LabelStyle {
    func makeBody(configuration: Configuration) -> some View {
        VStack(alignment: .center, spacing: 8) {
            configuration.icon
            configuration.title
        }
    }
}

struct TabsView_Previews: PreviewProvider {
    static var previews: some View {
        TabsView(PreviewTabsComponent())
    }
}
