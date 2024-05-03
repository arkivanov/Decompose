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
    
    init(_ root: RootComponent) {
        self.root = root
    }
    
    var body: some View {
        StackView(
            stackValue: StateValue(root.stack),
            getTitle: { _ in "Heh" },
            onBack: root.onBackClicked
        ) { child in
            switch child {
            case let child as TabsChild: TabsView(child.component)
            case let child as CustomNavigationChild: CustomNavigationView(child.component)
            default: EmptyView()
            }
        }
    }
}

private typealias TabsChild = RootComponentChild.TabsChild
private typealias CustomNavigationChild = RootComponentChild.CustomNavigationChild

struct RootView_Previews: PreviewProvider {
    static var previews: some View {
        RootView(PreviewRootComponent())
    }
}
