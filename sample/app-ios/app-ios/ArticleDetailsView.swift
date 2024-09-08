//
//  ArticleDetailsView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct ArticleDetailsView: View {
    private let component: ArticleDetailsComponent
    
    @StateValue
    private var model: ArticleDetailsComponentModel

    init(_ component: ArticleDetailsComponent) {
        self.component = component
        _model = StateValue(component.models)
    }
    
    var body: some View {
        if model.isToolbarVisible {
            NavigationView {
                VStack {
                    DetailsView(
                        authorName: model.article.authorName,
                        text: model.article.text,
                        onAuthorClicked: component.onAuthorClicked
                    )
                }.navigationBarTitle(
                    Text(model.article.title),
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
            DetailsView(
                authorName: model.article.authorName,
                text: model.article.text,
                onAuthorClicked: component.onAuthorClicked
            )
        }
    }
}

private struct DetailsView: View {
    let authorName: String
    let text: String
    let onAuthorClicked: () -> Void
    
    var body: some View {
        ScrollView([.vertical]) {
            VStack(alignment: .leading) {
                HStack {
                    Text("Author: ")
                        .font(.title3)
                    
                    Text(authorName)
                        .font(.title3)
                        .underline()
                }
                .padding([.top, .leading, .trailing, .bottom])
                .onTapGesture(perform: onAuthorClicked)
                
                Text(text)
                    .padding([.leading, .trailing])
                    .lineLimit(nil)
            }
        }
    }
}

struct DetailsView_Previews: PreviewProvider {
    static var previews: some View {
        ArticleDetailsView(PreviewArticleDetailsComponent(isToolbarVisible: true))
    }
}
