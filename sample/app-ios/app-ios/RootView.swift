//
//  RootView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct RootView: View {
    private let root: RootComponent
    
    @StateValue
    private var childStack: ChildStack<AnyObject, RootComponentChild>
    
    private var activeChild: RootComponentChild { childStack.active.instance }
    
    init(_ root: RootComponent) {
        self.root = root
        _childStack = StateValue(root.childStack)
    }
    
    var body: some View {
        VStack {
            ChildView(child: activeChild)
                .frame(maxHeight: .infinity)
            
            HStack(alignment: .bottom, spacing: 16) {
                Button(action: root.onCountersTabClicked) {
                    Label("Counters", systemImage: "123.rectangle")
                        .labelStyle(VerticalLabelStyle())
                        .opacity(activeChild is RootComponentChild.CountersChild ? 1 : 0.5)
                }
                
                Button(action: root.onMultiPaneTabClicked) {
                    Label("Multi-Pane", systemImage: "list.bullet")
                        .labelStyle(VerticalLabelStyle())
                        .opacity(activeChild is RootComponentChild.MultiPaneChild ? 1 : 0.5)
                }

                Button(action: root.onCustomNavigationTabClicked) {
                    Label("Custom Nav", systemImage: "location.north")
                            .labelStyle(VerticalLabelStyle())
                            .opacity(activeChild is RootComponentChild.CustomNavigationChild ? 1 : 0.5)
                }
            }
        }
    }
}

private struct ChildView: View {
    let child: RootComponentChild
    
    var body: some View {
        switch child {
        case let child as RootComponentChild.CountersChild: CountersView(child.component)
        case let child as RootComponentChild.MultiPaneChild: MultiPaneView(child.component)
        case let child as RootComponentChild.CustomNavigationChild: CustomNavigationView(child.component)
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

struct RootView_Previews: PreviewProvider {
    static var previews: some View {
        RootView(PreviewRootComponent())
    }
}

class PreviewRootComponent : RootComponent {
    let childStack: Value<ChildStack<AnyObject, RootComponentChild>> =
        simpleChildStack(RootComponentChild.CountersChild(component: PreviewCountersComponent()))

    func onCountersTabClicked() {}
    func onCardsTabClicked() {}
    func onMultiPaneTabClicked() {}
    func onDynamicFeaturesTabClicked() {}
    func onCustomNavigationTabClicked() {}
}
