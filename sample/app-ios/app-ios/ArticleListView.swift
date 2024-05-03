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
                .onTapGesture { component.onArticleClicked(id: article.id) }
                .listRowBackground(
                    article.id == model.selectedArticleId?.int64Value ? Color.accentColor : Color.clear)
                .listRowInsets(EdgeInsets())
        }.listStyle(PlainListStyle())
    }
}

struct ArticleListView_Previews: PreviewProvider {
    static var previews: some View {
        ArticleListView(PreviewArticleListComponent())
    }
}

class PreviewArticleListComponent: ArticleListComponent {
    var models: Value<ArticleListComponentModel> = mutableValue(
        ArticleListComponentModel(
            articles: [
                ArticleListComponentArticle(id: 1, title: "Test Title 1"),
                ArticleListComponentArticle(id: 2, title: "Test Title 2"),
                ArticleListComponentArticle(id: 3, title: "Test Title 3")
            ],
            isToolbarVisible: true,
            selectedArticleId: 1
        )
    )
    
    func onArticleClicked(id: Int64) {}
    func onCloseClicked() {}
}
