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
        self.listModel = model.listModel
        self.addModel = model.addModel
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
        MainView(Model())
    }
    
    class Model: TodoMainModel {
        let listModel: TodoListModel = ListView_Previews.Model()
        let addModel: TodoAddModel = AddView_Previews.Model()
    }
}
