//
//  MainView.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/13/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Todo

struct MainView: View {
    private var listModel: TodoListModel
    private var addModel: TodoAddModel
    
    init(_ model: TodoMainModel) {
        self.listModel = model.list.model
        self.addModel = model.add.model
    }
    
    var body: some View {
        NavigationView {
            VStack {
                ListView(self.listModel)
                AddView(self.addModel)
            }.navigationBarTitle("Decompose Todo Sample", displayMode: .inline)
        }
    }
}

struct MainView_Previews: PreviewProvider {
    static var previews: some View {
        MainView(StubModel())
    }
    
    class StubTodoMain: TodoMain {
        let model: TodoMainModel = StubModel()
    }
    
    private class StubModel: TodoMainModel {
        let list: TodoList = ListView_Previews.StubTodoList()
        let add: TodoAdd = AddView_Previews.StubTodoAdd()
    }
}
