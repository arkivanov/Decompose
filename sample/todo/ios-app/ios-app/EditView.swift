//
//  EditView.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 9/13/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import SwiftUI
import Todo

struct EditView: View {
    private let events: TodoEditEvents
    
    @ObservedObject
    private var data: ObservableValue<TodoEditData>
    
    init(_ model: TodoEditModel) {
        self.events = model
        self.data = ObservableValue(model.data)
    }
    
    var body: some View {
        let binding = Binding(get: { self.data.value.text }, set: events.onTextChanged)
        
        return NavigationView {
            VStack{
                TextField("TodoText", text: binding)
                    .frame(maxHeight: .infinity)
                    .padding(8)
                
                HStack {
                    Text("Completed")
                    Image(systemName: data.value.isDone ? "checkmark.square" : "square")
                        .onTapGesture { self.events.onDoneChanged(isDone: !self.data.value.isDone) }
                }.padding(8)
            }
            .navigationBarTitle("Edit todo", displayMode: .inline)
            .navigationBarItems(
                leading: Button(action: { withAnimation { self.events.onFinished() } } ) {
                    HStack {
                        Image(systemName: "chevron.left")
                        Text("Close")
                    }
                }
            )
        }
    }
}

struct EditView_Previews: PreviewProvider {
    static var previews: some View {
        EditView(Model())
    }
    
    class Model: TodoEditModel {
        let data: Value<TodoEditData> =
            mutableValue(
                TodoEditData(
                    text: "Todo text",
                    isDone: true
                )
        )
        
        func onDoneChanged(isDone: Bool) {
        }
        
        func onFinished() {
        }
        
        func onTextChanged(text: String) {
        }
    }
}
