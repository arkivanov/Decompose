//
//  RootView.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/13/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Todo

struct RootView: View {
    private let routerState: Value<RouterState<AnyObject, TodoRootChild>>

    init(_ model: TodoRootModel) {
        self.routerState = model.routerState
    }
    
    var body: some View {
        RouterView(self.routerState) { child, isHidden in
            if (child is TodoRootChild.Main) {
                MainView((child as! TodoRootChild.Main).model)
                .isHidden(isHidden)
                .zIndex(1)
            }

            if (child is TodoRootChild.Edit) {
                EditView((child as! TodoRootChild.Edit).model)
                .isHidden(isHidden)
                .transition(.asymmetric(insertion: AnyTransition.move(edge: .trailing), removal: AnyTransition.move(edge: .trailing)))
                .animation(.easeInOut)
                .zIndex(2)
            }
        }
    }
}

struct RootView_Previews: PreviewProvider {
    static var previews: some View {
        RootView(Model())
    }
    
    class Model : TodoRootModel {
        let routerState: Value<RouterState<AnyObject, TodoRootChild>> =
            simpleRouterState(TodoRootChild.Main(model: MainView_Previews.Model()))
                              //TodoRootChild.Edit(model: EditView_Previews.Model())
    }
}
