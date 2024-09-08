//
//  ListView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct ArticleListView: View {
    private let component: ArticleListComponent

    @StateValue
    private var model: ArticleListComponentModel

    init(_ component: ArticleListComponent) {
        self.component = component
        _model = StateValue(component.models)
    }

    var body: some View {
        List(model.articles, id: \.id) { article in
            Text(article.title)
                .padding()
                .frame(maxWidth: .infinity, alignment: .leading)
                .onTapGesture { component.onArticleClicked(article: article) }
                .listRowBackground(
                    article.id == model.selectedArticleId?.int64Value ? Color.accentColor : Color.clear)
                .listRowInsets(EdgeInsets())
        }.listStyle(PlainListStyle())
    }
}

struct ArticleListView_Previews: PreviewProvider {
    static var previews: some View {
        ArticleListView(PreviewArticleListComponent(isToolbarVisible: false))
    }
}
