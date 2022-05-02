//
//  RootView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct RootView: View {
    private let root: Root
    
    @ObservedObject
    private var routerState: ObservableValue<RouterState<AnyObject, RootChild>>
    
    private var activeChild: RootChild { routerState.value.activeChild.instance }
    
    init(_ root: Root) {
        self.root = root
        routerState = ObservableValue(root.routerState)
    }
    
    var body: some View {
        VStack {
            ChildView(child: activeChild)
                .frame(maxHeight: .infinity)
            
            HStack(spacing: 16) {
                Button(action: root.onCountersTabClicked) {
                    Label("Counters", systemImage: "123.rectangle")
                        .labelStyle(VerticalLabelStyle())
                        .opacity(activeChild is RootChild.CountersChild ? 1 : 0.5)
                }
                
                Button(action: root.onMultiPaneTabClicked) {
                    Label("Multi-Pane", systemImage: "list.bullet")
                        .labelStyle(VerticalLabelStyle())
                        .opacity(activeChild is RootChild.MultiPaneChild ? 1 : 0.5)
                }
            }
        }
    }
}

private struct ChildView: View {
    let child: RootChild
    
    var body: some View {
        switch child {
        case let child as RootChild.CountersChild: CountersView(child.component)
        case let child as RootChild.MultiPaneChild: MultiPaneView(child.component)
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
        RootView(RootPreview())
    }
}

class RootPreview : Root {
    let routerState: Value<RouterState<AnyObject, RootChild>> =
        simpleRouterState(RootChild.CountersChild(component: CountersPreview()))

    func onCountersTabClicked() {}
    func onMultiPaneTabClicked() {}
    func onDynamicFeaturesTabClicked() {}
}
