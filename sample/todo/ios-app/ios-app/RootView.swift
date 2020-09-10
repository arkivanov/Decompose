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
    @ObservedObject
    private var child: ObservableValue<TodoRootChild>
    
    init(_ model: TodoRootModel) {
        self.child = ObservableValue(model.child)
    }
    
    var body: some View {
        ZStack {
            if (self.child.value is TodoRootChild.Main) {
                MainView((self.child.value as! TodoRootChild.Main).model)
                    .transition(.asymmetric(insertion: AnyTransition.move(edge: .leading), removal: AnyTransition.move(edge: .leading)))
                    .animation(.easeInOut)
                    .zIndex(1)
            }
            
            if (self.child.value is TodoRootChild.Edit) {
                EditView((self.child.value as! TodoRootChild.Edit).model)
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
        let child: Value<TodoRootChild> =
            mutableValue(
                TodoRootChild.Main(model: MainView_Previews.Model())
                //TodoRootChild.Edit(model: EditView_Previews.Model())
        )
    }
}
