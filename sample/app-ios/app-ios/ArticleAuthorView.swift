//
//  ArticleAuthorView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 29/09/2024.
//

import SwiftUI
import Shared

struct ArticleAuthorView: View {
    private let component: ArticleAuthorComponent
    
    @StateValue
    private var model: ArticleAuthorComponentModel

    init(_ component: ArticleAuthorComponent) {
        self.component = component
        _model = StateValue(component.models)
    }
    
    var body: some View {
        if model.isToolbarVisible {
            NavigationView {
                VStack {
                    AuthorView(
                        name: model.author.name,
                        bio: model.author.bio,
                        isCloseButtonVisible: model.isCloseButtonVisible,
                        onCloseClicked: component.onCloseClicked
                    )
                }.navigationBarTitle(
                    Text(model.author.name),
                    displayMode: .inline
                ).navigationBarItems(
                    leading: Image(systemName: "arrow.backward")
                        .aspectRatio(contentMode: .fit)
                        .imageScale(.large)
                        .foregroundColor(.blue)
                        .onTapGesture(perform: component.onCloseClicked)
                )
            }
        } else {
            AuthorView(
                name: model.author.name,
                bio: model.author.bio,
                isCloseButtonVisible: model.isCloseButtonVisible,
                onCloseClicked: component.onCloseClicked
            )
        }
    }
}

private struct AuthorView: View {
    let name: String
    let bio: String
    let isCloseButtonVisible: Bool
    let onCloseClicked: () -> Void
    
    var body: some View {
        ScrollView([.vertical]) {
            VStack(alignment: .leading) {
                HStack() {
                    Text(name)
                        .font(.title3)
                        .frame(maxWidth: .infinity, alignment: .leading)

                    if (isCloseButtonVisible) {
                        Button(action: onCloseClicked) {
                            Image(systemName: "xmark")
                        }
                    }
                }
                .padding([.top, .leading, .trailing, .bottom])
                
                Text(bio)
                    .padding([.leading, .trailing])
                    .lineLimit(nil)
            }
        }
    }
}
