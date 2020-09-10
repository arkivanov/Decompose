//
//  TodoAdd.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/13/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Todo

struct AddView: View {
    private let events: TodoAddEvents
    
    @ObservedObject
    private var data: ObservableValue<TodoAddData>

    init(_ model: TodoAddModel) {
        self.events = model
        self.data = ObservableValue(model.data)
    }
        
    var body: some View {
        let textBinding = Binding(get: { self.data.value.text }, set: self.events.onTextChanged)
        
        return HStack {
            TextField("Todo text", text: textBinding)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .edgesIgnoringSafeArea(Edge.Set.bottom)

            Button(action: events.onAddClicked) {
                Image(systemName: "plus")
            }.frame(minWidth: 36, minHeight: 36)
        }.padding(8)
    }
}

struct AddView_Previews: PreviewProvider {
    static var previews: some View {
        AddView(Model())
    }
    
    class Model: TodoAddModel {
        let data: Value<TodoAddData> =
            mutableValue(
                TodoAddData(
                    text: "Todo text"
                )
        )
        
        func onAddClicked() {
        }
        
        func onTextChanged(text: String) {
        }
    }
}
